import { DialogFooter } from '@/components/ui/dialog'
import useTaskData from '@/hooks/useTaskData'
import { useSearchParams } from 'next/navigation'
import { useRef, useState } from 'react'
import TaskFooterSubmitActions from './TaskFooterSubmitActions'
import TaskFooterDeleteAction from './TaskFooterDeleteAction'

function TaskFormFooter({ isSubmitting, isEditing, onCloseModal }) {
  const { deleteTask } = useTaskData()
  const searchParams = useSearchParams()
  const taskId = searchParams.get('selectedTask') || ''
  const [isOpen, setIsOpen] = useState(true)

  const handleDelete = async () => {
    try {
      //TODO: use taskId instead of id from params
      await deleteTask(taskId)
      setIsOpen(false)
      onCloseModal()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return (
    <>
      <DialogFooter className='border-t-2 -mx-6 px-6 py-4 flex flex-row bg-slate-50 justify-between'>
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
      </DialogFooter>
    </>
  )
}

export default TaskFormFooter
