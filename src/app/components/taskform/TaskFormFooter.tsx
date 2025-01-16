import { Button, ModalFooter } from '@chakra-ui/react'
import useTaskData from '@/hooks/useTaskData'
import { useSearchParams } from 'next/navigation'

function TaskFormFooter({ isSubmitting, isEditing, onClose }) {
  const { deleteTask } = useTaskData()
  const searchParams = useSearchParams()
  const taskId = searchParams.get('selectedTask') || ''

  const handleDelete = async () => {
    try {
      await deleteTask(taskId)
      onClose()
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
        <Button
          colorScheme='red'
          size='xs'
          minWidth='80px'
          borderRadius='2px'
          onClick={handleDelete}
        >
          Delete
        </Button>
        <div className='flex gap-2'>
          <Button
            variant='ghost'
            size='xs'
            minWidth='80px'
            borderRadius='2px'
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
        </div>
      </ModalFooter>
    </>
  )
}

export default TaskFormFooter
