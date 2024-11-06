'use client'

import { Button, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

import TaskForm from './TaskForm'

function NewTaskBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        colorScheme='blue'
        size='xs'
        width='80px'
        borderRadius='3px'
        paddingY='15px'
        onClick={onOpen}
      >
        New task
      </Button>

      <TaskForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default NewTaskBtn
