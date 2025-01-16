import { ModalFooter } from '@chakra-ui/react'
import useTaskData from '@/hooks/useTaskData'
import { useSearchParams } from 'next/navigation'
import { useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import TaskFooterSubmitActions from './TaskFooterSubmitActions'
import TaskFooterDeleteAction from './TaskFooterDeleteAction'

function TaskFormFooter({ isSubmitting, isEditing, onCloseModal }) {
  const { deleteTask } = useTaskData()
  const searchParams = useSearchParams()
  const taskId = searchParams.get('selectedTask') || ''
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)

  const handleDelete = async () => {
    try {
      //TODO: use taskId instead of id from params
      await deleteTask(taskId)
      onClose()
      onCloseModal()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return (
    <>
      <ModalFooter
        className='border-t-2 -mx-6 px-6 py-4 flex flex-row justify-between bg-slate-50'
        sx={{
          justifyContent: 'space-between !important',
        }}
      >
        <TaskFooterDeleteAction
          onOpen={onOpen}
          onClose={onClose}
          handleDelete={handleDelete}
          cancelRef={cancelRef}
          isOpen={isOpen}
        />
        <TaskFooterSubmitActions
          onCloseModal={onCloseModal}
          isSubmitting={isSubmitting}
          isEditing={isEditing}
        />
      </ModalFooter>
    </>
  )
}

export default TaskFormFooter
