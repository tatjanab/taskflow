import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  errors: FieldErrors<z.infer<typeof taskSchema>>
}

function TaskDescriptionSection({ register, errors }: TaskFormProps) {
  return (
    <div className='flex flex-col mb-5'>
      <label htmlFor='description' className='mb-2 text-sm font-bold'>
        Description
      </label>
      <textarea
        id='description'
        {...register('description')}
        className={`min-h-[100px] border rounded-md p-3 resize-none ${
          errors.description ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {errors.description && (
        <p className='text-sm text-red-600'>{errors.description.message}</p>
      )}
    </div>
  )
}

export default TaskDescriptionSection
