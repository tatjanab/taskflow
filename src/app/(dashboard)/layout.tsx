import Sidebar from '../components/Sidebar'
import { Providers } from '../providers'
import '../globals.scss'
import TopBar from '../components/TopBar'

export const metadata = {
  title: 'Taskflow',
  description: 'Tasks managed easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='font-mainFont'>
        <Providers>
          <div className='flex flex-row'>
            <Sidebar />
            <div className='w-full'>
              <TopBar />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
