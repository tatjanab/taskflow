import useTaskData from '@/hooks/useTaskData'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import TaskFooterSubmitActions from './TaskFooterSubmitActions'
import TaskFooterDeleteAction from './TaskFooterDeleteAction'

type TaskFormFooterProps = {
  isSubmitting: boolean
  isEditing: boolean
  onCloseModal: () => void
}

function TaskFormFooter({
  isSubmitting,
  isEditing,
  onCloseModal,
}: TaskFormFooterProps) {
  const { deleteTask } = useTaskData()
  const searchParams = useSearchParams()
  const taskId = searchParams.get('selectedTask') || ''
  const [isOpen, setIsOpen] = useState(true)

  const handleDelete = async () => {
    try {
      await deleteTask(taskId)
      setIsOpen(false)
      onCloseModal()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return (
    <div className=' -mx-6 px-6 py-2 flex flex-row justify-between'>
      <TaskFooterDeleteAction
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />
      <TaskFooterSubmitActions
        onCloseModal={onCloseModal}
        isSubmitting={isSubmitting}
        isEditing={isEditing}
      />
    </div>
  )
}

export default TaskFormFooter
