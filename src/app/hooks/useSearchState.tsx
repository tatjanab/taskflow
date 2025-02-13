import { useCallback, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const useSearchState = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchValue = searchParams.get('search')
  const [search, setSearch] = useState(searchValue || '')

  const debouncedSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value.trim().length >= 3) {
      params.set('search', value)
    } else {
      params.delete('search')
    }

    router.push(`?${params.toString()}`, { scroll: false })
  }, 300)

  const handleSearch = (value: string) => {
    setSearch(value)
    debouncedSearch(value)
  }

  const clearSearch = () => {
    setSearch('')
    const params = new URLSearchParams(searchParams.toString())
    params.delete('search')
    router.push(`?${params.toString()}`, { scroll: false })
  }

  return { handleSearch, search, clearSearch }
}

export default useSearchState
