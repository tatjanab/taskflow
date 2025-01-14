'use client'

import { Modal, ModalOverlay } from '@chakra-ui/react'
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
  onClose: () => void
}

type addTaskFields = z.infer<typeof taskSchema>

function TaskFormInner({ isOpen, onClose }: TaskProps) {
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

  console.log('taskId ' + taskId)

  useEffect(() => {
    if (isAddSuccess) {
      onClose()
    }
  }, [isAddSuccess, onClose])

  useEffect(() => {
    if (isUpdateSuccess) {
      onClose()
    }
  }, [isUpdateSuccess, onClose])

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

function TaskForm(props: TaskProps) {
  return (
    <Suspense fallback={null}>
      <TaskFormInner {...props} />
    </Suspense>
  )
}

export default TaskForm
