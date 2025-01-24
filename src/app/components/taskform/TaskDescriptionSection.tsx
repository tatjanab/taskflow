import { Control } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'
import {
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
} from '../ui/form'
import { Textarea } from '../ui/textarea'

type TaskFormProps = {
  control: Control<z.infer<typeof taskSchema>>
}

function TaskDescriptionSection({ control }: TaskFormProps) {
  return (
    <div className='flex flex-col mb-5'>
      <FormField
        control={control}
        name='description'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default TaskDescriptionSection
