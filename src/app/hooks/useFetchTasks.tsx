import { useQuery } from '@tanstack/react-query'

function useFetchTasks() {
  const fetchTasks = async () => {
    const res = await fetch('/api/tasks')
    const response = await res.json()

    return response.data
  }

  const {
    data: taskList = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['taskList'],
    queryFn: fetchTasks,
  })

  return { taskList, isError, isLoading }
}

export default useFetchTasks
