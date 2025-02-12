import { useQuery } from '@tanstack/react-query'

function useFetchProjects() {
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

  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['fetchProjects'],
    queryFn: fetchProjects,
  })

  return { projects, isLoading, isError }
}

export default useFetchProjects
