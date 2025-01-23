'use client'

import { Button } from '@/components/ui/button'
import TaskForm from './TaskForm'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

function NewTaskBtn() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <span className='px-6 py-4 rounded-[2px] bg-teal-600 text-white hover:bg-teal-700'>
          New task
        </span>
      </DialogTrigger>
      <DialogContent>
        <TaskForm isOpen={isOpen} onCloseModal={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}

export default NewTaskBtn
