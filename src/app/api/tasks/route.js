import { connectToDB } from '@/utils/database'
import Task from '@/models/task'
import Counter from '@/models/counter'
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
    const projectId = url.searchParams.get('projectId') // ✅ Keep as string
    const statusParam = url.searchParams.get('status')

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

    const skip = (page - 1) * itemsPerPage

    // Query using projectId as a string (match DB format)
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

    // Validate that projecId exists
    const project = await Project.findOne({ _id: body.projectId })
    if (!project) {
      return new Response(
        JSON.stringify({ success: false, message: 'Project not found' }),
        { status: 404 },
      )
    }

    // update the projectId counter sequence
    let counter = await Counter.findOne({ projectId: project._id })
    if (!counter) {
      counter = new Counter({ projectId: project._id, seq: 1 })
    } else {
      counter.seq += 1
    }
    await counter.save()

    const newTaskId = `${project.prefix}-${counter.seq}`

    // create a new task using the data from the request
    const newTask = new Task({
      _id: new mongoose.Types.ObjectId(), //Keep MongoDB default ID
      taskId: newTaskId,
      projectId: project._id,
      type: body.type,
      summary: body.summary,
      status: body.status,
      details: {
        assignee: body.details.assignee,
        priority: body.details.priority,
        labels: body.detils?.labels,
        creationDate: body.details?.creationDate,
        completionDate: body.details?.completionDate,
      },
      description: body.description,
    })

    // Save the new task to the DB
    await newTask.save()

    // Return success response
    return new Response(JSON.stringify({ success: true, data: newTask }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
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
