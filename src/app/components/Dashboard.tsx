'use client'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import useFetchTasks from '@/hooks/useFetchTasks'
import { useRouter } from 'next/navigation'
import TableItems from './TableItems'
import TableItemLoader from './loaders/TableItemLoader'
import TaskForm from './TaskForm'
import { useCallback } from 'react'
import useSearchState from '@/hooks/useSearchState'

function Dashboard() {
  const { taskList, isError, isLoading } = useFetchTasks()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Memoize the handleOpenTask callback
  const handleOpenTask = useCallback(
    (taskId: string) => {
      router.push(`?selectedTask=${taskId}`, { scroll: false }) // Add scroll: false to prevent unnecessary scrolling
    },
    [router],
  )

  const handleClose = useCallback(() => {
    router.push('/', { scroll: false })
    onClose()
  }, [router, onClose])

  return (
    <>
      <TableContainer
        width='100%'
        className='px-4'
        maxH='400vh'
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
            {isError && <Td>No tasks in the list</Td>}
            {!isError &&
              (isLoading ? (
                <TableItemLoader />
              ) : (
                <TableItems
                  taskList={taskList}
                  onOpen={onOpen}
                  handleOpenTask={handleOpenTask}
                />
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen && <TaskForm isOpen={isOpen} onClose={handleClose} />}
    </>
  )
}

export default Dashboard
