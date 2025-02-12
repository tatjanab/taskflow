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

  const handleClick = () => {
    const params = new URLSearchParams(searchParams)
    params.set('projectId', project.prefix)
    router.push(`?${params.toString()}`, { scroll: false })
  }
  return (
    <Collapsible key={project.key} className='group/collapsible'>
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
              <SidebarMenuButton>
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
