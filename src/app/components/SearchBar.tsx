'use client'

import useSearchState from '@/hooks/useSearchState'
import { Input } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
function SearchBar() {
  const { handleSearch } = useSearchState()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  console.log('searchPARAM', search)
  return (
    <div>
      <form>
        <Input
          type='text'
          placeholder='Search tasks'
          size='sm'
          value={decodeURIComponent(search || '')}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar
