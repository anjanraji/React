import { useEffect, useState } from "react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { CategorySelect } from "./CategorySelect";
import { AuthorSelect } from "./AuthorSelect";
import { SortSelect } from "./SortSelect";

export const BlogFilter = ({
    blogs,
    filters,
    setFilters,
    currentCat
}) => {
    const {
        allCategories,
        allAuthor,
        currentCategory,
        currentAuthor,
        sortBy,
        currentSearchQuery,
    } = filters

    if (!blogs?.length) {
        return <p>No blogs available.</p>
    }

    const uniqueCategories = [
        ...new Set(
            blogs
                .map(blog => blog.category.toLowerCase())
                .filter(cat => cat !== 'string')
        )
    ]

    const uniqueAuthors = [
        ...new Set(blogs.map(blog => blog.authorName.toLowerCase()))
    ]

    const getFilteredSortedBlogs = () => {
        let filtered = [...blogs].filter(
            blog => blog.category?.toLowerCase() !== 'string'
        )

        if (currentCategory) {
            filtered = filtered.filter(
                blog => blog.category.toLowerCase() === currentCategory.toLowerCase()
            )
        }

        if (currentAuthor) {
            filtered = filtered.filter(
                blog => blog.authorName.toLowerCase() === currentAuthor.toLowerCase()
            )
        }

        if (currentSearchQuery) {
            const query = currentSearchQuery.toLowerCase().trim()

            filtered = filtered.filter(blog => {
                const title = String(blog.title || '').toLowerCase()
                const excerpt = String(blog.excerpt || '').toLowerCase()
                const content = String(blog.content || '').toLowerCase()

                return title.includes(query) || excerpt.includes(query) || content.includes(query)
            })
        }

        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'date-asc':
                    return new Date(a.createdAt) - new Date(b.createdAt)
                case 'date-desc':
                    return new Date(b.createdAt) - new Date(a.createdAt)
                case 'title-asc':
                    return a.title.localeCompare(b.title)
                case 'title-desc':
                    return b.title.localeCompare(a.title)
                default:
                    return 0
            }
        })

        setFilters(prev => ({
            ...prev,
            skipItems: 0,
            currentPage: 1,
            filteredBlogs: filtered,
            totalItems: filtered.length,
            totalPage: Math.ceil(filtered.length / prev.itemsPerPage)
        }))
    }

    useEffect(() => {
        setFilters(
            prev => ({
                ...prev,
                filteredBlogs: blogs,
                allCategories: uniqueCategories,
                allAuthor: uniqueAuthors
            })
        )
    }, [blogs])

    useEffect(() => {
        getFilteredSortedBlogs()

    }, [
        currentCategory,
        currentAuthor,
        currentSearchQuery,
        sortBy
    ])

    return (
        <>
            {!currentCat && (
                <div className="grid gap-2.5 max-w-10/12 md:grid-cols-5 lg:flex-1 max-w-none">
                    <div>
                        <CategorySelect
                            filters={filters}
                            setFilters={setFilters}
                        />
                    </div>
                    <div>
                        <AuthorSelect
                            filters={filters}
                            setFilters={setFilters}
                        />
                    </div>
                    <div>
                        <SortSelect
                            filters={filters}
                            setFilters={setFilters}
                        />
                    </div>

                    <div>
                        <Input
                            type="search"
                            value={currentSearchQuery}
                            placeholder="Search"
                            onChange={(e) => (
                                setFilters(
                                    prev => ({
                                        ...prev,
                                        currentSearchQuery: e.target.value,
                                        currentPage: 1
                                    })
                                )
                            )}
                        />
                    </div>
                    <div>
                        <Button
                            variant="destructive"
                            className="cursor-pointer"
                            onClick={() => (
                                setFilters(
                                    prev => ({
                                        ...prev,
                                        currentCategory: '',
                                        currentAuthor: '',
                                        currentSearchQuery: '',
                                        sortBy: 'date-desc',
                                        currentPage: 1
                                    })
                                )
                            )}
                        >
                            Reset Filter
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}