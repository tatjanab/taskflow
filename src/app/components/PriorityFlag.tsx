import { Td } from '@chakra-ui/react'
import { ArrowUpIcon, ArrowUpDownIcon, ArrowDownIcon } from '@chakra-ui/icons'

function PriorityFlag({ priority }: { priority: string }) {
  return (
    <Td p='8px'>
      {/* <span className='rounded-sm bg-green-100 p-1 font-medium text-green-700'>
        {priority}
      </span> */}
      <span className={`rounded-sm bg-${priority} p-1 text-white mr-2`}>
        {priority === 'High' && <ArrowUpIcon />}
        {priority === 'Medium' && <ArrowUpDownIcon />}
        {priority === 'Low' && <ArrowDownIcon />}
      </span>
      {priority}
    </Td>
  )
}

export default PriorityFlag
