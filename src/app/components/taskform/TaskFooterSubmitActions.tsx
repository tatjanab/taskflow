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
          className='text-white text-sm min-w-[80px] bg-gray-400 hover:bg-gray-600 px-2 py-4 shadow-none'
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          type='submit'
          disabled={isSubmitting}
          className='text-white text-sm min-w-[80px] bg-blue-900 hover:bg-blue-600 px-2 py-4 shadow-none'
        >
          {isSubmitting ? 'Submitting...' : isEditing ? 'Update' : 'Create'}
        </Button>
      </div>
    </>
  )
}

export default TaskFooterSubmitActions
