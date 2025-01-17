'use client'

import { Suspense } from 'react'
import useSearchState from '@/hooks/useSearchState'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function SearchBarInner() {
  const { handleSearch, search } = useSearchState()

  return (
    <div>
      <form>
        <InputGroup size='sm' backgroundColor='white' width='400px'>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.500' />
          </InputLeftElement>
          <Input
            type='text'
            placeholder='Search tasks'
            size='sm'
            value={search}
            border='none'
            borderRadius='md'
            boxShadow='0 2px 4px rgba(0, 0, 0, 0.05)'
            _placeholder={{
              color: 'gray.600',
              fontSize: '12px',
            }}
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
            pl='8'
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
