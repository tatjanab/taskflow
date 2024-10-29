import { Tr, Td } from '@chakra-ui/react'
import { format } from 'date-fns' // Optional, for better formatting
import taskSchema from '@/models/zod_schema'
import { z } from 'zod'
import TableItemLoader from './loaders/TableItemLoader'

type TaskLists = {
  taskList: z.infer<typeof taskSchema>[]
  isLoading: boolean
}

function TableItems({ taskList, isLoading }: TaskLists) {
  const taskListSorted = taskList.sort((a, b) => a._id - b._id)
  return (
    <>
      {taskListSorted.map((item) => {
        const formattedCreationDate = item.details.creationDate
          ? format(new Date(item.details.creationDate), 'yyyy-MM-dd')
          : 'N/A'

        return isLoading ? (
          <TableItemLoader key={Math.random()} />
        ) : (
          <Tr
            key={item._id}
            className='hover:bg-slate-100 hover:cursor-pointer'
          >
            <Td p='8px' width='40px'>
              {item._id}
            </Td>
            <Td p='8px'>{item.summary}</Td>
            <Td p='8px'>
              <span className='rounded-sm bg-green-100 p-1 font-medium text-green-700'>
                {item.status}
              </span>
            </Td>
            <Td p='8px'>{item.details.assignee}</Td>
            <Td p='8px'>{item.details.priority}</Td>
            <Td p='8px'>
              <span className='rounded-sm bg-slate-100 p-1 font-medium text-slate-500'>
                {formattedCreationDate}
              </span>
            </Td>
          </Tr>
        )
      })}
    </>
  )
}

export default TableItems
