import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useApi } from "../hooks/useApi"
import { useState } from "react"
import { Spinner } from "./ui/spinner"
import { Kbd } from "@/components/ui/kbd"
import { Button } from "./ui/button"

export function DeletePostAlert({
    onSuccess,
    dashboardState,
    togglePopup
}) {
    const api = useApi()
    const { popupState, currentTitle, currentId } = dashboardState
    const [loading, setLoading] = useState(false)

    const handleDeletePost = async (id) => {
        setLoading(true)

        try {
            await api.blogs.deletePost(id)
            onSuccess()

        } finally {
            setLoading(false)
            togglePopup({
                popupType: "isDelete",
                value: false
            })
        }
    }

    return (
        <AlertDialog
            open={popupState.isDelete}
            onOpenChange={
                (open) => togglePopup({
                    popupType: "isDelete",
                    value: open
                })
            }>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to permanently delete the post <Kbd className="bg-primary pt-0.5 capitalize px-2.5 inline-block text-white">
                            {currentTitle}
                        </Kbd> ? This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer">
                        Cancel
                    </AlertDialogCancel>
                    <Button
                        className="cursor-pointer"
                        onClick={
                            () => {
                                handleDeletePost(currentId)
                            }
                        }>
                        {!loading && "Delete"}
                        {loading && (
                            <span className="font-normal flex items-center gap-1">
                                <Spinner className="size-4" />
                                <span>Loading...</span>
                            </span>
                        )}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}
