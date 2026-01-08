import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useNavigate } from "react-router"

export function LogOutAlertDialog({
    open,
    setOpen,
    logout
}) {
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate("/", { replace: true })
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to logout? You will be signed out of your account and
                        will need to login again to access your data.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer" onClick={
                        () => setOpen(false)
                    }>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="cursor-pointer" onClick={
                        () => {
                            setOpen(false)
                            handleLogout()
                        }
                    }>Logout</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
