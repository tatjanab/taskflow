'use client'

import TaskForm from './TaskForm'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

function NewTaskBtn() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <span className='px-4 py-3 rounded-md font-sm bg-teal-600 text-white hover:bg-teal-700'>
          + Add task
        </span>
      </DialogTrigger>
      <DialogContent className='w-[600px]'>
        <TaskForm isOpen={isOpen} onCloseModal={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}

export default NewTaskBtn
