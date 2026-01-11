import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export function BlogPagination({
    filters,
    setFilters,
    currentCat
}) {
    const {
        currentPage,
        totalPage
    } = filters

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPage) return
        setFilters(prev => ({
            ...prev,
            currentPage: page,
            skipItems: (page - 1) * prev.itemsPerPage
        }))
    }

    const getPages = () => {
        const pages = []

        if (totalPage <= 5) {
            return Array.from({ length: totalPage }, (_, i) => i + 1)
        }

        pages.push(1)

        if (currentPage > 3) {
            pages.push('ellipsis-start')
        }

        for (
            let i = Math.max(2, currentPage - 1);
            i <= Math.min(totalPage - 1, currentPage + 1);
            i++
        ) {
            pages.push(i)
        }

        if (currentPage < totalPage - 2) {
            pages.push('ellipsis-end')
        }

        pages.push(totalPage)

        return pages
    }

    return (
        <>
            {totalPage > 1 && !currentCat && (
                <Pagination className="my-6">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                disabled={
                                    currentPage === 1
                                }
                                className={
                                    currentPage === 1
                                        ? 'pointer-events-none cursor-default opacity-30'
                                        : 'cursor-pointer'
                                }
                                onClick={
                                    (e) => {
                                        e.preventDefault()
                                        handlePageChange(currentPage - 1)
                                    }
                                }
                            />
                        </PaginationItem>

                        {getPages().map((page, index) => (
                            <PaginationItem key={index}>
                                {page === 'ellipsis-start' || page === 'ellipsis-end' ? (
                                    <PaginationEllipsis />
                                ) : (
                                    <PaginationLink
                                        isActive={currentPage === page}
                                        className={
                                            currentPage === page
                                                ? 'pointer-events-none cursor-default'
                                                : 'cursor-pointer'
                                        }
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handlePageChange(page)
                                        }}
                                    >
                                        {page}
                                    </PaginationLink>
                                )}
                            </PaginationItem>
                        ))}

                        <PaginationItem>
                            <PaginationNext
                                onClick={
                                    (e) => {
                                        e.preventDefault();
                                        handlePageChange(currentPage + 1)
                                    }
                                }
                                className={
                                    currentPage === totalPage
                                        ? 'pointer-events-none cursor-default opacity-30'
                                        : 'cursor-pointer'
                                }
                                disabled={
                                    currentPage === totalPage
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </>
    )
}