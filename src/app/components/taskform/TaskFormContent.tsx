'use client'

import { FieldErrors, UseFormRegister } from 'react-hook-form'
import taskSchema from '@/models/zod_schema'
import { z } from 'zod'
import { useEffect, useState } from 'react'
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
  onCloseModal: () => void
  register: UseFormRegister<addTaskFields>
  errors: FieldErrors<addTaskFields>
  isSubmitting: boolean
  taskDetails: addTaskFields
  taskId: string
  isLoading: boolean
  setValue: any
}

function TaskFormContent({
  onCloseModal,
  isSubmitting,
  taskId,
  isLoading,
  taskDetails,
  setValue,
  register,
  errors,
}: TaskFormContentProps) {
  const [isEditing, setIsEditing] = useState(false)
  // Add useEffect to set initial values when taskDetails changes
  useEffect(() => {
    if (taskDetails && taskDetails.taskId) {
      Object.entries(taskDetails).forEach(([key, value]) => {
        setValue(key as keyof addTaskFields, value)
      })

      setIsEditing(true)
    } else {
      setIsEditing(false)
    }
  }, [taskDetails, setValue])

  const isLoadingDelayed = useMinimumLoadingTime(isLoading)

  return (
    <div className='w-full p-0'>
      {isLoadingDelayed ? (
        <TaskFormLoader />
      ) : (
        <>
          <TaskFormHeader taskId={taskId} taskSummary={taskDetails.summary} />
          <div className='p-0'>
            <div className='p-2'>
              <TaskIdentificationSection
                register={register}
                taskDetails={taskDetails}
              />
              <TaskSummarySection
                register={register}
                taskDetails={taskDetails}
                errors={errors}
              />
              <div className='flex flex-row gap-4 mb-5'>
                <TaskTypeSection
                  register={register}
                  taskDetails={taskDetails}
                  errors={errors}
                />
              </div>
              <TaskDetailsSection
                register={register}
                taskDetails={taskDetails}
                errors={errors}
              />
              <TaskDescriptionSection
                register={register}
                taskDetails={taskDetails}
              />
              <TaskFormFooter
                isSubmitting={isSubmitting}
                isEditing={isEditing}
                onCloseModal={onCloseModal}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskFormContent
