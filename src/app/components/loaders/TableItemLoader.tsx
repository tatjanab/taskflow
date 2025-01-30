import { TableRow, TableCell } from '@/components/ui/table'

function TableItemLoader() {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <TableRow
          key={index}
          className='animate-pulse border-b border-gray-200'
        >
          <TableCell className='px-8 py-4 w-24'>
            <div className='h-6 bg-gray-300 rounded w-full'></div>
          </TableCell>
          <TableCell className='px-8 py-4 w-64'>
            <div className='h-6 bg-gray-300 rounded w-full'></div>
          </TableCell>
          <TableCell className='px-8 py-4 w-32'>
            <div className='h-6 bg-gray-300 rounded w-full'></div>
          </TableCell>
          <TableCell className='px-8 py-4 w-40'>
            <div className='h-6 bg-gray-300 rounded w-full'></div>
          </TableCell>
          <TableCell className='px-8 py-4 w-32'>
            <div className='h-6 bg-gray-300 rounded w-full'></div>
          </TableCell>
          <TableCell className='px-8 py-4 w-40'>
            <div className='h-6 bg-gray-300 rounded w-full'></div>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

export default TableItemLoader
