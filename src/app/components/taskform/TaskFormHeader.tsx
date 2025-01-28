import { DialogHeader, DialogTitle } from '@/components/ui/dialog'

type TaskFormHeaderProps = {
  taskId: string
  taskSummary: string
}

function TaskFormHeader({ taskId, taskSummary }: TaskFormHeaderProps) {
  return (
    <div className='sticky top-0 flex flex-row justify-between items-center mb-3 p-2'>
      <div>
        {taskId ? (
          <>
            <DialogTitle className='uppercase text-gray-400'>
              Edit task
            </DialogTitle>
            <h2 className='text-md font-bold'>{taskSummary}</h2>
          </>
        ) : (
          <DialogTitle className='mb-3'>Create a new task</DialogTitle>
        )}
        <p className='text-sm font-normal'>
          Fields marked with an asterisk are mandatory{' '}
          <span className='text-red-600'>*</span>
        </p>
      </div>
    </div>
  )
}

export default TaskFormHeader
