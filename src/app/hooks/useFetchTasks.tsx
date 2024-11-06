import { useQuery } from '@tanstack/react-query'

function useFetchTasks() {
  const fetchTasks = async () => {
    try {
      const res = await fetch('/api/tasks')
      const response = await res.json()

      if (!res.ok) {
        throw new Error('Failed to fetch tasks')
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
    queryKey: ['taskList'],
    queryFn: fetchTasks,
    refetchOnWindowFocus: false, // Disable refetching on window focus
  })

  return { taskList, isError, isLoading }
}

export default useFetchTasks
