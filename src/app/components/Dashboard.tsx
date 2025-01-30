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

function DashboardInner() {
  const { taskList, isError, isLoading } = useFetchTasks()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenTask = useCallback(
    (taskId: string) => {
      setIsOpen(true)
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
            <TableHead className='px-8 py-4'>ID #</TableHead>
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

      <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className='w-[600px]'>
          <TaskForm isOpen={isOpen} onCloseModal={handleClose} />
        </DialogContent>
      </Dialog>
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
