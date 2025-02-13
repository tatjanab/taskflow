import { connectToDB } from '@/utils/database'
import Task from '@/models/task'
import Counter from '@/models/counter'
import Project from '@/models/project'
import mongoose from 'mongoose'

export const GET = async (request) => {
  try {
    await connectToDB()

    const url = new URL(request.url)
    const page = parseInt(url.searchParams.get('page') || '1', 10)
    const itemsPerPage = parseInt(
      url.searchParams.get('itemsPerPage') || '10',
      10,
    )
    const projectId = url.searchParams.get('projectId') //  Keep as string
    const statusParam = url.searchParams.get('status')
    const searchParam = url.searchParams.get('search')

    if (page < 1 || itemsPerPage < 1) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid pagination parameters',
        }),
        { status: 400 },
      )
    }

    if (!projectId) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Missing projectId parameter',
        }),
        { status: 400 },
      )
    }

    // Build the filter object based on the query parameters
    const status = statusParam
      ? statusParam.split(',').map((s) => s.trim())
      : ['Open', 'In Progress']

    // Build filter dynamically
    const filter = { projectId, status: { $in: status } }

    // Add search conditions if search parameter exists
    if (searchParam) {
      filter.$or = [{ summary: { $regex: searchParam, $options: 'i' } }]
    }
    const skip = (page - 1) * itemsPerPage

    // Query using the combined filter
    const totalItems = await Task.countDocuments(filter)
    const tasks = await Task.find(filter)
      .sort({ _id: 1 })
      .skip(skip)
      .limit(itemsPerPage)

    return new Response(
      JSON.stringify({
        success: true,
        data: tasks,
        totalItems,
        currentPage: page,
        itemsPerPage,
      }),
      { status: 200 },
    )
  } catch (error) {
    console.error('❌ Error fetching paginated tasks:', error)
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to fetch tasks',
        error: error.message,
      }),
      { status: 500 },
    )
  }
}
export const POST = async (request) => {
  try {
    const body = await request.json()
    await connectToDB()

    console.log('Received payload:', body)

    // Use projectId from body (not from URL)
    const projectId = body.projectId

    // Validate that project exists
    const project = await Project.findOne({ prefix: projectId })
    if (!project) {
      console.error('Project not found for prefix:', projectId)
      return new Response(
        JSON.stringify({ success: false, message: 'Project not found' }),
        { status: 404 },
      )
    }
    console.log('Found project:', project)
    console.log('Project _id:', project._id, 'Type:', typeof project._id)

    // Update the projectId counter sequence using projectId from body
    const counter = await Counter.findOneAndUpdate(
      { projectId }, // filter: counter for this project
      { $inc: { seq: 1 } }, // increment the sequence by 1
      { new: true, upsert: true }, // return the new doc; create if not exists
    )
    if (!counter) {
      throw new Error('Counter update failed')
    }

    await counter.save()
    console.log('Counter saved successfully:', counter)

    const newTaskId = `${project.prefix}-${counter.seq}`

    // Create a new task using the data from the request
    const newTask = new Task({
      taskId: newTaskId,
      projectId, // Use the same projectId here
      type: body.type,
      summary: body.summary,
      status: body.status,
      details: {
        assignee: body.details.assignee,
        priority: body.details.priority,
        labels: body.details?.labels,
        creationDate: body.details?.creationDate,
        completionDate: body.details?.completionDate,
      },
      description: body.description,
    })

    // Save the new task to the DB
    await newTask.save()
    console.log('New task saved:', newTask)

    return new Response(JSON.stringify({ success: true, data: newTask }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in POST API:', error)
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to post a new task',
        error: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
