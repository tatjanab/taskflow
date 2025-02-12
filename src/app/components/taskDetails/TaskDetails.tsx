'use client'

import useFetchTaskDetails from '@/hooks/useFetchTaskDetails'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Form, FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import taskSchema from '@/models/zod_schema'
import { useEffect } from 'react'
import { z } from 'zod'
import {
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
  FormField,
} from '../ui/form'
import {
  Select,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import TaskFormFooter from '../taskform/TaskFormFooter'
import useTaskData from '@/hooks/useTaskData'
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
  const { updateTask, isUpdateSuccess } = useTaskData()
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
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

  // Add useEffect to set initial values when taskDetails changes
  useEffect(() => {
    if (taskDetails && taskDetails._id) {
      Object.entries(taskDetails).forEach(([key, value]) => {
        setValue(key as keyof TaskFormFields, value)
      })
    }
  }, [taskDetails, setValue])

  const handleUpdateTask: SubmitHandler<TaskFormFields> = async (data) => {
    console.log(data._id)
    try {
      await updateTask(data)
      if (isUpdateSuccess) {
        onCloseModal()
      }
      console.log('Task updated successfully')
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCloseModal}>
      <DialogContent className='w-[600px] p-8'>
        <DialogHeader className='mb-3'>
          <DialogTitle className='mb-2'>{taskDetails?.summary}</DialogTitle>
          <p className='text-sm font-normal'>
            Fields marked with an asterisk are mandatory{' '}
            <span className='text-red-600'>*</span>
          </p>
        </DialogHeader>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(handleUpdateTask)}>
            <div className='flex flex-col w-1/2  mb-5'>
              <FormField
                control={control}
                name='status'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='status'>
                      Status <span className='text-red-500'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue='Open'
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select status' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem value='Open'>Open</SelectItem>
                            <SelectItem value='In Progress'>
                              In Progress
                            </SelectItem>
                            <SelectItem value='Done'>Done</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className='flex flex-col mb-5 w-full'>
              <FormField
                control={control}
                name='summary'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor='summary'
                      className='font-medium text-sm leading-none'
                    >
                      Summary <span className='text-red-500'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input id='summary' type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex flex-row gap-4 mb-5'>
              <div className='flex flex-col w-1/2'>
                <FormField
                  control={control}
                  name='type'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='type'>
                        Type <span className='text-red-500'>*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue='Feature'
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='Select type' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Type</SelectLabel>
                              <SelectItem value='Feature'>Feature</SelectItem>
                              <SelectItem value='Improvement'>
                                Improvement
                              </SelectItem>
                              <SelectItem value='Task'>Task</SelectItem>
                              <SelectItem value='Bug'>Bug</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex flex-col w-1/2'>
                <FormField
                  control={control}
                  name='details.priority'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='priority'>
                        Priority <span className='text-red-500'>*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue='Medium'
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='Select priority' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Priority</SelectLabel>
                              <SelectItem value='Low'>Low</SelectItem>
                              <SelectItem value='Medium'>Medium</SelectItem>
                              <SelectItem value='High'>High</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className='mb-5 flex flex-col w-1/2'>
              <FormField
                control={control}
                name='details.assignee'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='assignee'>
                      Assignee <span className='text-red-500'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input id='assignee' type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex flex-col mb-5'>
              <FormField
                control={control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='description'>Description</FormLabel>
                    <FormControl>
                      <Textarea id='description' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <TaskFormFooter
              isSubmitting={isSubmitting}
              isEditing={true}
              onCloseModal={onCloseModal}
            />
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDetails
