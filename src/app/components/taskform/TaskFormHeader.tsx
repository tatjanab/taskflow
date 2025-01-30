import { DialogTitle } from '@/components/ui/dialog'

type TaskFormHeaderProps = {
  taskId: string
  taskSummary: string
}

function TaskFormHeader({ taskId, taskSummary }: TaskFormHeaderProps) {
  return (
    <div className='sticky top-0 flex flex-row justify-between items-center mb-3 p-2'>
      <div>
        <DialogTitle className='mb-2'>
          {taskId ? 'Edit task' : 'Create a new task'}
        </DialogTitle>
        {taskId && <h2 className='text-md font-bold'>{taskSummary}</h2>}
        <p className='text-sm font-normal'>
          Fields marked with an asterisk are mandatory{' '}
          <span className='text-red-600'>*</span>
        </p>
      </div>
    </div>
  )
}

export default TaskFormHeader
