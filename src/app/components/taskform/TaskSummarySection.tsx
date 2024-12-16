import { Input, FormControl, FormLabel } from '@chakra-ui/react'

function TaskSummarySection({ errors, register }) {
  return (
    <FormControl
      isInvalid={!!errors.summary}
      className='flex flex-col mb-4 w-full'
    >
      <FormLabel htmlFor='summary' mb='5px' fontSize='xs' fontWeight='bold'>
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
  )
}

export default TaskSummarySection
