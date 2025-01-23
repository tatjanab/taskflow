import { TableRow, TableCell } from '@/components/ui/table'

function TableItemLoader() {
  // Create an array of 5 items to show multiple loading rows
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <TableRow key={index} className='border-none'>
          <TableCell className='px-8 py-4 w-25'>
            <div className='form-item' />
          </TableCell>
          <TableCell className='px-8 py-4'>
            <div className='form-item' />
          </TableCell>
          <TableCell className='px-8 py-4'>
            <div className='form-item' />
          </TableCell>
          <TableCell className='px-8 py-4'>
            <div className='form-item' />
          </TableCell>
          <TableCell className='px-8 py-4'>
            <div className='form-item' />
          </TableCell>
          <TableCell className='px-8 py-4'>
            <div className='form-item' />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

export default TableItemLoader
