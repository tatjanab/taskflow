'use client'

import { Suspense } from 'react'
import useSearchState from '@/hooks/useSearchState'
import { Input } from '@/components/ui/input'
import { Search, CircleX } from 'lucide-react'

function SearchBarInner() {
  const { handleSearch, search, clearSearch } = useSearchState()

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
          {search && (
            <CircleX
              className='text-gray-500 absolute right-4 h-5 w-5 hover:cursor-pointer'
              onClick={clearSearch}
            />
          )}
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
