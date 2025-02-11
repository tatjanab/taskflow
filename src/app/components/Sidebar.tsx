'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FolderDot, LayoutDashboard, Settings, User } from 'lucide-react'

function Sidebar() {
  return (
    <div className='min-h-screen sidebar flex w-1/5 flex-col bg-gradient-to-b from-gray-50 to-gray-100'>
      <Link href='/' className='flex flex-row items-center px-6 py-5'>
        <Image
          src='/images/logo.svg'
          alt='Taskasaurus'
          width={28}
          height={28}
        />

        <h3 className='ml-1 text-md font-medium'>Taskasaurus</h3>
      </Link>
      <div className='flex h-full flex-col justify-between pb-4'>
        <div className='main-nav mt-6 flex flex-col text-sm'>
          <Link
            href='/'
            className='flex flex-row items-center rounded-sm px-6 py-3 hover:bg-gray-100'
          >
            <LayoutDashboard className='mr-2 h-4 w-4' /> <span>Dashboard</span>
          </Link>
          <Link
            href='/'
            className='flex flex-row items-center rounded-sm px-6 py-3 hover:bg-gray-100'
          >
            <FolderDot className='mr-2 h-4 w-4' /> <span>Projects</span>
          </Link>
          <Link
            href='/'
            className='flex flex-row items-center rounded-sm px-6 py-3 hover:bg-gray-100'
          >
            <Settings className='mr-2 h-4 w-4' /> <span>Settings</span>
          </Link>
        </div>
        <div className='profile px-6 py-2'>
          <Link href='/profile' className='flex flex-row items-center text-sm'>
            <User className='mr-1' size={15} /> <span>Name Lastname</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
