import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export const Notfound = () => {
    return (
        <div className="flex flex-col items-center py-16 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <FileQuestion className="h-8 w-8" />
            </span>
            <h1 className="mt-6 scroll-m-20 text-4xl font-bold tracking-tight text-balance">
                404 &mdash; Page not found
            </h1>
            <p className="mt-3 max-w-md text-muted-foreground">
                The page you're looking for doesn't exist, or the post may have
                been moved or deleted.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild className="cursor-pointer">
                    <Link to="/">Back to Home</Link>
                </Button>
                <Button variant="outline" asChild className="cursor-pointer">
                    <Link to="/blogs">Browse the Blog</Link>
                </Button>
            </div>
        </div>
    )
}
