'use client'

import { Suspense, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import useFetchTasks from '@/hooks/useFetchTasks'
import { useRouter } from 'next/navigation'
import TableItems from './TableItems'
import TableItemLoader from './loaders/TableItemLoader'
import TaskForm from './TaskForm'
import { useCallback } from 'react'
import TaskDetails from './taskDetails/TaskDetails'

function DashboardInner() {
  const { taskList, isError, isLoading } = useFetchTasks()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  // Memoize the handleOpenTask callback
  const handleOpenTask = useCallback(
    (taskId: string) => {
      setSelectedTaskId(taskId)
      router.push(`?selectedTask=${taskId}`, { scroll: false }) // Add scroll: false to prevent unnecessary scrolling
    },
    [router],
  )

  const handleClose = useCallback(() => {
    router.push('/', { scroll: false })
    setIsOpen(false)
  }, [router, setIsOpen])

  return (
    <div>
      <Table className='px-4 text-sm w-full max-h-[100vh] overflow-y-scroll'>
        <TableHeader className='bg-white'>
          <TableRow className='text-sm'>
            <TableHead className='px-8 py-4 5'>ID #</TableHead>
            <TableHead className='px-8 py-4'>Summary</TableHead>
            <TableHead className='px-8 py-4'>Status</TableHead>
            <TableHead className='px-8 py-4'>Assignee</TableHead>
            <TableHead className='px-8 py-4'>Priority</TableHead>
            <TableHead className='px-8 py-4'>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isError && <TableCell>No tasks in the list</TableCell>}
          {!isError &&
            (isLoading ? (
              <TableItemLoader />
            ) : (
              <TableItems
                taskList={taskList}
                onOpen={() => setIsOpen(true)}
                handleOpenTask={handleOpenTask}
              />
            ))}
        </TableBody>
      </Table>
      {isOpen && (
        <TaskDetails
          isOpen={isOpen}
          onCloseModal={handleClose}
          selectedTaskId={selectedTaskId}
        />
      )}
    </div>
  )
}

function Dashboard() {
  return (
    <Suspense fallback={null}>
      <DashboardInner />
    </Suspense>
  )
}

export default Dashboard
