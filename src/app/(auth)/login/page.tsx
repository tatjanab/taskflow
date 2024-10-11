import { Input } from '@chakra-ui/react'
import { Command } from 'react-feather'

function Login() {
  return (
    <div className='bg-zinc-100 flex flex-col w-full min-h-screen items-center sm:pt-10 overflow-hidden'>
      <div className='bg-white p-10 shadow-sm sm:w-1/2 lg:w-1/3 w-full'>
        <div className='flex flex-row items-center text-blue-900'>
          <Command height={30} />{' '}
          <span className='ml-1 font-bold'>TaskFlow</span>
        </div>

        <h1 className='mt-4 mb-2 text-xl font-bold'>Welcome back!</h1>
        <p className='text-xs'>Login to your account to continue.</p>
        <form className='mt-6'>
          <div className='input-row flex flex-col mb-4'>
            <label htmlFor='email' className='text-xs mb-1'>
              Email address
            </label>
            <Input
              name='email'
              type='email'
              height='30px'
              className='p-2 text-xs w-full'
            />
          </div>
          <div className='input-row flex flex-col mb-4'>
            <label htmlFor='password' className='text-xs mb-1'>
              Password
            </label>
            <Input
              name='password'
              type='password'
              height='30px'
              className='p-2 text-xs w-full'
            />
          </div>
          <button
            type='submit'
            className='btn-main rounded-md bg-blue-600 text-white py-2 px-5 uppercase text-xs w-full'
          >
            Log in
          </button>
          <p className='text-xs mt-4'>
            Don&apos;t have an account? Sign up here.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
