'use client'
import { Input } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Command } from 'react-feather'
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
    <div className='flex min-h-screen w-full flex-col items-center overflow-hidden bg-zinc-100 sm:pt-10'>
      <div className='w-full bg-white p-10 shadow-sm sm:w-1/2 lg:w-1/3'>
        <div className='flex flex-row items-center text-blue-900'>
          <Command height={30} />{' '}
          <span className='ml-1 font-bold'>TaskFlow</span>
        </div>

        <h1 className='mb-2 mt-4 text-xl font-bold'>Welcome back!</h1>
        <p className='text-xs'>Login to your account to continue.</p>
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
              <div className='text-red-500 text-xs'>
                {errors.password.message}
              </div>
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
          <p className='mt-4 text-xs'>
            Don&apos;t have an account? Sign up here.
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
