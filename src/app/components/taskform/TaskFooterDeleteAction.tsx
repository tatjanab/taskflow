import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'

type TaskFooterDeleteActionProps = {
  onOpen: () => void
  onClose: () => void
  handleDelete: () => void
  cancelRef: React.RefObject<HTMLButtonElement>
  isOpen: boolean
}

const TaskFooterDeleteAction = ({
  onOpen,
  onClose,
  handleDelete,
  cancelRef,
  isOpen,
}: TaskFooterDeleteActionProps) => {
  return (
    <>
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
            <AlertDialogHeader
              fontSize='md'
              fontWeight='bold'
              paddingBottom='10px'
            >
              <h3 className='font-bold flex items-center gap-2'>
                <WarningIcon color='red.600' /> Delete task?
              </h3>
            </AlertDialogHeader>

            <AlertDialogBody>
              <p className='text-xs text-slate-600'>
                Are you sure you want to delete this task? This action cannot be
                undone.
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
                backgroundColor='red.600'
                _hover={{
                  backgroundColor: 'red.600',
                  cursor: 'pointer',
                }}
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
    </>
  )
}

export default TaskFooterDeleteAction
