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
    <div className='sticky bg-white top-0 border-b-2 flex flex-row justify-between items-center mb-3 p-4'>
      <div>
        {taskId && (
          <>
            <p className='text-sm uppercase text-gray-400'>Edit task</p>
            <h2 className='text-md font-bold'>{taskSummary}</h2>
          </>
        )}
        {!taskId && <h6 className='mb-3 text-sm'>Create a new task</h6>}
        <p className='text-sm font-normal'>
          Fields marked with an asterisk are mandatory{' '}
          <span className='text-red-600'>*</span>
        </p>
      </div>

      <button className='p-2 hover:bg-gray-100 rounded-md' onClick={onClose}>
        <XCircle height='16px' width='16px' />
      </button>
    </div>
  )
}

export default TaskFormHeader
