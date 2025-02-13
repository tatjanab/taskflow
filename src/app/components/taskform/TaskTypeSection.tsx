import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  taskDetails?: z.infer<typeof taskSchema>
  errors: FieldErrors<z.infer<typeof taskSchema>>
}

function TaskTypeSection({ register, taskDetails, errors }: TaskFormProps) {
  return (
    <>
      <div className='flex flex-col w-1/2'>
        <label htmlFor='type' className='font-medium text-gray-700'>
          Type <span className='text-red-500'>*</span>
        </label>
        <select
          {...register('type')}
          id='type'
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <option value='Feature'>Feature</option>
          <option value='Improvement'>Improvement</option>
          <option value='Task'>Task</option>
          <option value='Bug'>Bug</option>
        </select>
      </div>
      <div className='flex flex-col w-1/2'>
        <label htmlFor='priority' className='font-medium text-gray-700'>
          Priority <span className='text-red-500'>*</span>
        </label>
        <select
          {...register('details.priority')}
          id='priority'
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
      </div>
    </>
  )
}

export default TaskTypeSection
