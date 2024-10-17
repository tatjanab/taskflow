'use client'

import { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'
import TableItems from './TableItems'

function Dashboard() {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('/api/tasks')
      const response = await res.json()
      setTaskList(response.data)
    }

    fetchTasks()
  }, [])

  return (
    <TableContainer width='100%' className='p-4'>
      <Table className='text-xs'>
        <Thead>
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
          <TableItems taskList={taskList} />
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Dashboard
