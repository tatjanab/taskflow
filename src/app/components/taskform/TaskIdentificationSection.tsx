import { UseFormRegister, FieldErrors, Control } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '../ui/select'

type TaskFormProps = {
  control: Control<z.infer<typeof taskSchema>>
}

function TaskIdentificationSection({ control }: TaskFormProps) {
  return (
    <div className='flex flex-col gap-4 mb-5 w-1/2'>
      <FormField
        control={control}
        name='status'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Status <span className='text-red-500'>*</span>
            </FormLabel>
            <FormControl>
              <Select
                {...field}
                onValueChange={field.onChange}
                value={field.value}
                defaultValue='Open'
              >
                <SelectTrigger>
                  <SelectValue placeholder='Select status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value='Open'>Open</SelectItem>
                    <SelectItem value='In Progress'>In Progress</SelectItem>
                    <SelectItem value='Done'>Done</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default TaskIdentificationSection
