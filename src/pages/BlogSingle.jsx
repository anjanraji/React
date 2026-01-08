import React, { useState } from 'react'
import { useApi } from '../hooks/useApi';
import { useEffect } from 'react';
import { Spinner } from '../components/ui/spinner';
import { Link, useParams } from 'react-router';
import { SingleContent } from '../components/SingleContent';
import { Button } from '../components/ui/button';
import { Blog } from './Blog';

export const BlogSingle = () => {
    const { slug } = useParams()
    const api = useApi()

    const [content, setContent] = useState(null)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    const showBlog = async () => {
        setIsLoading(true)
        setIsLoaded(false)

        const response = await api.blogs.getById(slug)

        if (response.data.error) {
            setError(response.data.error || 'Request Failed')
            setIsLoading(false)
        }

        setContent(response.data)

        setIsLoading(false)

        setTimeout(() => {
            setIsLoaded(true)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 10);
    }

    useEffect(() => {

        showBlog()
    }, [slug])

    return (
        <div data-loading={isLoading}>
            {isLoading && (
                <div className='flex justify-center items-center gap-1.5 text-2xl absolute top-1/2 left-1/2 -translate-1/2'>
                    <Spinner className="size-7" />
                    <span>Loading...</span>
                </div>
            )}

            {!isLoading && error && (
                <div className='loading-anim'>
                    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                        {error}
                    </h1>
                    <Button
                        asChild
                        variant="outline"
                        className="text-color-primary"
                    >
                        <Link to="/blogs">Go back to blogs page</Link>
                    </Button>
                </div>
            )}

            {!isLoading && !error && content && (
                <div className='loading-anim'>
                    <SingleContent
                        content={content}
                    />
                    <div className='relative min-h-80'>
                        <Blog
                            limit={3}
                            currentCategory={content.category}
                            currentId={content._id}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
