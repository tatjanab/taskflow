import { Circle, CircleCheckBig, Timer } from 'lucide-react'

function TaskStatus({ status }: { status: string }) {
  return (
    <span className='rounded-sm p-1 font-medium flex items-center justify-start gap-2'>
      {status === 'Open' && <Circle className='text-slate-500 h-4 w-4' />}
      {status === 'In Progress' && <Timer className='text-slate-500 h-5 w-5' />}
      {status === 'Done' && (
        <CircleCheckBig className='text-slate-500 h-4 w-4' />
      )}
      {status}
    </span>
  )
}

export default TaskStatus
