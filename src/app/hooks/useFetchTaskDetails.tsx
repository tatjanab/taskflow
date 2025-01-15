import { useQuery } from '@tanstack/react-query'

function useFetchTaskDetails(taskId: string, isOpen) {
  const fetchTaskDetails = async (taskId: string) => {
    if (!taskId) {
      console.warn('No taskId provided to fetchTaskDetails')
      return null // or you can throw an error here
    }

    try {
      const res = await fetch(`/api/tasks/${taskId}`)
      const response = await res.json()

      if (!res.ok) {
        throw new Error('Error getting task details' + response.status)
      }

      return response.data
    } catch (error) {
      throw new Error('Error getting task details')
    }
  }

  const { data: taskDetails, isLoading } = useQuery({
    queryKey: ['fetchTaskId', taskId],
    queryFn: () => fetchTaskDetails(taskId),
    enabled: !!taskId && isOpen, // Only run the query if the taskId is provided
    refetchOnWindowFocus: false, // Disable refetching on window focus
    staleTime: 0, //cache for 5 minutes
  })

  return { taskDetails, isLoading }
}

export default useFetchTaskDetails
