'use client'

import { Box, Link } from '@chakra-ui/react'

import { DragHandleIcon, PlusSquareIcon, SunIcon } from '@chakra-ui/icons'
import { Table, Settings, Command } from 'react-feather'

function Sidebar() {
  return (
    <Box height='100vh' className='bg-gray-primary sidebar flex w-1/6 flex-col'>
      <Link className='text-md flex flex-row items-center px-6 py-4 font-bold'>
        <Command height={25} /> <span className='ml-1'>TaskFlow</span>
      </Link>
      <div className='flex h-full flex-col justify-between pb-4'>
        <div className='main-nav mt-6 flex flex-col text-xs'>
          <Link className='flex flex-row items-center rounded-sm px-6 py-2 hover:bg-sky-100'>
            <Table height={15} /> <span>Dashboard</span>
          </Link>
          <Link className='flex flex-row items-center rounded-sm px-6 py-2 hover:bg-sky-100'>
            <Settings height={15} />
            <span>Settings</span>
          </Link>
        </div>
        <div className='profile px-6 py-2'>
          <Link>Some link</Link>
        </div>
      </div>
    </Box>
  )
}

export default Sidebar
