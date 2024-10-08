"use client";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import testData from "../mock/testData";

function Dashboard() {
  return (
    <TableContainer width='100%' className='py-4'>
      <Table className='text-xs'>
        <Thead>
          <Tr className='text-sm'>
            <Th>ID #</Th>
            <Th>Summary</Th>
            <Th>Status</Th>
            <Th>Assignee</Th>
          </Tr>
        </Thead>
        <Tbody>
            {testData.map(item => {
                return (
                  <Tr key={item.id}>
                    <Td width="50px">{item.id}</Td>
                    <Td>{item.summary}</Td>
                    <Td>
                      <span className='rounded-sm bg-green-200 p-1 font-bold text-green-700'>
                        {item.status}
                      </span>
                    </Td>
                    <Td>{item.assignee}</Td>
                  </Tr>
                )
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Dashboard;
