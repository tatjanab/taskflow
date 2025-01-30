import { TableCell } from '@/components/ui/table'
import { ArrowUp, ArrowDown, MoreHorizontal } from 'react-feather'

function PriorityFlag({ priority }: { priority: string }) {
  return (
    <TableCell className='px-8 py-4 flex flex-row items-center'>
      <span
        className={`rounded-sm bg-${priority} p-1 text-white mr-2 h-6 w-6 flex items-center justify-center`}
      >
        {priority === 'High' && <ArrowUp />}
        {priority === 'Medium' && <MoreHorizontal />}
        {priority === 'Low' && <ArrowDown />}
      </span>
      {priority}
    </TableCell>
  )
}

export default PriorityFlag
