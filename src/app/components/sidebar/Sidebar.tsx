'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Settings } from 'lucide-react'
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
  SidebarSeparator,
} from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import SidebarProjectsGroup from './SidebarProjectsGroup'

import useFetchProjects from '@/hooks/useFetchProjects'

function AppSidebar() {
  const { projects, isLoading, isError } = useFetchProjects()
  console.log('projects', projects)
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
            <h3 className='ml-2 text-md font-bold'>Taskasaurus</h3>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          {isError && <p>Error fetching projects</p>}
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarProjectsGroup key={project.name} project={project} />
              ))}

              <SidebarSeparator />
              <SidebarMenuItem>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href='/'>
                          <Settings className='mr-2 size-5' />
                          <span>Settings</span>
                        </Link>
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    <TooltipContent side='right' align='center'>
                      <span>Settings</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
