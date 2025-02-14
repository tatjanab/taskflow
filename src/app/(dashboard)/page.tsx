import WelcomeComponent from '@/components/WelcomeComponent'
import AddProject from '@/components/AddProject'

export default function Home() {
  return (
    <div className='px-2'>
      <WelcomeComponent />
      <div className='px-4 py-4'>
        <AddProject />
      </div>
    </div>
  )
}
