import { Link } from '@chakra-ui/react'
import { User } from 'react-feather'
import NewTaskBtn from '@/components/NewTaskBtn'

function TopBar() {
  return (
    <>
      <div className='bg-gray-primary flex flex-row justify-end px-4 py-2'>
        <Link href='/profile' className='flex flex-row items-center text-xs'>
          <User className='mr-1' size={15} /> <span>Name Lastname</span>
        </Link>
      </div>
      <div className='p-4 flex flex-row justify-between items-center'>
        <p className='text-xs text-gray-500'>
          Dashboard / Projects / First project
        </p>
        <NewTaskBtn />
      </div>
    </>
  )
}

export default TopBar
