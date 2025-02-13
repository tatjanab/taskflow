import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

function useFetchTasks() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const currentPage = parseInt(searchParams.get('page') || '1', 10)
  const projectId = searchParams.get('projectId')
  const status = searchParams.get('status') || null

  const fetchTasks = async (itemsPerPage = 10) => {
    try {
      if (!projectId) {
        console.warn('❌ Missing projectId')
        return { tasks: [], totalItems: 0 }
      }

      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        itemsPerPage: itemsPerPage.toString(),
        projectId: projectId,
      })
      if (search) {
        queryParams.set('search', search)
      }
      if (status) {
        queryParams.set('status', status)
      }

      const res = await fetch(`/api/tasks?${queryParams.toString()}`)
      const response = await res.json()

      if (!res.ok) {
        throw new Error(response.message || 'Failed to fetch tasks')
      }

      return { tasks: response.data, totalItems: response.totalItems }
    } catch (error) {
      console.error('Error fetching tasks:', error)
      return { tasks: [], totalItems: 0 }
    }
  }

  const {
    data = { tasks: [], totalItems: 0 },
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['taskList', search, currentPage, projectId, status],
    queryFn: () => fetchTasks(10),
    enabled: !!projectId && !!status, // only if projectId and status are present
    staleTime: 0,
    refetchOnMount: true,
    retry: 2,
  })

  return {
    taskList: data.tasks,
    totalItems: data.totalItems,
    isError,
    isLoading,
    currentPage,
  }
}

export default useFetchTasks
