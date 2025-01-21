import { FormLabel, FormControl, FormItem } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

function TaskDescriptionSection({ errors, register }) {
  return (
    <>
      <FormItem className='flex flex-col mb-5'>
        <FormLabel htmlFor='description' className='mb-2 text-sm font-bold'>
          Description
        </FormLabel>
        <FormControl>
          <Textarea
            id='description'
            {...register('description')}
            size='sm'
            resize='none'
          ></Textarea>
          {errors.description && (
            <p className='text-sm text-red-600'>{errors.description.message}</p>
          )}
        </FormControl>
      </FormItem>
    </>
  )
}

export default TaskDescriptionSection
