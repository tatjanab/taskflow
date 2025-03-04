import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@components/ui/alert-dialog'
import { Button } from '@components/ui/button'
import { AlertTriangle } from 'react-feather'

type TaskFooterDeleteActionProps = {
  handleDelete: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const TaskFooterDeleteAction = ({
  handleDelete,
  isOpen,
  setIsOpen,
}: TaskFooterDeleteActionProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          className='text-red-600 min-w-[80px] bg-transparent shadow-none hover:bg-transparent'
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-[400px] mt-5'>
        <AlertDialogHeader>
          <AlertDialogTitle className='flex items-center gap-2 text-red-600'>
            <AlertTriangle size={16} />
            Delete task?
          </AlertDialogTitle>
          <AlertDialogDescription className='text-sm text-slate-600'>
            Are you sure you want to delete this task? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className='min-w-[80px] h-7 rounded-[2px]'
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className='min-w-[80px] h-7 rounded-[2px] bg-red-600 hover:bg-red-700'
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default TaskFooterDeleteAction
