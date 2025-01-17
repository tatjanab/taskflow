'use client'

import NewTaskBtn from '@/components/NewTaskBtn'
import SearchBar from '@/components/SearchBar'

function TopBar() {
  return (
    <>
      <div className='bg-gray-primary flex flex-row justify-between items-center px-4 py-5 mb-5'>
        <p className='text-xs'>
          <span className='text-gray-500'>Projects /</span> First project
        </p>
        <SearchBar />
        <NewTaskBtn />
      </div>
    </>
  )
}

export default TopBar
