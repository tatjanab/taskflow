import { Button } from '@chakra-ui/react'

type TaskFooterSubmitActionsProps = {
  onCloseModal: () => void
  isSubmitting: boolean
  isEditing: boolean
}

const TaskFooterSubmitActions = ({
  onCloseModal,
  isSubmitting,
  isEditing,
}: TaskFooterSubmitActionsProps) => {
  return (
    <>
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
    </>
  )
}

export default TaskFooterSubmitActions
