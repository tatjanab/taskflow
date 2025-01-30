'use client'

import { Suspense } from 'react'
import useSearchState from '@/hooks/useSearchState'
import { Input } from '@/components/ui/input'
import { Search } from 'react-feather'

function SearchBarInner() {
  const { handleSearch, search } = useSearchState()

  return (
    <div>
      <form>
        <div className='flex flex-row items-center gap-2 w-[400px] relative'>
          <Input
            type='text'
            placeholder='Search tasks'
            value={search}
            className='w-full rounded-md border-none bg-gray-50 pl-12  py-5 text-sm placeholder:text-gray-400 placeholder:font-light'
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
          />
          <Search className='text-gray-300 absolute left-4 h-5 w-5' />
        </div>
      </form>
    </div>
  )
}

function SearchBar() {
  return (
    <Suspense fallback={null}>
      <SearchBarInner />
    </Suspense>
  )
}

export default SearchBar
