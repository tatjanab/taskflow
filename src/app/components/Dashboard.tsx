'use client'

import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'
import TableItems from './TableItems'
import useFetchTasks from '@/hooks/useFetchTasks'
import TableItemLoader from './loaders/TableItemLoader'

function Dashboard() {
  const { taskList, isError, isLoading } = useFetchTasks()

  return (
    <TableContainer
      width='100%'
      className='px-4'
      maxH='400px'
      overflowY='scroll'
    >
      <Table className='text-xs'>
        <Thead position='sticky' top='0' className='bg-white' zIndex='10'>
          <Tr className='text-sm'>
            <Th p='8px' width='40px'>
              ID #
            </Th>
            <Th p='8px'>Summary</Th>
            <Th p='8px'>Status</Th>
            <Th p='8px'>Assignee</Th>
            <Th p='8px'>Priority</Th>
            <Th p='8px'>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isError && <h2>No tasks in the list</h2>}
          {!isError && <TableItems taskList={taskList} isLoading={isLoading} />}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Dashboard
