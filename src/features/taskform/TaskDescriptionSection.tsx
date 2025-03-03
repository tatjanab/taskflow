import { UseFormRegister } from 'react-hook-form'
import { z } from 'zod'
import { taskSchema } from '@/models/zod_schema'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
}

function TaskDescriptionSection({ register }: TaskFormProps) {
  return (
    <div className='flex flex-col gap-2 mb-5'>
      <Label htmlFor='description' className='font-medium text-gray-700'>
        Description
      </Label>
      <Textarea
        {...register('description')}
        id='description'
        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  )
}

export default TaskDescriptionSection
