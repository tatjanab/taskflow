import { FormControl, FormLabel } from '@/components/ui/form'
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from '@/components/ui/select'

function TaskTypeSection({ errors, register }) {
  return (
    <>
      <FormControl className='flex flex-col w-1/2'>
        <FormLabel htmlFor='type' className='mb-2 text-sm font-bold'>
          Type <span className='text-red-600'>*</span>
        </FormLabel>
        <Select id='type' size='sm' {...register('type')}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Feature'>Feature</SelectItem>
            <SelectItem value='Improvement'>Improvement</SelectItem>
            <SelectItem value='Task'>Task</SelectItem>
            <SelectItem value='Bug'>Bug</SelectItem>
          </SelectContent>
        </Select>
        {errors.type && (
          <p className='text-sm text-red-600'>{errors.type.message}</p>
        )}
      </FormControl>
      <FormControl className='flex flex-col w-1/2'>
        <FormLabel htmlFor='priority' className='mb-2 text-sm font-bold'>
          Priority
        </FormLabel>
        <Select id='priority' size='sm' {...register('details.priority')}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Priority' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='High'>High</SelectItem>
            <SelectItem value='Medium'>Medium</SelectItem>
            <SelectItem value='Low'>Low</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
    </>
  )
}

export default TaskTypeSection
