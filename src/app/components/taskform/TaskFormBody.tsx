'use client'
import {
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
} from '@chakra-ui/react'

function TaskFormBody({ handleSubmit, errors, register, isSubmitting }) {
  return (
    <ModalBody>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='flex flex-row gap-4'>
            <FormControl
              isInvalid={!!errors._id}
              className='flex flex-col w-1/2'
            >
              <FormLabel htmlFor='id' mb='5px' fontSize='xs' fontWeight='bold'>
                Task ID <span className='text-red-600'>*</span>
              </FormLabel>
              <Input
                id='id'
                {...register('_id')}
                type='number'
                size='sm'
                borderRadius='0'
                borderColor={errors._id ? 'red.500' : 'gray.300'}
              />
              {errors._id && (
                <p className='text-xs text-red-600'>{errors._id.message}</p>
              )}
            </FormControl>

            <FormControl className='flex flex-col mb-4 w-1/2'>
              <FormLabel
                htmlFor='status'
                mb='5px'
                fontSize='xs'
                fontWeight='bold'
              >
                Status
              </FormLabel>
              <Select
                id='status'
                size='sm'
                {...register('status')}
                borderRadius='0'
                backgroundColor='gray.100'
              >
                <option value='Open'>Open</option>
                <option value='In Progress'>In Progress</option>
                <option value='Done'>Done</option>
              </Select>
            </FormControl>
          </div>

          <FormControl
            isInvalid={!!errors.summary}
            className='flex flex-col mb-4 w-full'
          >
            <FormLabel
              htmlFor='summary'
              mb='5px'
              fontSize='xs'
              fontWeight='bold'
            >
              Summary <span className='text-red-600'>*</span>
            </FormLabel>
            <Input
              id='summary'
              type='text'
              borderWidth='1'
              borderRadius='0'
              borderColor={errors.summary ? 'red.500' : 'gray.300'}
              {...register('summary')}
              size='sm'
            />
            {errors.summary && (
              <p className='text-xs text-red-600'>{errors.summary.message}</p>
            )}
          </FormControl>
          <div className='flex flex-row gap-4'>
            <FormControl
              isInvalid={!!errors.type}
              className='flex flex-col mb-4 w-1/2'
            >
              <FormLabel
                htmlFor='type'
                mb='5px'
                fontSize='xs'
                fontWeight='bold'
              >
                Type <span className='text-red-600'>*</span>
              </FormLabel>
              <Select
                id='type'
                borderRadius='0'
                size='sm'
                {...register('type')}
              >
                <option value='Feature'>Feature</option>
                <option value='Improvement'>Improvement</option>
                <option value='Task'>Task</option>
                <option value='Bug'>Bug</option>
              </Select>
              {errors.type && (
                <p className='text-xs text-red-600'>{errors.type.message}</p>
              )}
            </FormControl>
            <FormControl className='flex flex-col mb-4 w-1/2'>
              <FormLabel
                htmlFor='priority'
                mb='5px'
                fontSize='xs'
                fontWeight='bold'
              >
                Priority
              </FormLabel>
              <Select id='priority' size='sm' {...register('details.priority')}>
                <option value='High'>High</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>
              </Select>
            </FormControl>
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
            <p className='text-xs text-red-600'>{errors.description.message}</p>
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
      </form>
    </ModalBody>
  )
}

export default TaskFormBody