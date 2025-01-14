'use client'

import { Button, useDisclosure } from '@chakra-ui/react'
import TaskForm from './TaskForm'

function NewTaskBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        size='xs'
        width='80px'
        borderRadius='2px'
        paddingY='15px'
        backgroundColor='blue.600'
        color='white'
        _hover={{
          backgroundColor: 'blue.600',
          cursor: 'pointer',
        }}
        onClick={onOpen}
      >
        New task
      </Button>

      <TaskForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default NewTaskBtn
