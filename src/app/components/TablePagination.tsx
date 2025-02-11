import { useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface TablePaginationProps {
  totalItems: number
  currentPage: number
  itemsPerPage?: number
}

export function TablePagination({
  totalItems,
  currentPage,
  itemsPerPage = 10,
}: TablePaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const goToPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString())
    newParams.set('page', page.toString())

    router.push(`?${newParams.toString()}`)
  }

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href='#'
            disabled={currentPage === 1}
            onClick={(e) => {
              e.preventDefault()
              if (currentPage > 1) goToPage(currentPage - 1)
            }}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href='#'
                isActive={currentPage === page}
                onClick={(e) => {
                  e.preventDefault()
                  goToPage(page)
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href='#'
            disabled={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault()
              if (currentPage < totalPages) goToPage(currentPage + 1)
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
