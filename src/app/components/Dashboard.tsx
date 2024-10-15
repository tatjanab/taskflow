'use client'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import testData from '@/mock/testData'

function Dashboard() {
  return (
    <TableContainer width='100%' className='py-4'>
      <Table className='text-xs'>
        <Thead>
          <Tr className='text-sm'>
            <Th width='40px'>ID #</Th>
            <Th>Summary</Th>
            <Th>Status</Th>
            <Th>Assignee</Th>
            <Th>Priority</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {testData.map((item) => {
            return (
              <Tr key={item.id} className='hover:bg-slate-100'>
                <Td width='40px'>{item.id}</Td>
                <Td>{item.summary}</Td>
                <Td>
                  <span className='rounded-sm bg-green-100 p-1 font-medium text-green-700'>
                    {item.status}
                  </span>
                </Td>
                <Td>{item.assignee}</Td>
                <Td>{item.priority}</Td>
                <Td>
                  <span className='rounded-sm bg-slate-100 p-1 font-medium text-slate-500'>
                    {item.date}
                  </span>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Dashboard
