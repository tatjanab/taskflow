import { Input } from '@chakra-ui/react'
import { Command } from 'react-feather'

function Login() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center overflow-hidden bg-zinc-100 sm:pt-10'>
      <div className='w-full bg-white p-10 shadow-sm sm:w-1/2 lg:w-1/3'>
        <div className='flex flex-row items-center text-blue-900'>
          <Command height={30} />{' '}
          <span className='ml-1 font-bold'>TaskFlow</span>
        </div>

        <h1 className='mb-2 mt-4 text-xl font-bold'>Welcome back!</h1>
        <p className='text-xs'>Login to your account to continue.</p>
        <form className='mt-6'>
          <div className='input-row mb-4 flex flex-col'>
            <label htmlFor='email' className='mb-1 text-xs'>
              Email address
            </label>
            <Input
              name='email'
              type='email'
              height='30px'
              className='w-full p-2 text-xs'
            />
          </div>
          <div className='input-row mb-4 flex flex-col'>
            <label htmlFor='password' className='mb-1 text-xs'>
              Password
            </label>
            <Input
              name='password'
              type='password'
              height='30px'
              className='w-full p-2 text-xs'
            />
          </div>
          <button
            type='submit'
            className='btn-main w-full rounded-md bg-blue-600 px-5 py-2 text-xs uppercase text-white'
          >
            Log in
          </button>
          <p className='mt-4 text-xs'>
            Don&apos;t have an account? Sign up here.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
