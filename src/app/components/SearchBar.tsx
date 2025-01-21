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
          <Search color='gray.500' />

          <Input
            type='text'
            placeholder='Search tasks'
            value={search}
            className='h-8 w-full rounded-md border-gray-200 bg-gray-50 pl-8 text-sm placeholder:text-gray-600'
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
          />
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
