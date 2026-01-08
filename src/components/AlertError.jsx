import { AlertCircleIcon } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export function AlertError({ error, errorTitle }) {
    return (
        <div className="grid w-full max-w-xl items-start gap-4">
            <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>
                    {errorTitle}
                </AlertTitle>
                <AlertDescription>
                    <p>
                        {error}
                    </p>
                </AlertDescription>
            </Alert>
        </div>
    )
}
