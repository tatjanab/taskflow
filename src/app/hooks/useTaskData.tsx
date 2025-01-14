import taskSchema from '@/models/zod_schema'
import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type addTaskFields = z.infer<typeof taskSchema>

function useTaskData() {
  const queryClient = useQueryClient()

  const handleAddTask = async (data: addTaskFields) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
    const res = await fetch(`${baseUrl}/api/tasks`, {
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

  // Add new handler for updating tasks

  const handleUpdateTask = async (data: addTaskFields) => {
    const res = await fetch(`/api/tasks/${data._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error('Failed to update a task')
    }

    const response = await res.json()
    return response
  }

  const addTaskMutation = useMutation({
    mutationKey: ['new-task'],
    mutationFn: handleAddTask,
    onSuccess: () => {
      console.log('Mutation successful, invalidating tasks query...')

      queryClient.invalidateQueries({
        queryKey: ['taskList'],
        exact: true,
        refetchType: 'active',
      })
    },
  })

  const updateTaskMutation = useMutation({
    mutationKey: ['update-task'],
    mutationFn: handleUpdateTask,
    onSuccess: () => {
      console.log('Mutation successful, invalidating tasks query...')

      // Force a fresh refetch of the task list
      queryClient.invalidateQueries({
        queryKey: ['taskList'],
        exact: true,
        refetchType: 'active',
      })

      // Optionally, you can also remove any stale data
      queryClient.resetQueries({ queryKey: ['taskList'] })
    },
  })

  return {
    addTask: addTaskMutation.mutateAsync,
    updateTask: updateTaskMutation.mutateAsync,
    isUpdateSuccess: updateTaskMutation.isSuccess,
    isUpdateError: updateTaskMutation.isError,
    isAddSuccess: addTaskMutation.isSuccess,
    isAddError: addTaskMutation.isError,
  }
}

export default useTaskData
