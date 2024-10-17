import { connectToDB } from '@utils/database'
import taskSchema from '../../../models/task';

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const task = await 
  } catch (error) {
    return new Response('Failed to fetch the task list')
  }
}
