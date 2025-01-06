'use client'
import { ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'

import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import taskSchema from '@/models/zod_schema'
import { z } from 'zod'
import { useEffect } from 'react'
import TaskFormLoader from '../loaders/TaskFormLoader'
import { useMinimumLoadingTime } from '@/hooks/useMinimumLoadingTime'
import TaskFormHeader from './TaskFormHeader'
import TaskIdentificationSection from './TaskIdentificationSection'
import TaskSummarySection from './TaskSummarySection'
import TaskTypeSection from './TaskTypeSection'
import TaskDetailsSection from './TaskDetailsSection'
import TaskDescriptionSection from './TaskDescriptionSection'
import TaskFormFooter from './TaskFormFooter'

type addTaskFields = z.infer<typeof taskSchema>
type TaskFormContentProps = {
  onClose: () => void
  handleSubmit: () => void
  errors: FieldErrors<addTaskFields>
  register: UseFormRegister<addTaskFields>
  isSubmitting: boolean
  taskDetails: addTaskFields
  taskId: string
  setValue: UseFormSetValue<addTaskFields>
  isLoading: boolean
}

function TaskFormContent({
  onClose,
  handleSubmit,
  errors,
  register,
  isSubmitting,
  taskDetails,
  taskId,
  setValue,
  isLoading,
}: TaskFormContentProps) {
  // Add useEffect to set initial values when taskDetails changes
  useEffect(() => {
    if (taskDetails) {
      Object.entries(taskDetails).forEach(([key, value]) => {
        setValue(key as keyof addTaskFields, value)
      })
    }
  }, [taskDetails, setValue])

  const isLoadingDelayed = useMinimumLoadingTime(isLoading)

  return (
    <div>
      <ModalContent borderRadius='0' className='md:w-2/3 w-full'>
        <TaskFormHeader
          onClose={onClose}
          taskId={taskId}
          taskSummary={taskDetails.summary}
        />
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            {isLoadingDelayed ? (
              <TaskFormLoader />
            ) : (
              <>
                <div>
                  <TaskIdentificationSection
                    errors={errors}
                    register={register}
                  />
                  <TaskSummarySection errors={errors} register={register} />
                  <div className='flex flex-row gap-4'>
                    <TaskTypeSection errors={errors} register={register} />
                  </div>
                  <TaskDetailsSection errors={errors} register={register} />
                </div>
                <TaskDescriptionSection errors={errors} register={register} />
                <TaskFormFooter isSubmitting={isSubmitting} />
              </>
            )}
          </form>
        </ModalBody>
      </ModalContent>
    </div>
  )
}

export default TaskFormContent
