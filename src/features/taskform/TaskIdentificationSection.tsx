import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { z } from 'zod'
import { taskSchema } from '@/models/zod_schema'
import { Label } from '@components/ui/label'
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select'

type TaskFormProps = {
  register: UseFormRegister<z.infer<typeof taskSchema>>
  setValue: UseFormSetValue<z.infer<typeof taskSchema>>
  taskDetails: z.infer<typeof taskSchema>
}

function TaskIdentificationSection({
  register,
  setValue,
  taskDetails,
}: TaskFormProps) {
  return (
    <div className='flex flex-col gap-2 mb-5 w-1/2'>
      <Label htmlFor='status' className='font-medium text-gray-700'>
        Status <span className='text-red-500'>*</span>
      </Label>
      <Select
        defaultValue={taskDetails?.status || 'Open'}
        onValueChange={(value) =>
          setValue('status', value as 'Open' | 'In Progress' | 'Done')
        }
      >
        <SelectTrigger>
          <SelectValue placeholder='Select Status' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='Open'>Open</SelectItem>
          <SelectItem value='In Progress'>In Progress</SelectItem>
          <SelectItem value='Done'>Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default TaskIdentificationSection
