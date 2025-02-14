'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import AddProjectDialog from './AddProjectDialog'
import { useState } from 'react'

function AddProject() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = () => {
    console.log('Form submitted')
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <Card className='max-w-[300px] hover:bg-slate-50 transition-all duration-400 hover:cursor-pointer shadow-none'>
            <CardHeader className='text-center'>
              <CardTitle>Add a new project</CardTitle>
              <CardDescription>
                Create a new project to get started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-row items-center justify-center border border-dashed border-gray-400 rounded-full p-2 bg-white'>
                <p>+</p>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <AddProjectDialog
          isOpen={isOpen}
          onCloseModal={() => setIsOpen(false)}
          onSubmit={handleSubmit}
        />
      </Dialog>
    </>
  )
}

export default AddProject
