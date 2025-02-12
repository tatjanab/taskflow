import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

function useFetchTasks() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const currentPage = parseInt(searchParams.get('page') || '1', 10)
  const projectId = searchParams.get('projectId') // ✅ Keep as string

  console.log('🔍 Fetching tasks for projectId:', projectId) // ✅ Debugging

  const fetchTasks = async (itemsPerPage = 10) => {
    try {
      if (!projectId) {
        console.warn('❌ Missing projectId') // ✅ Debugging
        return { tasks: [], totalItems: 0 }
      }

      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        itemsPerPage: itemsPerPage.toString(),
        projectId: projectId, // ✅ Send as string
      })
      if (search) {
        queryParams.set('search', search)
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
    queryKey: ['taskList', search, currentPage, projectId],
    queryFn: () => fetchTasks(10),
    enabled: !!projectId, // ✅ Only fetch if `projectId` exists
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
