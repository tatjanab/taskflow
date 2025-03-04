'use client'
import { Input } from '@components/ui/input'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { login } from '../../lib/actions'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined)

  return (
    <Card className='border-none'>
      <CardHeader>
        <div className='flex flex-row items-center mb-6'>
          <Image
            src='/images/logo.svg'
            alt='Taskasaurus'
            width={18}
            height={18}
          />
          <h3 className='ml-2 text-md font-bold'>Taskasaurus</h3>
        </div>
        <CardTitle className='text-xl'>Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={loginAction} className='mt-6'>
          <div className='input-row mb-4 flex flex-col'>
            <label htmlFor='email' className='mb-1 text-sm'>
              Email address
            </label>
            <Input
              name='email'
              type='text'
              height='30px'
              className='w-full p-2 text-sm'
            />
            {state?.errors?.email && (
              <div className='text-red-500 text-sm'>
                {state?.errors?.email.join(', ')}
              </div>
            )}
          </div>
          <div className='input-row mb-4 flex flex-col'>
            <label htmlFor='password' className='mb-1 text-sm'>
              Password
            </label>
            <Input
              name='password'
              type='password'
              height='30px'
              className='w-full p-2 text-sm'
            />
            {state?.errors?.password && (
              <div className='text-red-500 text-sm'>
                {state?.errors?.password.join(', ')}
              </div>
            )}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
      <CardFooter>
        <p className='mt-4 text-sm'>
          Don&apos;t have an account? Sign up{' '}
          <Link href='/signup' className='mt-4 text-sm underline'>
            here.
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button
      type='submit'
      disabled={pending}
      className='btn-main w-full rounded-md bg-blue-600 px-5 py-2 text-sm uppercase text-white'
    >
      {pending ? 'Logging in...' : 'Login'}
    </button>
  )
}

export default LoginForm
