'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  FolderDot,
  LayoutDashboard,
  Settings,
  User,
  ChevronsUpDown,
  ListChecks,
  Logs,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenuButton className='flex flex-row items-center py-5' asChild>
          <Link href='/'>
            <Image
              src='/images/logo.svg'
              alt='Taskasaurus'
              width={28}
              height={28}
            />

            <h3 className='ml-4 text-md font-medium'>Taskasaurus</h3>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible className='group/collapsible'>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <div className='flex flex-row items-center justify-between w-full'>
                        <div className='flex flex-row items-center justify-between'>
                          <FolderDot className='mr-4' />
                          <span>First project</span>
                        </div>
                        <ChevronsUpDown className='h-4 w-4' />
                      </div>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <Link href='/'>
                            <Logs className='mr-4' />
                            <span>Task List</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton asChild>
                          <Link href='/'>
                            <ListChecks className='mr-4' />
                            <span>Completed</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <SidebarSeparator />
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/'>
                    <Settings className='mr-4' />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
