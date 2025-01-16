import { Button } from '@chakra-ui/react'
import useTaskData from '@/hooks/useTaskData'
import { useSearchParams } from 'next/navigation'
import { useDisclosure } from '@chakra-ui/react'

const TaskDelete = () => {
  const { deleteTask } = useTaskData()
  const searchParams = useSearchParams()
  const taskId = searchParams.get('selectedTask') || ''
  const { onClose } = useDisclosure()
  const handleDelete = async () => {
    try {
      await deleteTask(taskId)
      onClose()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return (
    <Button
      colorScheme='red'
      size='xs'
      minWidth='80px'
      borderRadius='2px'
      onClick={handleDelete}
    >
      Delete
    </Button>
  )
}

export default TaskDelete
