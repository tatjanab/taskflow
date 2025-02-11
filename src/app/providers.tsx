'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import AppSidebar from '@/components/sidebar/Sidebar'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          <AppSidebar />
          <main className='flex-1'>{children}</main>

          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition='bottom-right'
          />
        </SidebarProvider>
      </QueryClientProvider>
    </>
  )
}
