import { UseFormRegister } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  taskDetails?: z.infer<typeof taskSchema>
}

function TaskIdentificationSection({ register, taskDetails }: TaskFormProps) {
  return (
    <div className='flex flex-col gap-4 mb-5 w-1/2'>
      <label htmlFor='status' className='font-medium text-gray-700'>
        Status <span className='text-red-500'>*</span>
      </label>
      <select
        {...register('status')}
        id='status'
        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        <option value='Open'>Open</option>
        <option value='In Progress'>In Progress</option>
        <option value='Done'>Done</option>
      </select>
    </div>
  )
}

export default TaskIdentificationSection
