import { Control } from 'react-hook-form'
import { z } from 'zod'
import taskSchema from '@/models/zod_schema'
import {
  FormControl,
  FormMessage,
  FormItem,
  FormField,
  FormLabel,
} from '../ui/form'
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

type TaskFormProps = {
  control: Control<z.infer<typeof taskSchema>>
}

function TaskTypeSection({ control }: TaskFormProps) {
  return (
    <>
      <div className='flex flex-col w-1/2'>
        <FormField
          control={control}
          name='type'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue='Feature'
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Select type' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='Feature'>Feature</SelectItem>
                      <SelectItem value='Improvement'>Improvement</SelectItem>
                      <SelectItem value='Task'>Task</SelectItem>
                      <SelectItem value='Bug'>Bug</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='flex flex-col w-1/2'>
        <FormField
          control={control}
          name='details.priority'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue='High'
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Select priority' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='High'>High</SelectItem>
                      <SelectItem value='Medium'>Medium</SelectItem>
                      <SelectItem value='Low'>Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}

export default TaskTypeSection
