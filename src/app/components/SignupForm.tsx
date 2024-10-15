'use client'

import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@chakra-ui/react'

const userFormSchema = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(4),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

type FormFields = z.infer<typeof userFormSchema>

function SignupForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm<FormFields>({
    resolver: zodResolver(userFormSchema),
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
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
          First name
        </label>
        <Input
          {...register('firstName')}
          name='firstName'
          type='text'
          height='30px'
          className='w-full p-2 text-xs'
        />
        {errors.firstName && (
          <div className='text-red-500 text-xs'>{errors.firstName.message}</div>
        )}
      </div>
      <div className='input-row mb-4 flex flex-col'>
        <label htmlFor='email' className='mb-1 text-xs'>
          Last name
        </label>
        <Input
          {...register('lastName')}
          name='lastName'
          type='text'
          height='30px'
          className='w-full p-2 text-xs'
        />
        {errors.lastName && (
          <div className='text-red-500 text-xs'>{errors.lastName.message}</div>
        )}
      </div>
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
      <div className='input-row mb-4 flex flex-col'>
        <label htmlFor='password' className='mb-1 text-xs'>
          Confirm Password
        </label>
        <Input
          {...register('confirmPassword')}
          name='password'
          type='password'
          height='30px'
          className='w-full p-2 text-xs'
        />
        {errors.confirmPassword && (
          <div className='text-red-500 text-xs'>
            {errors.confirmPassword.message}
          </div>
        )}
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='btn-main w-full rounded-md bg-blue-600 px-5 py-2 text-xs uppercase text-white'
      >
        {isSubmitting ? 'Loading...' : 'Create account'}
      </button>
      {errors.root && (
        <div className='text-red-500 text-xs'>{errors.root.message}</div>
      )}
    </form>
  )
}

export default SignupForm