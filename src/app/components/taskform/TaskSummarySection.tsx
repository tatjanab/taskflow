import { Control } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'
import {
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
  FormControl,
} from '../ui/form'
import { Input } from '../ui/input'
type TaskFormProps = {
  control: Control<z.infer<typeof taskSchema>>
}

function TaskSummarySection({ control }: TaskFormProps) {
  return (
    <div className='flex flex-col mb-5 w-full'>
      <FormField
        control={control}
        name='summary'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Summary</FormLabel>
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

export default TaskSummarySection
