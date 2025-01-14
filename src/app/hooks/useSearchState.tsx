import { useCallback, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const useSearchState = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchValue = searchParams.get('search')
  const [search, setSearch] = useState(searchValue || '')

  const debouncedSearch = useDebouncedCallback((value: string) => {
    if (value.trim().length >= 3) {
      router.push(`?search=${encodeURIComponent(value)}`, { scroll: false })
    } else {
      router.push('/', { scroll: false })
    }
  }, 300)

  const handleSearch = (value: string) => {
    setSearch(value)
    debouncedSearch(value)
  }

  return { handleSearch, search }
}

export default useSearchState
