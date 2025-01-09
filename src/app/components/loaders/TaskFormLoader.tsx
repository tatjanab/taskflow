import { FormControl, FormLabel, Skeleton } from '@chakra-ui/react'

function TaskFormLoader() {
  return (
    <div>
      <div className='flex flex-row gap-4'>
        <FormControl className='flex flex-col w-1/2'>
          <FormLabel mb='5px' fontSize='xs' fontWeight='bold'>
            Task ID
          </FormLabel>
          <Skeleton height='32px' />
        </FormControl>

        <FormControl className='flex flex-col mb-4 w-1/2'>
          <FormLabel mb='5px' fontSize='xs' fontWeight='bold'>
            Status
          </FormLabel>
          <Skeleton height='32px' />
        </FormControl>
      </div>

      <FormControl className='flex flex-col mb-4 w-full'>
        <FormLabel mb='5px' fontSize='xs' fontWeight='bold'>
          Summary
        </FormLabel>
        <Skeleton height='32px' />
      </FormControl>

      <div className='flex flex-row gap-4'>
        <FormControl className='flex flex-col mb-4 w-1/2'>
          <FormLabel mb='5px' fontSize='xs' fontWeight='bold'>
            Type
          </FormLabel>
          <Skeleton height='32px' />
        </FormControl>

        <FormControl className='flex flex-col mb-4 w-1/2'>
          <FormLabel mb='5px' fontSize='xs' fontWeight='bold'>
            Priority
          </FormLabel>
          <Skeleton height='32px' />
        </FormControl>
      </div>

      <FormControl className='flex flex-col mb-4 w-1/2'>
        <FormLabel mb='5px' fontSize='xs' fontWeight='bold'>
          Assignee
        </FormLabel>
        <Skeleton height='32px' />
      </FormControl>

      <FormControl className='flex flex-col mb-3'>
        <FormLabel mb='5px' fontSize='xs' fontWeight='bold'>
          Description
        </FormLabel>
        <Skeleton height='96px' />
      </FormControl>
    </div>
  )
}

export default TaskFormLoader
