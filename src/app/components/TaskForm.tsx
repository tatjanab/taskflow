'use client'

import { Modal, ModalOverlay } from '@chakra-ui/react'

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
  onClose: () => void
}

type addTaskFields = z.infer<typeof taskSchema>

function TaskForm({ isOpen, onClose }: TaskProps) {
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

  const { addTask, isSuccess, isError, isPending } = useTaskData()

  const searchParams = useSearchParams()
  const taskId = searchParams.get('selectedTask') || ''
  // Only fetch when we have a taskId and the modal is open
  const { taskDetails, isLoading } = useFetchTaskDetails(
    isOpen && taskId ? taskId : null,
    isOpen,
  )

  console.log('taskId ' + taskId)

  useEffect(() => {
    if (isSuccess) {
      onClose()
    }
  }, [isSuccess, onClose])

  const handleAddTask: SubmitHandler<addTaskFields> = async (data) => {
    try {
      await addTask(data) // Trigger mutation (POST request) using React Query
      console.log('Task added successfully')
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={true}
        onCloseComplete={() => reset()}
        size='lg'
        variant='outline'
      >
        <ModalOverlay />
        <TaskFormContent
          onClose={onClose}
          handleSubmit={handleSubmit(handleAddTask)}
          errors={errors}
          register={register}
          isSubmitting={isSubmitting}
          taskDetails={taskDetails || {}}
          taskId={taskId}
          setValue={setValue}
          isLoading={isLoading}
        />
      </Modal>
    </>
  )
}

export default TaskForm
