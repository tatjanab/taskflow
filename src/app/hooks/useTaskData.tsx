import taskSchema from '@/models/zod_schema'
import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

type addTaskFields = z.infer<typeof taskSchema>

function useTaskData() {
  const queryClient = useQueryClient()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const currentPage = parseInt(searchParams.get('page') || '1', 10)

  const handleAddTask = async (data: addTaskFields, projectId: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
    const res = await fetch(`${baseUrl}/api/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ ...data, projectId }),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Server error response:', errorText)
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

  const handleDeleteTask = async (taskId: string) => {
    const res = await fetch(`/api/tasks/${taskId}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      throw new Error('Failed to delete a task')
    }
  }

  const addTaskMutation = useMutation({
    mutationFn: ({
      data,
      projectId,
    }: {
      data: addTaskFields
      projectId: string
    }) => handleAddTask(data, projectId),
    onSuccess: () => {
      console.log('Mutation successful, invalidating tasks query...')

      queryClient.invalidateQueries({
        queryKey: ['taskList'],
      })
    },
  })

  const updateTaskMutation = useMutation({
    mutationFn: handleUpdateTask,
    onSuccess: () => {
      console.log('Mutation successful, invalidating tasks query...')

      // Force a fresh refetch of the task list
      queryClient.invalidateQueries({
        queryKey: ['taskList', search, currentPage],
        exact: true,
        refetchType: 'active',
      })

      // Optionally, you can also remove any stale data
      queryClient.resetQueries({ queryKey: ['taskList'] })
    },
  })

  const deleteTaskMutation = useMutation({
    mutationFn: handleDeleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['taskList', search, currentPage],
        exact: true,
        refetchType: 'active',
      })
    },
  })

  return {
    addTask: addTaskMutation.mutateAsync,
    updateTask: updateTaskMutation.mutateAsync,
    deleteTask: deleteTaskMutation.mutateAsync,
    isUpdateSuccess: updateTaskMutation.isSuccess,
    isUpdateError: updateTaskMutation.isError,
    isAddSuccess: addTaskMutation.isSuccess,
    isAddError: addTaskMutation.isError,
    isDeleteSuccess: deleteTaskMutation.isSuccess,
    isDeleteError: deleteTaskMutation.isError,
  }
}

export default useTaskData
