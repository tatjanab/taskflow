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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// import taskSchema from '@/models/zod_schema'
import { TaskItem } from '@/models/types'

function NewTaskBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<TaskItem>({})

  const handleAddTask: SubmitHandler<TaskItem> = async (data) => {
    console.log('submitting')
    try {
      console.log(JSON.stringify(data))
    } catch (error) {}
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
                <div className='flex flex-col mb-3'>
                  <label className='text-xs'>Summary</label>
                  <input
                    type='text'
                    {...register('summary')}
                    className='text-xs'
                  />
                  {errors.summary && <p>{errors.summary.message}</p>}
                </div>
                <div className='flex flex-col mb-3'>
                  <label className='text-xs'>Type</label>
                  <select className='text-xs' {...register('type')}>
                    <option value='Feature'>Feature</option>
                    <option value='Improvement'>Improvement</option>
                    <option value='Task'>Task</option>
                    <option value='Bug'>Bug</option>
                  </select>
                  {errors.type && <p>{errors.type.message}</p>}
                </div>
                <div className='flex flex-col mb-3'>
                  <label className='text-xs'>Status</label>
                  <select className='text-xs' {...register('status')}>
                    <option value='Open'>Open</option>
                    <option value='In progress'>In progress</option>
                    <option value='Done'>Done</option>
                  </select>
                  {errors.status && <p>{errors.status.message}</p>}
                </div>
                <div className='flex flex-col mb-3'>
                  <label className='text-xs'>Assignee</label>
                  <input
                    type='text'
                    {...register('details.assignee')}
                    className='text-xs'
                  />
                  {errors.details?.assignee && (
                    <p>{errors.details?.assignee.message}</p>
                  )}
                </div>
                <div className='flex flex-col mb-3'>
                  <label className='text-xs'>Priority</label>
                  <select className='text-xs' {...register('details.priority')}>
                    <option value='High'>High</option>
                    <option value='Medium'>Medium</option>
                    <option value='Low'>Low</option>
                  </select>
                  {errors.details?.priority && (
                    <p>{errors.details?.priority.message}</p>
                  )}
                </div>
              </div>

              <div className='flex flex-col mb-3'>
                <label className='text-xs'>Description</label>
                <textarea {...register('description')}></textarea>
                {errors.description && <p>{errors.description.message}</p>}
              </div>
              <Button
                colorScheme='green'
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
