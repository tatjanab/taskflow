import { CloseIcon } from '@chakra-ui/icons'
import { Button, ModalFooter } from '@chakra-ui/react'

function TaskFormFooter({ isSubmitting, isEditing, onClose }) {
  return (
    <>
      <ModalFooter className='border-t-2 -mx-6 px-6 w-auto'>
        <Button
          variant='ghost'
          size='xs'
          minWidth='80px'
          borderRadius='2px'
          mr={3}
          onClick={onClose}
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
      </ModalFooter>
    </>
  )
}

export default TaskFormFooter
