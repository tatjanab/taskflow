import '../globals.scss'
import { Command } from 'react-feather'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='font-mainFont'>
        <div className='flex min-h-screen w-full flex-col items-center overflow-hidden bg-zinc-100 sm:pt-10'>
          <div className='w-full bg-white p-10 shadow-sm sm:w-1/2 lg:w-1/3'>
            <div className='flex flex-row items-center text-blue-900'>
              <Command height={30} />{' '}
              <span className='ml-1 font-bold'>TaskFlow</span>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
