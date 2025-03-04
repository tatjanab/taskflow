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

function TaskTypeSection({ register, setValue, taskDetails }: TaskFormProps) {
  return (
    <>
      <div className='flex flex-col gap-2 w-1/2'>
        <Label htmlFor='type' className='font-medium text-gray-700'>
          Type <span className='text-red-500'>*</span>
        </Label>
        <Select
          defaultValue={taskDetails?.type || 'Feature'}
          onValueChange={(value) =>
            setValue(
              'type',
              value as 'Feature' | 'Improvement' | 'Task' | 'Bug',
            )
          }
        >
          <SelectTrigger>
            <SelectValue placeholder='Select Type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Feature'>Feature</SelectItem>
            <SelectItem value='Improvement'>Improvement</SelectItem>
            <SelectItem value='Task'>Task</SelectItem>
            <SelectItem value='Bug'>Bug</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex flex-col gap-2 w-1/2'>
        <Label htmlFor='priority' className='font-medium text-gray-700'>
          Priority <span className='text-red-500'>*</span>
        </Label>
        <Select
          defaultValue={taskDetails?.details?.priority || 'High'}
          onValueChange={(value) =>
            setValue('details.priority', value as 'High' | 'Medium' | 'Low')
          }
        >
          <SelectTrigger>
            <SelectValue placeholder='Select Priority' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='High'>High</SelectItem>
            <SelectItem value='Medium'>Medium</SelectItem>
            <SelectItem value='Low'>Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}

export default TaskTypeSection
