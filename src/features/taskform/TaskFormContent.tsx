'use client'

import { FieldErrors, UseFormRegister, Control } from 'react-hook-form'
import { taskSchema } from '@/models/zod_schema'
import { z } from 'zod'
import TaskFormLoader from '../loaders/TaskFormLoader'
import { useMinimumLoadingTime } from '../../hooks/useMinimumLoadingTime'
import TaskFormHeader from './TaskFormHeader'
import TaskIdentificationSection from './TaskIdentificationSection'
import TaskSummarySection from './TaskSummarySection'
import TaskTypeSection from './TaskTypeSection'
import TaskDetailsSection from './TaskDetailsSection'
import TaskDescriptionSection from './TaskDescriptionSection'
import TaskFormFooter from './TaskFormFooter'
import { UseFormSetValue } from 'react-hook-form'
type addTaskFields = z.infer<typeof taskSchema>
type TaskFormContentProps = {
  onCloseModal: () => void
  register: UseFormRegister<addTaskFields>
  errors: FieldErrors<addTaskFields>
  isSubmitting: boolean
  taskDetails: addTaskFields
  taskId: string
  isLoading: boolean
  setValue: UseFormSetValue<addTaskFields>
}

function TaskFormContent({
  onCloseModal,
  isSubmitting,
  taskId,
  isLoading,
  taskDetails,
  register,
  errors,
  setValue,
}: TaskFormContentProps) {
  const isLoadingDelayed = useMinimumLoadingTime(isLoading)

  return (
    <div className='w-full p-0'>
      {isLoadingDelayed ? (
        <TaskFormLoader />
      ) : (
        <>
          <TaskFormHeader taskId={taskId} taskSummary={taskDetails.summary} />
          <hr className='border-gray-300 my-3' />
          <div className='p-0'>
            <div className='p-2'>
              <TaskIdentificationSection
                setValue={setValue}
                register={register}
                taskDetails={taskDetails}
              />
              <TaskSummarySection register={register} errors={errors} />
              <div className='flex flex-row gap-4 mb-5'>
                <TaskTypeSection
                  setValue={setValue}
                  register={register}
                  taskDetails={taskDetails}
                />
              </div>
              <TaskDetailsSection register={register} errors={errors} />
              <TaskDescriptionSection register={register} />
              <TaskFormFooter
                isSubmitting={isSubmitting}
                taskDetails={taskDetails}
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
