import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { SquarePen, Trash2 } from "lucide-react"
import { Button } from "./ui/button"

export function DashboardCard({
    dashboardState,
    togglePopup
}) {
    const { myBlogs, isLoaded, listView } = dashboardState
    return (
        <>
            {myBlogs.length > 0 ? (
                myBlogs.map((item, index) => {
                    const iso = item.createdAt
                    const d = new Date(iso)
                    const dateOnly = d.toISOString().slice(0, 10)

                    return (
                        <Card
                            className="w-full p-0 opacity-0"
                            key={item._id}
                            data-loaded={isLoaded}
                            style={{ transitionDelay: `${index * 30}ms` }}
                        >
                            <div
                                className={`flex flex-col w-full p-5 rounded-xl h-full transition-colors hover:bg-gray-50 ${listView ? 'grid grid-cols-[1fr_90px] gap-3' : ''}`}>
                                <CardContent
                                    className={`p-0 ${listView ? 'grid grid-cols-[150px_1fr] gap-3 items-center' : ''}`}
                                >
                                    <AspectRatio
                                        ratio={`${listView ? 4 / 3 : 16 / 9}`}
                                        className={`bg-gray-300 rounded-lg w-full ${listView ? "mb-0" : "mb-3"}`}
                                    >
                                    </AspectRatio>
                                    <div>
                                        <div className="flex w-full flex-wrap gap-2">
                                            <Badge className="uppercase mb-1">
                                                {item.category}
                                            </Badge>
                                            <Badge variant="secondary" className="uppercase mb-1">
                                                {item.authorName}
                                            </Badge>
                                            <Badge variant="outline" className="uppercase mb-1">
                                                {dateOnly}
                                            </Badge>
                                        </div>
                                        <h3 className="capitalize scroll-m-20 text-xl font-semibold tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.excerpt}
                                        </p>
                                    </div>
                                </CardContent>
                                <div className={`flex gap-1.5 py-2.5 ${!listView ? "mt-auto" : ""}`}>
                                    <Button
                                        variant="outline"
                                        className="cursor-pointer"
                                        onClick={
                                            () => togglePopup({
                                                popupType: "isEdit",
                                                value: true,
                                                id: item._id
                                            })
                                        }
                                    >
                                        <span className={listView ? 'hidden' : ''}>
                                            Edit
                                        </span>
                                        <SquarePen className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        className="cursor-pointer"
                                        onClick={
                                            () => togglePopup({
                                                popupType: "isDelete",
                                                value: true,
                                                id: item._id,
                                                title: item.title
                                            })
                                        }
                                    >
                                        <span className={listView ? 'hidden' : ''}>
                                            Delete
                                        </span>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    )
                })
            ) : (
                isLoaded && (
                    <p className="col-span-3 text-md text-muted-foreground mt-4">
                        No blogs found.
                    </p>
                )
            )}
        </>
    )
}