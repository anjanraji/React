import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function BlogCard({
    filters,
    isLoaded,
    limit = null,
    currentCategory = null,
    currentId = null
}) {

    const {
        filteredBlogs,
        itemsPerPage,
        skipItems
    } = filters

    let blogsToDisplay

    if (currentCategory) {
        blogsToDisplay = filteredBlogs
            .filter(blog => blog.category === currentCategory && blog._id !== currentId)
            .slice(0, limit)

    } else {
        blogsToDisplay = filteredBlogs.slice(skipItems, skipItems + itemsPerPage)
    }

    return (
        <>
            {blogsToDisplay.length > 0 ? (
                blogsToDisplay.map((item, index) => {

                    const iso = item.createdAt
                    const d = new Date(iso)
                    const dateOnly = d.toISOString().slice(0, 10)

                    return (
                        <Card className="w-full p-0 opacity-0 overflow-hidden" key={item._id} data-loaded={isLoaded} style={{ transitionDelay: `${index * 30}ms` }}>
                            <Link to={`/blogs/${item.slug}`} className="block w-full h-full transition-colors hover:bg-muted/40">
                                <CardContent className="p-5">
                                    <AspectRatio ratio={16 / 9} data-cover={item.category} className="mb-3 rounded-lg w-full"></AspectRatio>
                                    <div className="flex w-full flex-wrap gap-2">
                                        <Badge className="uppercase mb-1">{item.category}</Badge>
                                        <Badge variant="secondary" className="uppercase mb-1">{item.authorName}</Badge>
                                        <Badge variant="outline" className="uppercase mb-1">{dateOnly}</Badge>
                                    </div>
                                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-muted-foreground">{item.excerpt}</p>
                                </CardContent>
                            </Link>
                        </Card>
                    )
                })
            ) : (
                <>
                    {isLoaded && currentCategory && (
                        <p
                            className="col-span-3 text-md text-muted-foreground mt-4"
                        >
                            No other related posts found.
                        </p>
                    )}
                    {isLoaded && !currentCategory && (
                        <p
                            className="col-span-3 text-md text-muted-foreground mt-4"
                        >
                            No blogs found.
                        </p>
                    )}
                </>
            )}
        </>

    )
}