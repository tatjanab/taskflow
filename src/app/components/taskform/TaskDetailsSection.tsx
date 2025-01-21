import { FormLabel, FormItem, FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

function TaskDetailsSection({ errors, register }) {
  return (
    <div className='mb-5 flex flex-col w-1/2'>
      <FormItem className='flex flex-col w-1/2'>
        <FormLabel htmlFor='assignee' className='mb-2 text-sm font-bold'>
          Assignee <span className='text-red-600'>*</span>
        </FormLabel>
        <FormControl>
          <Input
            id='assignee'
            type='text'
            className={errors.summary ? 'border-red-500' : 'border-gray-300'}
            {...register('details.assignee')}
            size='sm'
          />
          {errors.details?.assignee && (
            <p className='text-sm text-red-600'>
              {errors.details?.assignee.message}
            </p>
          )}
        </FormControl>
      </FormItem>
    </div>
  )
}

export default TaskDetailsSection
