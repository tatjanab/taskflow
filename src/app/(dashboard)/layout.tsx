import { Providers } from '@/providers'
import '@/globals.scss'

export const metadata = {
  title: 'Taskasaurus',
  description: 'The rawr power of task management',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='font-mainFont overflow-y-hidden'>
        <Providers>
          <div className='flex flex-row'>
            <div className='w-full'>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
