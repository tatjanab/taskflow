import { SidebarTrigger } from '@/components/ui/sidebar'

function WelcomeComponent() {
  return (
    <div className='bg-white items-center px-4 py-5 border-b border-gray-200'>
      <p className='text-sm flex flex-row items-center gap-2'>
        <SidebarTrigger />
        <span>Hello user!</span>
      </p>
      <div className='flex flex-col gap-2 mt-6'>
        <h2 className='text-3xl font-bold'>Welcome back!</h2>

        <p>Create a new project or select an existing one.</p>
      </div>
    </div>
  )
}

export default WelcomeComponent
