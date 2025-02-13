import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { FolderDot, ChevronsUpDown, Logs, ListChecks } from 'lucide-react'

function SidebarProjectsGroup({ project }) {
  const taskListUrl = `/project?projectId=${project.prefix}&status=Open, In Progress`
  const completedTasksUrl = `/project?projectId=${project.prefix}&status=Done`

  return (
    <Collapsible key={project.name} className='group/collapsible'>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <div className='flex flex-row items-center justify-between w-full'>
              <div className='flex flex-row items-center justify-between'>
                <FolderDot className='mr-4' />
                <span>{project.name}</span>
              </div>
              <ChevronsUpDown className='h-4 w-4' />
            </div>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <SidebarMenuSubItem>
              <SidebarMenuButton asChild>
                <Link href={taskListUrl}>
                  <Logs className='mr-4' />
                  <span>Task List</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <SidebarMenuButton asChild>
                <Link href={completedTasksUrl}>
                  <ListChecks className='mr-4' />
                  <span>Completed</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export default SidebarProjectsGroup
