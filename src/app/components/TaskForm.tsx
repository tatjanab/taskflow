'use client'

import { Form } from '@/components/ui/form'
import { Suspense } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import taskSchema from '@/models/zod_schema'
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
  const searchParams = useSearchParams()
  const taskId = searchParams.get('selectedTask') || ''

  const handleAddTask: SubmitHandler<addTaskFields> = async (data) => {
    try {
      if (taskId) {
        await updateTask(data)
      } else {
        await addTask(data)
      }
      console.log('Task added successfully')
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  const form = useForm<addTaskFields>({
    resolver: zodResolver(taskSchema),
    mode: 'onChange',
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = form // destructure after creating form instance

  const { addTask, isAddSuccess, updateTask, isUpdateSuccess } = useTaskData()
  const { taskDetails, isLoading } = useFetchTaskDetails(
    isOpen && taskId ? taskId : '',
    isOpen,
  )

  useEffect(() => {
    if (isAddSuccess || isUpdateSuccess) {
      onCloseModal()
    }
  }, [isAddSuccess, isUpdateSuccess, onCloseModal])

  return (
    <TaskFormContent
      onCloseModal={onCloseModal}
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      taskDetails={taskDetails || {}}
      taskId={taskId}
      isLoading={isLoading}
      setValue={setValue}
      handleSubmit={handleSubmit(handleAddTask)}
    />
  )
}

function TaskForm(props: TaskProps) {
  return (
    <Suspense fallback={null}>
      <TaskFormInner {...props} />
    </Suspense>
  )
}

export default TaskForm
