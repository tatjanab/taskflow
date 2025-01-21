'use client'

import { Dialog } from '@/components/ui/dialog'
import { Suspense } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<addTaskFields>({
    resolver: zodResolver(taskSchema),
    mode: 'onChange',
  })

  const { addTask, isAddSuccess, updateTask, isUpdateSuccess } = useTaskData()
  // Only fetch when we have a taskId and the modal is open
  const { taskDetails, isLoading } = useFetchTaskDetails(
    isOpen && taskId ? taskId : '',
    isOpen,
  )

  useEffect(() => {
    if (isAddSuccess) {
      onCloseModal()
    }
  }, [isAddSuccess, onCloseModal])

  useEffect(() => {
    if (isUpdateSuccess) {
      onCloseModal()
    }
  }, [isUpdateSuccess, onCloseModal])

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

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onCloseModal}>
        <TaskFormContent
          onCloseModal={onCloseModal}
          handleSubmit={handleSubmit(handleAddTask)}
          errors={errors}
          register={register}
          isSubmitting={isSubmitting}
          taskDetails={taskDetails || {}}
          taskId={taskId}
          setValue={setValue}
          isLoading={isLoading}
        />
      </Dialog>
    </>
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
