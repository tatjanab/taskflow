import { XCircle } from 'react-feather'
import { DialogHeader } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type TaskFormHeaderProps = {
  onClose: () => void
  taskId: string
  taskSummary: string
}

function TaskFormHeader({ onClose, taskId, taskSummary }: TaskFormHeaderProps) {
  return (
    <DialogHeader className='sticky bg-white top-0 border-b-2 flex flex-row justify-between items-center mb-3'>
      <div>
        {taskId && (
          <>
            <p className='text-sm uppercase text-gray-400'>Edit task</p>
            <h3 className='text-md font-bold'>{taskSummary}</h3>
          </>
        )}
        {!taskId && <h6 className='mb-3 text-sm'>Create a new task</h6>}
        <p className='text-sm font-normal'>
          Fields marked with an asterisk are mandatory{' '}
          <span className='text-red-600'>*</span>
        </p>
      </div>

      <Button variant='ghost' size='sm' onClick={onClose}>
        <XCircle height='10px' width='10px' />
      </Button>
    </DialogHeader>
  )
}

export default TaskFormHeader
