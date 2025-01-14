import { connectToDB } from '@/utils/database'
import Task from '@/models/task'

export const GET = async (request, { params }) => {
  try {
    await connectToDB()
    const task = await Task.findById(params.id)

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
    const task = await Task.findByIdAndUpdate(params.id, body, {
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
