import { Input, FormControl, FormLabel, Select } from '@chakra-ui/react'

function TaskTypeSection({ errors, register }) {
  return (
    <>
      <FormControl
        isInvalid={!!errors.type}
        className='flex flex-col mb-4 w-1/2'
      >
        <FormLabel htmlFor='type' mb='5px' fontSize='xs' fontWeight='bold'>
          Type <span className='text-red-600'>*</span>
        </FormLabel>
        <Select id='type' borderRadius='0' size='sm' {...register('type')}>
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
        <FormLabel htmlFor='priority' mb='5px' fontSize='xs' fontWeight='bold'>
          Priority
        </FormLabel>
        <Select id='priority' size='sm' {...register('details.priority')}>
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </Select>
      </FormControl>
    </>
  )
}

export default TaskTypeSection
