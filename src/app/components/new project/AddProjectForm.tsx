'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { projectSchema } from '@/models/zod_schema'

type addProjectFields = z.infer<typeof projectSchema>

function AddProjectForm() {
  const handleAddProject = () => {
    console.log('Form submitted')
  }
  const form = useForm<addProjectFields>({
    resolver: zodResolver(projectSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      prefix: '',
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form

  return (
    <form onSubmit={handleSubmit(handleAddProject)}>
      <div className='flex flex-col mb-6'>
        <div className='flex flex-col gap-2 mb-4'>
          <Input {...register('name')} placeholder='Project Name' />
          <span className='text-red-500 text-xs'>{errors.name?.message}</span>
        </div>
        <div className='flex flex-col gap-2 mb-6'>
          <Input
            {...register('description')}
            placeholder='Project Description'
          />
        </div>
        <div className='flex flex-col gap-2 mb-4'>
          <Input {...register('prefix')} placeholder='Project prefix' />
          <span className='text-red-500 text-xs'>{errors.prefix?.message}</span>
        </div>
      </div>
      <Button type='submit'>Create</Button>
    </form>
  )
}

export default AddProjectForm
