import { TableRow, TableCell } from '@/components/ui/table'

function TableItemLoader() {
  // Create an array of 5 items to show multiple loading rows
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <TableRow key={index} className='border-none'>
          <TableCell className='p-8 w-20'>
            <div className='form-item' />
          </TableCell>
          <TableCell className='p-8'>
            <div className='form-item' />
          </TableCell>
          <TableCell className='p-8'>
            <div className='form-item' />
          </TableCell>
          <TableCell className='p-8'>
            <div className='form-item' />
          </TableCell>
          <TableCell className='p-8'>
            <div className='form-item' />
          </TableCell>
          <TableCell className='p-8'>
            <div className='form-item' />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

export default TableItemLoader
