import { FormLabel, Input, FormControl } from '@chakra-ui/react'

function TaskDetailsSection({ errors, register }) {
  return (
    <div className='mb-5'>
      <FormControl
        isInvalid={!!errors.details?.assignee}
        className='flex flex-col w-1/2'
      >
        <FormLabel htmlFor='assignee' mb='5px' fontSize='xs' fontWeight='bold'>
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
  )
}

export default TaskDetailsSection
