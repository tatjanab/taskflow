import '../globals.scss'
import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='font-mainFont'>
        <div className='flex min-h-screen w-full flex-col items-center overflow-hidden bg-zinc-100 sm:pt-10'>
          <div className='w-full p-10 sm:w-1/2 lg:w-1/3'>{children}</div>
        </div>
      </body>
    </html>
  )
}
