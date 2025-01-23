import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  errors: FieldErrors<z.infer<typeof taskSchema>>
}

function TaskDetailsSection({ register, errors }: TaskFormProps) {
  return (
    <div className='mb-5 flex flex-col w-1/2'>
      <div className='flex flex-col w-1/2'>
        <label htmlFor='assignee' className='mb-2 text-sm font-bold'>
          Assignee <span className='text-red-600'>*</span>
        </label>
        <input
          id='assignee'
          type='text'
          className={`h-10 border rounded-md px-3 ${
            errors.details?.assignee ? 'border-red-500' : 'border-gray-300'
          }`}
          {...register('details.assignee')}
        />
        {errors.details?.assignee && (
          <p className='text-sm text-red-600'>
            {errors.details?.assignee.message}
          </p>
        )}
      </div>
    </div>
  )
}

export default TaskDetailsSection
