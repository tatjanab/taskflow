import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Project from '@/models/project'
type Project = typeof Project

function useFetchProjects() {
  const queryClient = useQueryClient()

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects')
      const response = await res.json()

      console.log('Fetched projects:', response)

      if (!res.ok) {
        throw new Error(response.message || 'Error fetching projects')
      }

      return response.data || []
    } catch (error) {
      console.error('Error fetching projects:', error)
      throw new Error('Error fetching projects')
    }
  }

  const addProject = async (project: Project) => {
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify(project),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const response = await res.json()
      return response.data || []
    } catch (error) {
      console.error('Error adding project:', error)
      throw new Error('Error adding project')
    }
  }

  const addProjectMutation = useMutation({
    mutationFn: (project: Project) => addProject(project),
    onSuccess: () => {
      console.log('Mutation successful, invalidating projects query...')
      queryClient.invalidateQueries({
        queryKey: ['fetchProjects'],
      })
    },
  })

  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['fetchProjects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return { projects, isLoading, isError, addProjectMutation }
}

export default useFetchProjects
