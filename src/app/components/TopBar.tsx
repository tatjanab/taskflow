'use client'

import NewTaskBtn from '@/components/NewTaskBtn'
import SearchBar from '@/components/SearchBar'

function TopBar() {
  return (
    <>
      <div className='bg-white flex flex-row justify-between items-center px-4 py-5 border-b border-gray-200'>
        <p className='text-sm'>
          <span className='text-gray-500'>Projects /</span> First project
        </p>
        <SearchBar />
        <NewTaskBtn />
      </div>
    </>
  )
}

export default TopBar
