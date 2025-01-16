import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  ModalFooter,
  AlertDialogContent,
} from '@chakra-ui/react'
import useTaskData from '@/hooks/useTaskData'
import { useSearchParams } from 'next/navigation'
import { useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { WarningIcon } from '@chakra-ui/icons'

function TaskFormFooter({ isSubmitting, isEditing, onCloseModal }) {
  const { deleteTask } = useTaskData()
  const searchParams = useSearchParams()
  const taskId = searchParams.get('selectedTask') || ''
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)

  const handleDelete = async () => {
    try {
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
        <div>
          <Button
            variant='ghost'
            color='red.500'
            size='xs'
            minWidth='80px'
            borderRadius='2px'
            onClick={onOpen}
          >
            Delete
          </Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent borderRadius='0' top='20px' maxWidth='400px'>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  <h3 className='text-lg font-bold flex items-center gap-2'>
                    <WarningIcon color='red.600' /> Delete task?
                  </h3>
                </AlertDialogHeader>

                <AlertDialogBody>
                  <p className='text-sm text-slate-900'>
                    Are you sure you want to delete this task? This action
                    cannot be undone.
                  </p>
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button
                    ref={cancelRef}
                    onClick={onClose}
                    variant='ghost'
                    size='xs'
                    minWidth='80px'
                    borderRadius='2px'
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDelete}
                    variant='ghost'
                    backgroundColor='red.600'
                    color='white'
                    size='xs'
                    minWidth='80px'
                    borderRadius='2px'
                  >
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </div>
        <div className='flex gap-2'>
          <Button
            variant='ghost'
            size='xs'
            minWidth='80px'
            borderRadius='2px'
            onClick={onCloseModal}
          >
            Cancel
          </Button>
          <Button
            size='xs'
            minWidth='80px'
            borderRadius='2px'
            type='submit'
            isLoading={isSubmitting}
            backgroundColor='blue.600'
            color='white'
            _hover={{
              backgroundColor: 'blue.600',
              cursor: 'pointer',
            }}
          >
            {isSubmitting ? 'Submitting...' : isEditing ? 'Update' : 'Create'}
          </Button>
        </div>
      </ModalFooter>
    </>
  )
}

export default TaskFormFooter
