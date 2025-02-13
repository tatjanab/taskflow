import { Providers } from '@/providers'
import '@/globals.scss'
import TopBar from '@/components/TopBar'

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
    <div className='flex flex-row'>
      <div className='w-full'>
        <TopBar />
        {children}
      </div>
    </div>
  )
}
