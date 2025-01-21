import LoginForm from '@/components/LoginForm'
import { Link } from '@chakra-ui/react'

function Login() {
  return (
    <>
      <h1 className='mb-2 mt-4 text-xl font-bold'>Welcome back!</h1>
      <p className='text-sm'>Login to your account to continue.</p>

      <LoginForm />
      <p className='mt-4 text-sm'>
        Don&apos;t have an account? Sign up{' '}
        <Link href='/signup' className='mt-4 text-sm underline'>
          here.
        </Link>
      </p>
    </>
  )
}

export default Login
