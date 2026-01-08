import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"
import { Spinner } from "./ui/spinner"
import { AlertError } from "./AlertError"

export function LoginCard({
    user,
    error,
    login,
    isLoading = false
}) {
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/dashboard", { replace: true })
        }
    }, [navigate, user])

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })


    const handelChange = (e) => {
        const currentKey = e.target.name

        setFormData({
            ...formData,
            [currentKey]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const result = await login(
                formData.email,
                formData.password
            )

            if (result) {
                navigate("/dashboard", { replace: true })
            }

        } catch (err) {
            throw new Error(err, 'Login failed')
        }
    }

    return (
        <Card className="w-full max-w-sm mx-auto">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
                <CardAction>
                    <Button asChild variant="link">
                        <Link to="/sign-up">Sign Up</Link>
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                name="email"
                                value={formData.email}
                                onChange={handelChange}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input id="password"
                                type="password"
                                name="password"
                                placeholder="*********"
                                required
                                value={formData.password}
                                onChange={handelChange} />
                        </div>
                        <Button type="submit" className="w-full cursor-pointer">
                            {!isLoading && "Login"}
                            {isLoading && (
                                <>
                                    <Spinner />
                                    Processing...
                                </>
                            )}
                        </Button>
                        {error && (
                            <AlertError
                                errorTitle={'Login failed:'}
                                error={error}
                            />
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
