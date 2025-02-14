import {
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
type AddProjectDialogProps = {
  isOpen: boolean
  onCloseModal: () => void
  onSubmit: () => void
}
function AddProjectDialog({
  isOpen,
  onCloseModal,
  onSubmit,
}: AddProjectDialogProps) {
  return (
    <DialogContent className='w-[400px]'>
      <DialogTitle>New Project</DialogTitle>
      <DialogDescription>
        Fill in the details below to create a new project.
      </DialogDescription>
      <div className='flex flex-col gap-4'>
        <form onSubmit={onSubmit}>
          <div className='flex flex-col gap-4 mb-4'>
            <Input placeholder='Project Name' />
            <Input placeholder='Project Description' />
            <Input placeholder='Project prefix' />
          </div>
          <Button type='submit'>Create</Button>
        </form>
      </div>
    </DialogContent>
  )
}

export default AddProjectDialog
