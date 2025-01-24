import { Control } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'
import {
  FormMessage,
  FormControl,
  FormLabel,
  FormItem,
  FormField,
} from '../ui/form'
import { Input } from '../ui/input'

type TaskFormProps = {
  control: Control<z.infer<typeof taskSchema>>
}

function TaskDetailsSection({ control }: TaskFormProps) {
  return (
    <div className='mb-5 flex flex-col w-1/2'>
      <FormField
        control={control}
        name='details.assignee'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Assignee <span className='text-red-500'>*</span>
            </FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default TaskDetailsSection
