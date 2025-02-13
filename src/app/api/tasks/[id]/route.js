import { connectToDB } from '@/utils/database'
import Task from '@/models/task'
import Counter from '@/models/counter'

export const GET = async (request, { params }) => {
  try {
    await connectToDB()
    const { id } = await params
    // Use findOne with the custom taskId field instead of findById
    const task = await Task.findOne({ taskId: id })

    return new Response(JSON.stringify({ success: true, data: task }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.log(error)
    return new Response('Failed to fetch the task list')
  }
}

export const PATCH = async (request, { params }) => {
  try {
    await connectToDB()
    const body = await request.json()
    const { id } = params
    const task = await Task.findOneAndUpdate({ taskId: id }, body, {
      new: true, // This option returns the updated document
    })
    return new Response(JSON.stringify({ success: true, data: task }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.log(error)
    return new Response('Failed to update the task', { status: 500 })
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB()
    const { id } = await params
    // Delete the current task
    const task = await Task.findOneAndDelete({ taskId: id })

    // Find the new highest task after deletion
    const newHighestTask = await Task.findOne({}).sort({ _id: -1 }).lean()

    // Update the counter with the new highest task ID
    // If no tasks remain, set sequence to 0
    await Counter.findByIdAndUpdate(
      'taskId',
      { $set: { seq: newHighestTask ? newHighestTask._id : 0 } },
      { upsert: true },
    )

    return new Response(JSON.stringify({ success: true, data: task }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.log(error)
    return new Response('Failed to delete the task', { status: 500 })
  }
}
