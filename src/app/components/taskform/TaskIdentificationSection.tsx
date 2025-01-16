import { FormControl, FormLabel, Select } from '@chakra-ui/react'

function TaskIdentificationSection({ register }) {
  return (
    <div className='flex flex-row gap-4 mb-5'>
      <FormControl className='flex flex-col w-1/2'>
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
