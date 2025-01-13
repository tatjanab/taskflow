import { useCallback, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
const useSearchState = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || '')

  const handleSearch = (value: string) => {
    if (value.trim()) {
      router.push(`?search=${encodeURIComponent(value)}`, { scroll: false })
    } else {
      router.push('/', { scroll: false })
    }
  }

  return { handleSearch }
}

export default useSearchState
