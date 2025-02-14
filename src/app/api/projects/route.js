import { connectToDB } from '@/utils/database'
import Project from '@/models/project'

export const GET = async (request) => {
  try {
    await connectToDB()
    const projects = await Project.find({})
    if (!projects || projects.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: 'No projects found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } },
      )
    }
    return new Response(JSON.stringify({ success: true, data: projects }), {
      status: 200,
    })
  } catch (error) {
    console.error('Error connecting to database:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

export const POST = async (request) => {
  try {
    await connectToDB()
    const body = await request.json()
    const { name, description, prefix } = body
    const project = new Project({ name, description, prefix })
    await project.save()
    return new Response(JSON.stringify({ success: true, data: project }), {
      status: 200,
    })
  } catch (error) {
    console.error('Error connecting to database:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
