import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import { taskSchema } from '@/models/zod_schema'
import { Label } from '@components/ui/label'
import { Input } from '@components/ui/input'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  errors: FieldErrors<z.infer<typeof taskSchema>>
}

function TaskDetailsSection({ register, errors }: TaskFormProps) {
  return (
    <div className='mb-5 flex flex-col gap-2 w-1/2'>
      <Label htmlFor='assignee' className='font-medium text-gray-700'>
        Assignee <span className='text-red-500'>*</span>
      </Label>
      <Input
        {...register('details.assignee')}
        id='assignee'
        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      {errors.details?.assignee && (
        <p className='text-red-500 text-sm'>
          {errors.details.assignee.message}
        </p>
      )}
    </div>
  )
}

export default TaskDetailsSection
