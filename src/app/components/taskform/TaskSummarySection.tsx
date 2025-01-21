import { FormControl, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

function TaskSummarySection({ errors, register }) {
  return (
    <FormControl className='flex flex-col mb-5 w-full'>
      <FormLabel htmlFor='summary' className='mb-2 text-sm font-bold'>
        Summary <span className='text-red-600'>*</span>
      </FormLabel>
      <Input
        id='summary'
        type='text'
        className={errors.summary ? 'border-red-500' : 'border-gray-300'}
        {...register('summary')}
        size='sm'
      />
      {errors.summary && (
        <p className='text-sm text-red-600'>{errors.summary.message}</p>
      )}
    </FormControl>
  )
}

export default TaskSummarySection
