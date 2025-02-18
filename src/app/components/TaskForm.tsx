'use client'

import { Form } from '@/components/ui/form'
import { Suspense, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { taskSchema } from '@/models/zod_schema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useTaskData from '@/hooks/useTaskData'
import { useEffect } from 'react'
import TaskFormContent from './taskform/TaskFormContent'
import useFetchTaskDetails from '@/hooks/useFetchTaskDetails'
import { useSearchParams } from 'next/navigation'

type TaskProps = {
  isOpen: boolean
  onCloseModal: () => void
}

type addTaskFields = z.infer<typeof taskSchema>

function TaskFormInner({ isOpen, onCloseModal }: TaskProps) {
  const [taskId, setTaskId] = useState('')
  const searchParams = useSearchParams()
  const { addTask, isAddSuccess, updateTask, isUpdateSuccess } = useTaskData()
  const { taskDetails, isLoading } = useFetchTaskDetails(taskId, isOpen)
  const projectId = searchParams.get('projectId')

  useEffect(() => {
    const selectedTask = searchParams.get('selectedTask') || ''
    setTaskId(selectedTask)
  }, [searchParams])

  const form = useForm<addTaskFields>({
    resolver: zodResolver(taskSchema),
    mode: 'onChange',
    defaultValues: {
      summary: '',
      description: '',
      type: 'Task',
      status: 'Open',
      details: {
        assignee: '',
        priority: 'Medium',
      },
    },
  })

  // Reset form with task details when they're loaded
  useEffect(() => {
    if (taskDetails) {
      form.reset({
        summary: taskDetails.summary,
        description: taskDetails.description,
        type: taskDetails.type,
        status: taskDetails.status,
        details: {
          assignee: taskDetails.details?.assignee,
          priority: taskDetails.details?.priority,
        },
      })
    }
  }, [taskDetails, form])

  const handleAddTask: SubmitHandler<addTaskFields> = async (data) => {
    try {
      if (taskId) {
        console.log('Attempting to update task:', taskId)
        await updateTask({ data, taskId })
      } else {
        await addTask({ data, projectId })
      }
      console.log('data', data)
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = form // destructure after creating form instance

  useEffect(() => {
    if (isAddSuccess || isUpdateSuccess) {
      onCloseModal()
    }
  }, [isAddSuccess, isUpdateSuccess, onCloseModal])

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handleAddTask)}>
        <TaskFormContent
          onCloseModal={onCloseModal}
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          taskDetails={taskDetails || {}}
          taskId={taskId}
          setValue={setValue}
          isLoading={isLoading}
        />
      </form>
    </Form>
  )
}

function TaskForm(props: TaskProps) {
  return (
    <div>
      <Suspense fallback={null}>
        <TaskFormInner {...props} />
      </Suspense>
    </div>
  )
}

export default TaskForm
