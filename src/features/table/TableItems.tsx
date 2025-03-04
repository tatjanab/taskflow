import { TableRow, TableCell } from '@components/ui/table'
import { format } from 'date-fns' // Optional, for better formatting
import { taskSchema } from '@/models/zod_schema'
import { z } from 'zod'
import PriorityFlag from './PriorityFlag'
import TaskStatus from './TaskStatus'

type TaskLists = {
  taskList: z.infer<typeof taskSchema>[]
  onOpen: () => void
  handleOpenTask: (taskId: string) => void
}

function TableItems({ taskList, onOpen, handleOpenTask }: TaskLists) {
  const taskListSorted = taskList.sort(
    (a, b) => Number(a.taskId) - Number(b.taskId),
  )

  return (
    <>
      {taskListSorted.map((item) => {
        const formattedCreationDate = item.details.creationDate
          ? format(new Date(item.details.creationDate), 'yyyy-MM-dd')
          : 'N/A'

        return (
          <TableRow
            key={item.taskId}
            onClick={() => {
              onOpen()
              handleOpenTask(item.taskId?.toString() || '')
            }}
            className='hover:bg-slate-100 hover:cursor-pointer max-h-[50px]'
          >
            <TableCell className='px-8 py-4 w-25'>{item.taskId}</TableCell>
            <TableCell className='px-8 py-4'>{item.summary}</TableCell>
            <TableCell className='px-8 py-4'>
              <TaskStatus status={item.status} />
            </TableCell>
            <TableCell className='px-8 py-4'>{item.details.assignee}</TableCell>
            <PriorityFlag priority={item.details.priority} />
            <TableCell className='px-8 py-4'>
              <span className='rounded-sm bg-slate-100 p-1 font-medium text-slate-500'>
                {formattedCreationDate}
              </span>
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}

export default TableItems
