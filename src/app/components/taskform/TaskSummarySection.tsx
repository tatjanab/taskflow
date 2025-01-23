import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  errors: FieldErrors<z.infer<typeof taskSchema>>
}

function TaskSummarySection({ register, errors }: TaskFormProps) {
  return (
    <div className='flex flex-col mb-5 w-full'>
      <label htmlFor='summary' className='mb-2 text-sm font-bold'>
        Summary <span className='text-red-600'>*</span>
      </label>
      <input
        id='summary'
        type='text'
        className={`h-10 border rounded-md px-3 ${
          errors.summary ? 'border-red-500' : 'border-gray-300'
        }`}
        {...register('summary')}
      />
      {errors.summary && (
        <p className='text-sm text-red-600'>{errors.summary.message}</p>
      )}
    </div>
  )
}

export default TaskSummarySection
