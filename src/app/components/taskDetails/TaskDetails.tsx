'use client'

import useFetchTaskDetails from '@/hooks/useFetchTaskDetails'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Form, FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import taskSchema from '@/models/zod_schema'
import { useEffect } from 'react'
import { z } from 'zod'
import { FormControl, FormLabel, FormMessage } from '../ui/form'
import { FormItem } from '../ui/form'
import { FormField } from '../ui/form'

type TaskFormFields = z.infer<typeof taskSchema>

function TaskDetails({
  isOpen,
  onCloseModal,
  selectedTaskId,
}: {
  isOpen: boolean
  onCloseModal: () => void
  selectedTaskId: string
}) {
  const { taskDetails, isLoading } = useFetchTaskDetails(selectedTaskId, isOpen)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    control,
  } = useForm<TaskFormFields>({
    resolver: zodResolver(taskSchema),
    mode: 'onChange',
  })

  const form = useForm<TaskFormFields>({
    resolver: zodResolver(taskSchema),
    mode: 'onChange',
    defaultValues: {
      summary: '',
      type: 'Feature',
      details: { priority: 'Medium', assignee: '' },
      status: 'Open',
      description: '',
    },
  })

  useEffect(() => {
    if (taskDetails) {
      setValue('summary', taskDetails.summary)
      setValue('type', taskDetails.type)
      setValue('details.priority', taskDetails.details.priority)
      setValue('status', taskDetails.status)
      setValue('details.assignee', taskDetails.details.assignee)
      setValue('description', taskDetails.description)
    }
  }, [taskDetails])

  const onSubmit: SubmitHandler<TaskFormFields> = (data: TaskFormFields) => {
    console.log(data)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCloseModal}>
      <DialogContent className='w-[600px]'>
        <DialogHeader>
          <DialogTitle className='text-sm uppercase'>Edit task</DialogTitle>
          <h2 className='text-md font-bold'>{taskDetails?.summary}</h2>
          <p className='text-sm font-normal'>
            Fields marked with an asterisk are mandatory{' '}
            <span className='text-red-600'>*</span>
          </p>
        </DialogHeader>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col w-1/2'>
              <label htmlFor='status'>Status</label>
              <select name='status' id='status' {...register('status')}>
                <option value='Open'>Open</option>
                <option value='In Progress'>In Progress</option>
                <option value='Done'>Done</option>
              </select>
            </div>
            <div className='flex flex-col w-1/2 space-y-2'>
              <FormField
                control={control}
                name='summary'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor='summary'
                      className='font-medium text-sm leading-none'
                    >
                      Summary
                    </FormLabel>
                    <FormControl>
                      <input id='summary' type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex flex-row gap-4 mb-5'>
              <div className='flex flex-col w-1/2'>
                <label htmlFor='type'>Type</label>
                <select name='type' id='type' {...register('type')}>
                  <option value='Feature'>Feature</option>
                  <option value='Improvement'>Improvement</option>
                  <option value='Task'>Task</option>
                  <option value='Bug'>Bug</option>
                </select>
              </div>
              <div className='flex flex-col w-1/2'>
                <label htmlFor='priority'>Priority</label>
                <select
                  name='priority'
                  id='priority'
                  {...register('details.priority')}
                >
                  <option value='High'>High</option>
                  <option value='Medium'>Medium</option>
                  <option value='Low'>Low</option>
                </select>
              </div>
            </div>
            <div className='mb-5 flex flex-col w-1/2'>
              <label htmlFor='assignee'>Assignee</label>
              <input
                id='assignee'
                type='text'
                {...register('details.assignee')}
              />
              {errors.details?.assignee && (
                <p className='text-xs text-red-600'>
                  {errors.details?.assignee.message}
                </p>
              )}
            </div>
            <div className='flex flex-col mb-5'>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                {...register('description')}
              ></textarea>
            </div>
            <div className='flex justify-between'>
              <button type='button' onClick={onCloseModal}>
                Cancel
              </button>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDetails
