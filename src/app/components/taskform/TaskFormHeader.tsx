import { CloseIcon } from '@chakra-ui/icons'
import { ModalHeader, Button } from '@chakra-ui/react'

type TaskFormHeaderProps = {
  onClose: () => void
  taskId: string
  taskSummary: string
}

function TaskFormHeader({ onClose, taskId, taskSummary }: TaskFormHeaderProps) {
  return (
    <ModalHeader
      position='sticky'
      top='0'
      bg='white'
      zIndex={1}
      className='border-b-2 flex flex-row justify-between items-center mb-3'
    >
      <div>
        {taskId && (
          <>
            <p className='text-xs uppercase text-gray-400'>Edit task</p>
            <h3 className='text-md font-bold'>{taskSummary}</h3>
          </>
        )}
        {!taskId && <h6 className='mb-3 text-sm'>Create a new task</h6>}
        <p className='text-xs font-normal'>
          Fields marked with an asterisk are mandatory{' '}
          <span className='text-red-600'>*</span>
        </p>
      </div>
      <Button variant='transparent' size='sm' onClick={onClose}>
        <CloseIcon height='10px' width='10px' />
      </Button>
    </ModalHeader>
  )
}

export default TaskFormHeader
