'use client'

import { Button } from '@/components/ui/button'
import TaskForm from './TaskForm'
import { useState } from 'react'

function NewTaskBtn() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        className='h-7 w-[80px] rounded-[2px] bg-green-600 text-white hover:bg-green-700'
        onClick={() => setIsOpen(true)}
      >
        New task
      </Button>

      <TaskForm isOpen={isOpen} onCloseModal={() => setIsOpen(false)} />
    </>
  )
}

export default NewTaskBtn
