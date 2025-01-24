import { XCircle } from 'react-feather'
import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type TaskFormHeaderProps = {
  onClose: () => void
  taskId: string
  taskSummary: string
}

function TaskFormHeader({ onClose, taskId, taskSummary }: TaskFormHeaderProps) {
  return (
    <DialogHeader className='sticky bg-white top-0 border-b-2 flex flex-row justify-between items-center mb-3 p-4'>
      <div>
        {taskId && (
          <>
            <DialogTitle className='text-sm uppercase text-gray-400'>
              Edit task
            </DialogTitle>
            <h2 className='text-md font-bold'>{taskSummary}</h2>
          </>
        )}
        {!taskId && (
          <DialogTitle className='mb-3 text-sm'>Create a new task</DialogTitle>
        )}
        <p className='text-sm font-normal'>
          Fields marked with an asterisk are mandatory{' '}
          <span className='text-red-600'>*</span>
        </p>
      </div>
    </DialogHeader>
  )
}

export default TaskFormHeader
