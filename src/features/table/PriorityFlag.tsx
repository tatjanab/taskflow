import { TableCell } from '@components/ui/table'
import { ArrowUp, ArrowDown, MoreHorizontal } from 'lucide-react'

function PriorityFlag({ priority }: { priority: string }) {
  return (
    <TableCell className='px-8 py-4 flex flex-row items-center'>
      <span
        className={`text-${priority} mr-2 h-6 w-6 flex items-center justify-center`}
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
