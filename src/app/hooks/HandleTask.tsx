import taskSchema from '@/models/zod_schema'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'

type addTaskFields = z.infer<typeof taskSchema>

function useTaskData() {
  const handleAddTask = async (data: addTaskFields) => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error('Failed to create a task')
    }

    const response = await res.json()

    return response
  }

  const {
    mutateAsync: addTask,
    isSuccess,
    isError,
    isPending,
  } = useMutation({
    mutationKey: ['new-task'],
    mutationFn: handleAddTask,
  })

  return { addTask, isSuccess, isError, isPending }
}

export default useTaskData
