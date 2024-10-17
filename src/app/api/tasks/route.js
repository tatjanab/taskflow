import { connectToDB } from '@/utils/database'
import Task from '@/models/task'

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
