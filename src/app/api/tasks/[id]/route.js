import { connectToDB } from '@/utils/database'

export const GET = async (request, { params }) => {
  try {
    await connectToDB()
  } catch (error) {
    return new Response('Failed to fetch the task list')
  }
}
