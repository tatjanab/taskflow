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
import { FolderDot, ChevronsUpDown, Logs, ListChecks } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

function SidebarProjectsGroup({ project }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateQueryParams = (updates = {}) => {
    const params = new URLSearchParams(window.location.search)

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        params.delete(key)
      } else {
        params.set(key, value.toString())
      }
    })

    router.replace(`?${params.toString()}`, { scroll: false })
  }

  const handleClick = () => {
    updateQueryParams({
      projectId: project.prefix,
      status: 'Open, In Progress',
    })
  }

  const handleCompletedTasks = () => {
    updateQueryParams({ projectId: project.prefix, status: 'Done' })
  }

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
              <SidebarMenuButton onClick={handleClick}>
                <Logs className='mr-4' />
                <span>Task List</span>
              </SidebarMenuButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <SidebarMenuButton onClick={handleCompletedTasks}>
                <ListChecks className='mr-4' />
                <span>Completed</span>
              </SidebarMenuButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export default SidebarProjectsGroup
