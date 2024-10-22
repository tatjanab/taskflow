'use client'

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import { useForm, SubmitHandler } from 'react-hook-form'
import taskSchema from '@/models/zod_schema'
import { z } from 'zod'
// import { TaskItem } from '@/models/types'
import { zodResolver } from '@hookform/resolvers/zod'

type addTaskFields = z.infer<typeof taskSchema>

function NewTaskBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<addTaskFields>({
    resolver: zodResolver(taskSchema),
    mode: 'onChange',
  })

  const handleAddTask: SubmitHandler<addTaskFields> = async (data) => {
    console.log('submitting')
    console.log(JSON.stringify(data))

    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    })

    const response = await res.json()

    if (response.ok) {
      console.log('Task created', response.message)
      onClose()
    } else {
      console.log('Error creating task')
    }
  }
  return (
    <>
      <Button
        colorScheme='blue'
        size='sm'
        width='100px'
        borderRadius='0'
        onClick={onOpen}
      >
        New task
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius='0'>
          <ModalHeader className='text-sm'>New task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(handleAddTask)}>
              <div>
                <div className='flex flex-col mb-3 w-1/2'>
                  <label className='text-xs mb-1'>Task ID</label>
                  <input
                    {...register('_id')}
                    type='number'
                    className='text-xs border-gray-400 border p-1'
                  />
                  {errors._id && (
                    <p className='text-xs text-red-600'>{errors._id.message}</p>
                  )}
                </div>
                <div className='flex flex-col mb-3 w-1/2'>
                  <label className='text-xs mb-1'>Summary</label>
                  <input
                    type='text'
                    {...register('summary')}
                    className='text-xs border-gray-400 border p-1'
                  />
                  {errors.summary && (
                    <p className='text-xs text-red-600'>
                      {errors.summary.message}
                    </p>
                  )}
                </div>
                <div className='flex flex-row gap-4'>
                  <div className='flex flex-col mb-3 w-1/2'>
                    <label className='text-xs mb-1'>Type</label>
                    <select
                      className='text-xs border-gray-400 border p-1'
                      {...register('type')}
                    >
                      <option value='Feature'>Feature</option>
                      <option value='Improvement'>Improvement</option>
                      <option value='Task'>Task</option>
                      <option value='Bug'>Bug</option>
                    </select>
                    {errors.type && (
                      <p className='text-xs text-red-600'>
                        {errors.type.message}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-col mb-3 w-1/2'>
                    <label className='text-xs mb-1'>Priority</label>
                    <select
                      className='text-xs border-gray-400 border p-1'
                      {...register('details.priority')}
                    >
                      <option value='High'>High</option>
                      <option value='Medium'>Medium</option>
                      <option value='Low'>Low</option>
                    </select>
                  </div>
                </div>

                <div className='flex flex-col mb-3 w-1/2'>
                  <label className='text-xs mb-1'>Status</label>
                  <select
                    className='text-xs border-gray-400 border p-1'
                    {...register('status')}
                  >
                    <option value='Open'>Open</option>
                    <option value='In progress'>In progress</option>
                    <option value='Done'>Done</option>
                  </select>
                </div>
                <div className='flex flex-col mb-3 w-1/2'>
                  <label className='text-xs mb-1'>Assignee</label>
                  <input
                    type='text'
                    {...register('details.assignee')}
                    className='text-xs border-gray-400 border p-1'
                  />
                  {errors.details?.assignee && (
                    <p className='text-xs text-red-600'>
                      {errors.details?.assignee.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='flex flex-col mb-3'>
                <label className='text-xs'>Description</label>
                <textarea
                  {...register('description')}
                  className='border-gray-400 border p-1 text-xs'
                ></textarea>
                {errors.description && <p>{errors.description.message}</p>}
              </div>
              <Button
                colorScheme='blue'
                size='sm'
                width='100px'
                borderRadius='0'
                type='submit'
                isLoading={isSubmitting}
              >
                Create
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NewTaskBtn
