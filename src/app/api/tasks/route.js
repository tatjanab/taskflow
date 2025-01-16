import { connectToDB } from '@/utils/database'
import Task from '@/models/task'
import Counter from '@/models/counter'

export const GET = async () => {
  try {
    await connectToDB()

    const tasks = await Task.find({}) // Fetch all tasks
    console.log('Fetched tasks:', tasks)

    return new Response(JSON.stringify({ success: true, data: tasks }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.log(error)
    return new Response('Failed to fetch all tasks', { status: 500 })
  }
}

export const POST = async (request) => {
  try {
    const body = await request.json()

    await connectToDB()

    // Find the highest existing task ID
    const highestTask = await Task.findOne({}).sort({ _id: -1 }).lean()
    const startValue = highestTask ? highestTask._id : 0

    // Initialize or update counter if needed
    await Counter.findByIdAndUpdate(
      'taskId',
      { $max: { seq: startValue } },
      { upsert: true },
    )
    // Get next sequence value
    const counter = await Counter.findByIdAndUpdate(
      'taskId',
      { $inc: { seq: 1 } },
      { new: true, upsert: true },
    )

    // create a new task using the data from the request
    const newTask = new Task({
      _id: counter.seq, // Use the sequence number as _id
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
