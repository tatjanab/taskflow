import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

function useFetchTasks() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const fetchTasks = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
      const res = await fetch(`${baseUrl}/api/tasks`)
      const response = await res.json()

      if (!res.ok) {
        throw new Error('Failed to fetch tasks')
      }

      if (search) {
        console.log('search', search)
        // TODO: move the search to the backend, modify the API to accept search params
        return response.data.filter((task) =>
          task.summary.toLowerCase().trim().includes(search.toLowerCase()),
        )
      }

      return response.data
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const {
    data: taskList = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['taskList', search],
    queryFn: fetchTasks,
    refetchOnWindowFocus: false, // Disable refetching on window focus
    staleTime: 0,
    refetchOnMount: true,
    retry: 2, // Retry failed requests up to 2 times
  })

  return { taskList, isError, isLoading }
}

export default useFetchTasks
