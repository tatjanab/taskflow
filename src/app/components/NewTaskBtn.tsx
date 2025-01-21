'use client'

import { Button } from '@/components/ui/button'
import TaskForm from './TaskForm'
import { useState } from 'react'

function NewTaskBtn() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        className='px-6 py-4 rounded-[2px] bg-teal-600 text-white hover:bg-teal-700'
        onClick={() => setIsOpen(true)}
      >
        New task
      </Button>

      <TaskForm isOpen={isOpen} onCloseModal={() => setIsOpen(false)} />
    </>
  )
}

export default NewTaskBtn
