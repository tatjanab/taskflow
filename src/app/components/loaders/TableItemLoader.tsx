import { Tr, Td } from '@chakra-ui/react'

function TableItemLoader() {
  // Create an array of 5 items to show multiple loading rows
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <Tr key={index} border='none'>
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
      ))}
    </>
  )
}

export default TableItemLoader
