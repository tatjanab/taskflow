import { DialogTitle } from '@/components/ui/dialog'

type TaskFormHeaderProps = {
  taskId: string
  taskSummary: string
}

function TaskFormHeader({ taskId, taskSummary }: TaskFormHeaderProps) {
  return (
    <div className='sticky top-0 p-2'>
      <div className='flex flex-col'>
        <DialogTitle className='text-md uppercase font-normal mb-2'>
          {taskId ? 'Edit task' : 'Create a new task'}
        </DialogTitle>
        {taskId && <h2 className='text-xl font-bold mb-1'>{taskSummary}</h2>}
        <p className='text-sm font-normal'>
          Fields marked with an asterisk are mandatory{' '}
          <span className='text-red-600'>*</span>
        </p>
      </div>
    </div>
  )
}

export default TaskFormHeader
