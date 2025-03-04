import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import { taskSchema } from '@/models/zod_schema'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  errors: FieldErrors<z.infer<typeof taskSchema>>
}

function TaskSummarySection({ register, errors }: TaskFormProps) {
  return (
    <div className='flex flex-col mb-5 gap-2 w-full'>
      <Label htmlFor='summary' className='font-medium text-gray-700'>
        Summary <span className='text-red-500'>*</span>
      </Label>
      <Input
        {...register('summary')}
        id='summary'
        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      {errors?.summary && (
        <p className='text-red-500 text-sm mt-1'>{errors?.summary?.message}</p>
      )}
    </div>
  )
}

export default TaskSummarySection
