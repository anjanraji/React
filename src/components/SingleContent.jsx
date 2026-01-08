import React from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbLinks } from './BreadcrumbLinks'

export const SingleContent = ({ content }) => {
    const iso = content.createdAt
    const d = new Date(iso)
    const dateOnly = d.toISOString().slice(0, 10)

    return (
        <>
            <BreadcrumbLinks title={content.title}/>
            <div className="flex w-full flex-wrap gap-2 mb-2">
                <Badge className="uppercase mb-1">{content.category}</Badge>
                <Badge variant="secondary" className="uppercase mb-1">{content.authorName}</Badge>
                <Badge variant="outline" className="uppercase mb-1">{dateOnly}</Badge>
            </div>
            <h1 className="scroll-m-20 mb-1 text-4xl font-bold tracking-tight text-balance">
                {content.title}
            </h1>
            <p className="text-xl mb-3 leading-7">
                {content.excerpt}
            </p>
            <AspectRatio ratio={2 / 1} className="bg-gray-300 mb-6 rounded-lg w-full"></AspectRatio>
            <div className='text-lg' dangerouslySetInnerHTML={{ __html: content.content }}></div>
            <hr className='mt-15 mb-6' />
        </>
    )
}
