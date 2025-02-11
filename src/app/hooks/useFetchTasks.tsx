import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

function useFetchTasks() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const currentPage = parseInt(searchParams.get('page') || '1', 10) // Default to page 1

  const fetchTasks = async (itemsPerPage = 10) => {
    try {
      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        itemsPerPage: itemsPerPage.toString(),
      })
      if (search) {
        queryParams.set('search', search)
      }

      const res = await fetch(`/api/tasks?${queryParams.toString()}`)
      const response = await res.json()

      if (!res.ok) {
        throw new Error('Failed to fetch tasks')
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
    queryKey: ['taskList', search, currentPage],
    queryFn: () => fetchTasks(10),
    refetchOnWindowFocus: false, // Disable refetching on window focus
    staleTime: 0,
    refetchOnMount: true,
    retry: 2, // Retry failed requests up to 2 times
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
