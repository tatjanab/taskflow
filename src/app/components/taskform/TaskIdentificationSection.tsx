import { FormControl, FormLabel } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function TaskIdentificationSection({ register, errors }) {
  return (
    <div className='flex flex-col gap-4 mb-5 w-1/2'>
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Status' />
        </SelectTrigger>
        <SelectContent
          id='status'
          {...register('status')}
          className='border-gray-300 rounded-none bg-gray-100'
        >
          <SelectItem value='Open'>Open</SelectItem>
          <SelectItem value='In Progress'>In Progress</SelectItem>
          <SelectItem value='Done'>Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default TaskIdentificationSection
