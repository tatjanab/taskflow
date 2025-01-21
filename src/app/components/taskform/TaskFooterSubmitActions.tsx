import { Button } from '@/components/ui/button'

type TaskFooterSubmitActionsProps = {
  onCloseModal: () => void
  isSubmitting: boolean
  isEditing: boolean
}

const TaskFooterSubmitActions = ({
  onCloseModal,
  isSubmitting,
  isEditing,
}: TaskFooterSubmitActionsProps) => {
  return (
    <>
      <div className='flex gap-2'>
        <Button
          className='text-gray-400 text-sm min-w-[80px] rounded-[2px]'
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          size='sm'
          type='submit'
          className='text-gray-400 text-sm min-w-[80px] rounded-[2px] hover:bg-blue-600 hover:text-white'
        >
          {isSubmitting ? 'Submitting...' : isEditing ? 'Update' : 'Create'}
        </Button>
      </div>
    </>
  )
}

export default TaskFooterSubmitActions
