import { useState, useEffect } from 'react'

export function useMinimumLoadingTime(
  isLoading: boolean,
  minimumLoadingTime = 1000,
) {
  const [isLoadingDelayed, setIsLoadingDelayed] = useState(isLoading)

  useEffect(() => {
    if (isLoading) {
      setIsLoadingDelayed(true)
    } else {
      const timer = setTimeout(() => {
        setIsLoadingDelayed(false)
      }, minimumLoadingTime)

      return () => clearTimeout(timer)
    }
  }, [isLoading, minimumLoadingTime])

  return isLoadingDelayed
}
