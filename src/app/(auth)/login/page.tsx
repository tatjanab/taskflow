import { Input } from '@chakra-ui/react'
import { Command } from 'react-feather'

function Login() {
  return (
    <div className='bg-zinc-100 flex flex-col w-full h-screen items-center pt-10'>
      <div className='bg-white p-10 shadow-sm w-1/3'>
        <div className='flex flex-row items-center text-blue-900'>
          <Command height={30} />{' '}
          <span className='ml-1 font-bold'>TaskFlow</span>
        </div>

        <h1 className='mt-4 mb-2 text-xl font-bold'>Welcome back!</h1>
        <p className='text-xs'>Login to your account to continue.</p>
        <form className='mt-6'>
          <div className='input-row flex flex-col'>
            <label htmlFor='email' className='text-xs'>
              Email address
            </label>
            <Input name='email' type='email' />
          </div>
          <div className='input-row flex flex-col'>
            <label htmlFor='password' className='text-xs'>
              Password
            </label>
            <Input name='password' type='password' variant='outline' />
          </div>
          <button type='submit'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
