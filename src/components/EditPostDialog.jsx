import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "./ui/spinner"
import { useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"
import { AlertError } from "./AlertError"
import { Textarea } from "@/components/ui/textarea"
import { PostSelect } from "./PostSelect"

export function EditPostDialog({
    onSuccess,
    dashboardState,
    togglePopup
}) {
    const api = useApi()
    const { popupState, currentId, myBlogs } = dashboardState
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState('')
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
    })

    function handelChange(e) {
        const { name, value } = e.target

        setFormData(
            prev => ({
                ...prev,
                [name]: value
            })
        )
    }

    const prefillFormData = (id) => {
        const blog = myBlogs.find(b => b._id === id)

        if (!blog) {
            setError('Item not found.')
            return
        }

        setFormData({
            title: blog.title,
            excerpt: blog.excerpt,
            content: blog.content,
        })

        setCategory(blog.category)
    }

    useEffect(() => {
        if (!popupState.isEdit || !currentId) return
        prefillFormData(currentId)
    }, [popupState.isEdit, currentId, myBlogs])

    const handleUpdatePost = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        if (!formData.title || !formData.excerpt || !formData.content) {
            setError('All fields are not filled')
            return
        }

        try {
            await api.blogs.updatePost(currentId,
                {
                    ...formData,
                    category
                }
            )

            setFormData({
                title: '',
                excerpt: '',
                content: ''
            })

            onSuccess()

        } catch (err) {
            setError(err || 'Failed to update post')

        } finally {
            setIsLoading(false)

            togglePopup({
                popupType: "isEdit",
                value: false
            })
        }
    }

    return (
        <AlertDialog
            open={popupState.isEdit}
            onOpenChange={
                (open) => togglePopup({
                    popupType: "isEdit",
                    value: open
                })
            }
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Update Current Post</AlertDialogTitle>
                    <AlertDialogDescription>
                        Update the details below to modify this post.
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
                            <Textarea className="h-15" id="excerpt"
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
                            <Textarea className="h-36" id="content"
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
                        <AlertDialogCancel className="cursor-pointer">
                            Cancel
                        </AlertDialogCancel>
                        <Button
                            className="cursor-pointer"
                            onClick={handleUpdatePost}
                        >
                            {!isLoading && "Update Post"}
                            {isLoading && <> <Spinner /> Processing... </>}
                        </Button>
                    </AlertDialogFooter>
                    {error && (
                        <div className="mt-3">
                            <AlertError
                                errorTitle={'Failed to update post:'}
                                error={error}
                            />
                        </div>
                    )}
                </form>
            </AlertDialogContent>
        </AlertDialog>
    )
}