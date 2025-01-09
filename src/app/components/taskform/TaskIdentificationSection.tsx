import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

function TaskIdentificationSection({ errors, register }) {
  return (
    <div className='flex flex-row gap-4'>
      <FormControl isInvalid={!!errors._id} className='flex flex-col w-1/2'>
        <FormLabel htmlFor='id' mb='5px' fontSize='xs' fontWeight='bold'>
          Task ID <span className='text-red-600'>*</span>
        </FormLabel>
        <Input
          id='id'
          {...register('_id', {
            setValueAs: (value) => (value ? value.toString() : ''),
          })}
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
        <FormLabel htmlFor='status' mb='5px' fontSize='xs' fontWeight='bold'>
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
  )
}

export default TaskIdentificationSection
