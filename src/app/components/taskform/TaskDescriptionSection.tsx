import { UseFormRegister } from 'react-hook-form'
import { z } from 'zod'
import { taskSchema } from '@/models/zod_schema'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  taskDetails?: z.infer<typeof taskSchema>
}

function TaskDescriptionSection({ register, taskDetails }: TaskFormProps) {
  return (
    <div className='flex flex-col mb-5'>
      <label htmlFor='description' className='font-medium text-gray-700'>
        Description
      </label>
      <textarea
        {...register('description')}
        id='description'
        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  )
}

export default TaskDescriptionSection
