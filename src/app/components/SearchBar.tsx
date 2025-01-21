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
        <div className='flex flex-row items-center gap-2 w-[400px]'>
          <Input
            type='text'
            placeholder='Search tasks'
            value={search}
            className='w-full rounded-sm border-gray-100 bg-gray-50 pl-8 py-4 text-sm placeholder:text-gray-500'
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
          />
          <Search className='text-gray-500' />
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
