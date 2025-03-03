'use client'

import NewTaskBtn from './NewTaskBtn'
import SearchBar from './SearchBar'
import { ChevronRight } from 'lucide-react'
import { SidebarTrigger } from '../../components/ui/sidebar'

function TopBar() {
  return (
    <>
      <div className='bg-white flex flex-row justify-between items-center px-4 py-5 border-b border-gray-200'>
        <p className='text-sm flex flex-row items-center gap-2'>
          <SidebarTrigger />
          <span className='text-gray-500'>Projects </span>{' '}
          <ChevronRight className='h-4 w-4' />
          <span className='text-gray-700'>First project</span>
        </p>
        <SearchBar />
        <NewTaskBtn />
      </div>
    </>
  )
}

export default TopBar
