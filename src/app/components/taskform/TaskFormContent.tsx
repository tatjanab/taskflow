'use client'
import {
  ModalContent,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  ModalCloseButton,
} from '@chakra-ui/react'

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
                  <FormControl
                    isInvalid={!!errors.details?.assignee}
                    className='flex flex-col mb-4 w-1/2'
                  >
                    <FormLabel
                      htmlFor='assignee'
                      mb='5px'
                      fontSize='xs'
                      fontWeight='bold'
                    >
                      Assignee <span className='text-red-600'>*</span>
                    </FormLabel>
                    <Input
                      id='assignee'
                      type='text'
                      borderColor={errors.summary ? 'red.500' : 'gray.300'}
                      {...register('details.assignee')}
                      size='sm'
                    />
                    {errors.details?.assignee && (
                      <p className='text-xs text-red-600'>
                        {errors.details?.assignee.message}
                      </p>
                    )}
                  </FormControl>
                </div>

                <FormControl className='flex flex-col mb-3'>
                  <FormLabel
                    htmlFor='description'
                    mb='5px'
                    fontSize='xs'
                    fontWeight='bold'
                  >
                    Description
                  </FormLabel>
                  <Textarea
                    id='description'
                    {...register('description')}
                    size='sm'
                    resize='none'
                  ></Textarea>
                  {errors.description && (
                    <p className='text-xs text-red-600'>
                      {errors.description.message}
                    </p>
                  )}
                </FormControl>
                <ModalFooter>
                  <Button
                    colorScheme='blue'
                    size='sm'
                    width='100px'
                    borderRadius='3px'
                    type='submit'
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? 'Creating...' : 'Create'}
                  </Button>
                </ModalFooter>
              </>
            )}
          </form>
        </ModalBody>
      </ModalContent>
    </div>
  )
}

export default TaskFormContent
