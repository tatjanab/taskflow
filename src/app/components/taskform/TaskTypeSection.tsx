import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  errors: FieldErrors<z.infer<typeof taskSchema>>
}

function TaskTypeSection({ register, errors }: TaskFormProps) {
  return (
    <>
      <div className='flex flex-col w-1/2'>
        <label htmlFor='type' className='mb-2 text-sm font-bold'>
          Type <span className='text-red-600'>*</span>
        </label>
        <select
          id='type'
          {...register('type')}
          className='w-[180px] h-10 border border-gray-300 rounded-md bg-white px-3'
        >
          <option value='' disabled>
            Type
          </option>
          <option value='Feature'>Feature</option>
          <option value='Improvement'>Improvement</option>
          <option value='Task'>Task</option>
          <option value='Bug'>Bug</option>
        </select>
        {errors.type && (
          <p className='text-sm text-red-600'>{errors.type.message}</p>
        )}
      </div>
      <div className='flex flex-col w-1/2'>
        <label htmlFor='priority' className='mb-2 text-sm font-bold'>
          Priority
        </label>
        <select
          id='priority'
          {...register('details.priority')}
          className='w-[180px] h-10 border border-gray-300 rounded-md bg-white px-3'
        >
          <option value='' disabled>
            Priority
          </option>
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
      </div>
    </>
  )
}

export default TaskTypeSection
