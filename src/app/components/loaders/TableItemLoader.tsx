import { Tr, Td } from '@chakra-ui/react'

function TableItemLoader() {
  return (
    <Tr border='none'>
      <Td p='8px' width='40px' border='none'>
        <div className='form-item' />
      </Td>
      <Td p='8px' border='none'>
        <div className='form-item' />
      </Td>
      <Td p='8px' border='none'>
        <div className='form-item' />
      </Td>
      <Td p='8px' border='none'>
        <div className='form-item' />
      </Td>
      <Td p='8px' border='none'>
        <div className='form-item' />
      </Td>
      <Td p='8px' border='none'>
        <div className='form-item' />
      </Td>
    </Tr>
  )
}

export default TableItemLoader
