'use client'

import { Box, Link } from '@chakra-ui/react'
import { Table, Settings, User, Columns } from 'react-feather'
import Image from 'next/image'
function Sidebar() {
  return (
    <Box
      height='100vh'
      className='sidebar flex w-1/6 flex-col'
      bgGradient='linear(to-b, gray.50, gray.100)'
    >
      <Link className='flex flex-row items-center px-6 py-5'>
        <Image
          src='/images/logo.svg'
          alt='Taskasaurus'
          width={24}
          height={24}
        />

        <h3 className='ml-1 text-md font-medium'>Taskasaurus</h3>
      </Link>
      <div className='flex h-full flex-col justify-between pb-4'>
        <div className='main-nav mt-6 flex flex-col text-xs'>
          <Link
            href='/'
            className='flex flex-row items-center rounded-sm px-6 py-4 hover:bg-gray-200'
          >
            <Table height={15} /> <span>Dashboard</span>
          </Link>
          <Link
            href='/'
            className='flex flex-row items-center rounded-sm px-6 py-4 hover:bg-gray-200'
          >
            <Columns height={15} /> <span>Projects</span>
          </Link>
          <Link className='flex flex-row items-center rounded-sm px-6 py-4 hover:bg-gray-200'>
            <Settings height={15} />
            <span>Settings</span>
          </Link>
        </div>
        <div className='profile px-6 py-2'>
          <Link href='/profile' className='flex flex-row items-center text-xs'>
            <User className='mr-1' size={15} /> <span>Name Lastname</span>
          </Link>
        </div>
      </div>
    </Box>
  )
}

export default Sidebar
