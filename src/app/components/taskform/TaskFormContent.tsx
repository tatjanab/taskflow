'use client'

import { FieldErrors, UseFormRegister, Control } from 'react-hook-form'
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
  control: Control<addTaskFields>
}

function TaskFormContent({
  onCloseModal,
  isSubmitting,
  taskDetails,
  taskId,
  isLoading,
  setValue,
  control,
}: TaskFormContentProps) {
  const [isEditing, setIsEditing] = useState(false)
  // Add useEffect to set initial values when taskDetails changes
  useEffect(() => {
    if (taskDetails && taskDetails._id) {
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
      <TaskFormHeader taskId={taskId} taskSummary={taskDetails.summary} />
      <div className='p-0'>
        {isLoadingDelayed ? (
          <TaskFormLoader />
        ) : (
          <>
            <div className='p-2'>
              <TaskIdentificationSection control={control} />
              <TaskSummarySection control={control} />
              <div className='flex flex-row gap-4 mb-5'>
                <TaskTypeSection control={control} />
              </div>
              <TaskDetailsSection control={control} />
              <TaskDescriptionSection control={control} />
              <TaskFormFooter
                isSubmitting={isSubmitting}
                isEditing={isEditing}
                onCloseModal={onCloseModal}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TaskFormContent
