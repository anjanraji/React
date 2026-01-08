import React, { useState } from 'react'
import { useApi } from '../hooks/useApi';
import { useEffect } from 'react';
import { Spinner } from '../components/ui/spinner';
import { BlogCard } from '../components/BlogCard';

export const Blog = ({
    limit,
    currentCategory,
    currentId
}) => {
    const api = useApi();

    const title = (limit) ? ('Other Related posts') : ('All blog posts')

    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        setIsloading(true)
        setIsLoaded(false)

        const response = await api.blogs.getAll()

        if (response.error) {
            setError(response.error || 'Request Failed')
            setIsloading(false)
        }

        setBlogs(response.data)

        setIsloading(false)

        setTimeout(() => {
            setIsLoaded(true)
        }, 10);
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <>
            {isLoading && (
                <div className='flex justify-center items-center gap-1.5 text-2xl absolute top-1/2 left-1/2 -translate-1/2'>
                    <Spinner className="size-7" />
                    <span>Loading...</span>
                </div>
            )}

            {!isLoading && isLoaded && (
                <h1 className="scroll-m-20 text-3xl font-bold tracking-tight text-balance mb-5">
                    {title}
                </h1>
            )}

            {!isLoading && (
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    <BlogCard
                        blogs={blogs}
                        isLoaded={isLoaded}
                        limit={limit}
                        currentCategory={currentCategory}
                        currentId={currentId}
                    />
                </div>
            )}
        </>
    )
}
