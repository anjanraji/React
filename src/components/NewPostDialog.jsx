import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "./ui/spinner"
import { useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"
import { AlertError } from "./AlertError"
import { Textarea } from "@/components/ui/textarea"
import { PostSelect } from "./PostSelect"

export function NewPostDialog({ onSuccess }) {
    const api = useApi()
    const [open, setOpen] = useState(false)

    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState('')

    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: ''
    })

    function handelChange(e) {
        const currentKey = e.target.name;

        setFormData({
            ...formData,
            [currentKey]: e.target.value
        })
    }

    const handleCreatePost = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        if (!formData.title || !formData.excerpt || !formData.content) {
            setIsLoading(false);
            setError('All fields are not filled')
            return
        }

        try {
            const response = await api.blogs.createBlog({
                title: formData.title,
                excerpt: formData.excerpt,
                content: formData.content,
                category: category || 'general'
            })

            setFormData({
                title: '',
                excerpt: '',
                content: '',
                category: ''
            })

            onSuccess()

        } catch (err) {
            setError(err?.message || 'Something went wrong')

        } finally {
            setOpen(false)
            setIsLoading(false)
        }
    }

    return (
        <AlertDialog
            open={open}
            onOpenChange={setOpen}
        >
            <AlertDialogTrigger asChild>
                <Button
                    variant="outline"
                    className="flex ml-auto mb-3 cursor-pointer"
                >
                    <Plus className="h-4 w-4" /> Add New Post
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Create New Post</AlertDialogTitle>
                    <AlertDialogDescription>
                        Fill in the details below to create a new post.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                type="text"
                                placeholder="Title"
                                required
                                name="title"
                                value={formData.title}
                                onChange={handelChange}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="excerpt">Excerpt</Label>
                            </div>
                            <Textarea
                                className="h-15"
                                id="excerpt"
                                type="text"
                                name="excerpt"
                                placeholder="Excerpt"
                                required
                                value={formData.excerpt}
                                onChange={handelChange}>
                            </Textarea>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="category">Category</Label>
                            </div>
                            <PostSelect category={category} setCategory={setCategory} />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="content">Content</Label>
                            </div>
                            <Textarea
                                className="h-36"
                                id="content"
                                type="text"
                                name="content"
                                placeholder="Content"
                                required
                                value={formData.content}
                                onChange={handelChange}>
                            </Textarea>
                        </div>
                    </div>
                    <AlertDialogFooter className="mt-4 grid grid-cols-2">
                        <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                        <Button
                            className="cursor-pointer"
                            onClick={handleCreatePost}
                        >
                            {!isLoading && "Create Post"}
                            {isLoading && <> <Spinner /> Processing... </>}
                        </Button>
                    </AlertDialogFooter>
                    {error && (
                        <div className="mt-3">
                            <AlertError
                                errorTitle={'Creating post failed:'}
                                error={error}
                            />
                        </div>
                    )}
                </form>
            </AlertDialogContent>
        </AlertDialog>
    )
}