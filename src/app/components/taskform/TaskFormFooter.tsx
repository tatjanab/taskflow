import { Button, ModalFooter } from '@chakra-ui/react'

function TaskFormFooter({ isSubmitting }) {
  return (
    <>
      <ModalFooter>
        <Button
          colorScheme='blue'
          size='sm'
          width='100px'
          borderRadius='3px'
          type='submit'
          isLoading={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create'}
        </Button>
      </ModalFooter>
    </>
  )
}

export default TaskFormFooter
