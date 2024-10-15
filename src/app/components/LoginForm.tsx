'use client'
import { Input } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'

import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type FormFields = z.infer<typeof schema>

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)
    } catch (error) {
      setError('root', {
        message: 'An error has occurred. Please try again',
      })
    }
  }

  return (
    <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
      <div className='input-row mb-4 flex flex-col'>
        <label htmlFor='email' className='mb-1 text-xs'>
          Email address
        </label>
        <Input
          {...register('email')}
          name='email'
          type='text'
          height='30px'
          className='w-full p-2 text-xs'
        />
        {errors.email && (
          <div className='text-red-500 text-xs'>{errors.email.message}</div>
        )}
      </div>
      <div className='input-row mb-4 flex flex-col'>
        <label htmlFor='password' className='mb-1 text-xs'>
          Password
        </label>
        <Input
          {...register('password')}
          name='password'
          type='password'
          height='30px'
          className='w-full p-2 text-xs'
        />
        {errors.password && (
          <div className='text-red-500 text-xs'>{errors.password.message}</div>
        )}
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='btn-main w-full rounded-md bg-blue-600 px-5 py-2 text-xs uppercase text-white'
      >
        {isSubmitting ? 'Loading...' : 'Login'}
      </button>
      {errors.root && (
        <div className='text-red-500 text-xs'>{errors.root.message}</div>
      )}
    </form>
  )
}

export default LoginForm
