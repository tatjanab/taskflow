import {
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import AddProjectForm from './AddProjectForm'

type AddProjectDialogProps = {
  isOpen: boolean
  onCloseModal: () => void
}
function AddProjectDialog({ isOpen, onCloseModal }: AddProjectDialogProps) {
  return (
    <DialogContent className='w-[400px]'>
      <DialogTitle>New Project</DialogTitle>
      <DialogDescription>
        Fill in the details below to create a new project.
      </DialogDescription>
      <div className='flex flex-col gap-4'>
        <AddProjectForm />
      </div>
    </DialogContent>
  )
}

export default AddProjectDialog
