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
import {
  FolderDot,
  ChevronsUpDown,
  Logs,
  ListChecks,
  PanelsTopLeft,
  ChevronRight,
} from 'lucide-react'

function SidebarProjectsGroup({ project }) {
  const taskListUrl = `/project?projectId=${project.prefix}&status=Open, In Progress`
  const completedTasksUrl = `/project?projectId=${project.prefix}&status=Done`

  return (
    <Collapsible key={project.name} className='group/collapsible'>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className='flex flex-row items-center justify-start w-full'>
            <PanelsTopLeft className='size-5 mr-2' />
            <span>{project.name}</span>
            <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <SidebarMenuSubItem>
              <SidebarMenuButton asChild>
                <Link href={taskListUrl}>
                  <Logs className='mr-2 size-5' />
                  <span>Task List</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <SidebarMenuButton asChild>
                <Link href={completedTasksUrl}>
                  <ListChecks className='mr-2 size-5' />
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
