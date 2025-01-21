import { FormControl, FormLabel } from '@/components/ui/form'

function TaskFormLoader() {
  return (
    <div>
      <div className='flex flex-row gap-4'>
        <FormControl className='flex flex-col w-1/2'>
          <FormLabel className='mb-5 text-sm font-bold'>Task ID</FormLabel>
          <div className='h-8' />
        </FormControl>

        <FormControl className='flex flex-col mb-4 w-1/2'>
          <FormLabel className='mb-5 text-sm font-bold'>Status</FormLabel>
          <div className='h-8' />
        </FormControl>
      </div>

      <FormControl className='flex flex-col mb-4 w-full'>
        <FormLabel className='mb-5 text-sm font-bold'>Summary</FormLabel>
        <div className='h-8' />
      </FormControl>

      <div className='flex flex-row gap-4'>
        <FormControl className='flex flex-col mb-4 w-1/2'>
          <FormLabel className='mb-5 text-sm font-bold'>Type</FormLabel>
          <div className='h-8' />
        </FormControl>

        <FormControl className='flex flex-col mb-4 w-1/2'>
          <FormLabel className='mb-5 text-sm font-bold'>Priority</FormLabel>
          <div className='h-8' />{' '}
        </FormControl>
      </div>

      <FormControl className='flex flex-col mb-4 w-1/2'>
        <FormLabel className='mb-5 text-sm font-bold'>Assignee</FormLabel>
        <div className='h-16' />
      </FormControl>

      <FormControl className='flex flex-col mb-3'>
        <FormLabel className='mb-5 text-sm font-bold'>Description</FormLabel>
        <div className='h-24' />
      </FormControl>
    </div>
  )
}

export default TaskFormLoader
