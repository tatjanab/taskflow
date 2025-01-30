function TaskFormLoader() {
  return (
    <div className='animate-pulse'>
      <div className='flex flex-row gap-4'>
        <div className='flex flex-col w-1/2'>
          <label className='mb-5 text-sm font-bold'>Task ID</label>
          <div className='h-8 bg-gray-300 rounded'></div>
        </div>

        <div className='flex flex-col mb-4 w-1/2'>
          <label className='mb-5 text-sm font-bold'>Status</label>
          <div className='h-8 bg-gray-300 rounded'></div>
        </div>
      </div>

      <div className='flex flex-col mb-4 w-full'>
        <label className='mb-5 text-sm font-bold'>Summary</label>
        <div className='h-8 bg-gray-300 rounded'></div>
      </div>

      <div className='flex flex-row gap-4'>
        <div className='flex flex-col mb-4 w-1/2'>
          <label className='mb-5 text-sm font-bold'>Type</label>
          <div className='h-8 bg-gray-300 rounded'></div>
        </div>

        <div className='flex flex-col mb-4 w-1/2'>
          <label className='mb-5 text-sm font-bold'>Priority</label>
          <div className='h-8 bg-gray-300 rounded'></div>
        </div>
      </div>

      <div className='flex flex-col mb-4 w-1/2'>
        <label className='mb-5 text-sm font-bold'>Assignee</label>
        <div className='h-16 bg-gray-300 rounded'></div>
      </div>

      <div className='flex flex-col mb-3'>
        <label className='mb-5 text-sm font-bold'>Description</label>
        <div className='h-24 bg-gray-300 rounded'></div>
      </div>
    </div>
  )
}

export default TaskFormLoader
