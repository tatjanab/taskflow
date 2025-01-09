import { Input } from '@chakra-ui/react'

function SearchBar() {
  return (
    <div>
      <form>
        <Input type='text' placeholder='Search tasks' size='sm' />
      </form>
    </div>
  )
}

export default SearchBar
