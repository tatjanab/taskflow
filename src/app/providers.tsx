'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>{children}</ChakraProvider>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition='bottom-right'
        />
      </QueryClientProvider>
    </>
  )
}
