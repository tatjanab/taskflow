import useTaskData from '@/hooks/useTaskData'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import TaskFooterSubmitActions from './TaskFooterSubmitActions'
import TaskFooterDeleteAction from './TaskFooterDeleteAction'
import { z } from 'zod'
import { taskSchema } from '@/models/zod_schema'

type TaskFormFooterProps = {
  isSubmitting: boolean
  onCloseModal: () => void
  taskDetails: z.infer<typeof taskSchema>
}

function TaskFormFooter({
  isSubmitting,
  onCloseModal,
  taskDetails,
}: TaskFormFooterProps) {
  const { deleteTask } = useTaskData()
  const searchParams = useSearchParams()
  const taskId = searchParams.get('selectedTask') || ''
  const [isOpen, setIsOpen] = useState(true)

  const handleDelete = async () => {
    console.log('Deleting task:', taskId)
    try {
      await deleteTask(taskId)
      setIsOpen(false)
      onCloseModal()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return (
    <div className='-mx-6 px-6 py-2 flex flex-row items-center'>
      <div className='flex w-full justify-between'>
        <div>
          {taskDetails && (
            <TaskFooterDeleteAction
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              handleDelete={handleDelete}
            />
          )}
        </div>
        <div>
          <TaskFooterSubmitActions
            onCloseModal={onCloseModal}
            isSubmitting={isSubmitting}
            taskDetails={taskDetails}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskFormFooter
