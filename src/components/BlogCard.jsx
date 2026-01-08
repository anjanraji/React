import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function BlogCard({
    blogs,
    isLoaded,
    limit = null,
    currentCategory = null,
    currentId = null
}) {
    let count = 0;
    return (
        <>
            {blogs.length > 0 ? (
                blogs.map((item, index) => {

                    const iso = item.createdAt
                    const d = new Date(iso)
                    const dateOnly = d.toISOString().slice(0, 10)

                    if (item.category !== 'string'
                        && (!currentCategory || currentCategory === item.category)
                        && (!currentId || currentId !== item._id)) {

                        if (limit && count >= limit) return

                        count++

                        return (
                            <Card className="w-full p-0 opacity-0" key={item._id} data-loaded={isLoaded} style={{ transitionDelay: `${index * 30}ms` }}>
                                <Link to={`/blogs/${item.slug}`} className="block w-full p-5 rounded-xl h-full transition-colors hover:bg-gray-50">
                                    <CardContent className="p-0">
                                        <AspectRatio ratio={16 / 9} className="bg-gray-300 mb-3 rounded-lg w-full"></AspectRatio>
                                        <div className="flex w-full flex-wrap gap-2">
                                            <Badge className="uppercase mb-1">{item.category}</Badge>
                                            <Badge variant="secondary" className="uppercase mb-1">{item.authorName}</Badge>
                                            <Badge variant="outline" className="uppercase mb-1">{dateOnly}</Badge>
                                        </div>
                                        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p>{item.excerpt}</p>
                                    </CardContent>
                                </Link>
                            </Card>
                        )
                    }
                })
            ) : (
                isLoaded && (
                    <p className="col-span-3 text-md text-muted-foreground mt-4">No blogs found.</p>
                )
            )}

            {count === 0 && limit && (
                <p className="col-span-3 text-md text-muted-foreground mt-4">No other related posts found.</p>
            )}
        </>

    )
}