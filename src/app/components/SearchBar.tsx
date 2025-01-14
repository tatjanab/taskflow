'use client'

import { Suspense } from 'react'
import useSearchState from '@/hooks/useSearchState'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function SearchBarInner() {
  const { handleSearch, search } = useSearchState()

  console.log('searchPARAM', search)
  return (
    <div>
      <form>
        <InputGroup size='sm'>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input
            type='text'
            placeholder='Search tasks'
            size='sm'
            value={search}
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
            pl='8'
            className='border-gray-300'
          />
        </InputGroup>
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
