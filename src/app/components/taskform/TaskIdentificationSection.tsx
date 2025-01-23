import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  errors: FieldErrors<z.infer<typeof taskSchema>>
}

function TaskIdentificationSection({ register, errors }: TaskFormProps) {
  return (
    <div className='flex flex-col gap-4 mb-5 w-1/2'>
      <div>
        <label className='block mb-2'>Status</label>
        <select
          {...register('status')}
          className='w-[180px] h-10 border border-gray-300 rounded-md bg-white px-3'
          defaultValue='Open'
        >
          <option value='Open'>Open</option>
          <option value='In Progress'>In Progress</option>
          <option value='Done'>Done</option>
        </select>
        {errors.status && (
          <p className='text-sm text-red-600'>{errors.status.message}</p>
        )}
      </div>
    </div>
  )
}

export default TaskIdentificationSection
