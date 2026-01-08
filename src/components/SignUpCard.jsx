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


export function SignUpCard({
    error,
    user,
    signup,
    isLoading = false
}) {
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/dashboard", { replace: true })
        }
    }, [navigate, user])

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const handelChange = (e) => {
        e.preventDefault();

        const currentKey = e.target.name

        setFormData({
            ...formData,
            [currentKey]: e.target.value
        })
    }

    const handleSignup = async (e) => {
        e.preventDefault()

        try {
            const result = await signup(
                formData.fullName,
                formData.email,
                formData.password
            )

            if (result) {
                navigate("/dashboard", { replace: true })
            }

        } catch (err) {
            throw new Error(err, 'Signup failed')
        }
    }

    return (
        <Card className="w-full max-w-sm mx-auto ">
            <CardHeader>
                <CardTitle>Signup to your account</CardTitle>
                <CardDescription>
                    Enter your detail below to create your new account
                </CardDescription>
                <CardAction>
                    <Button asChild variant="link">
                        <Link to="/Login">Login</Link>
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSignup}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                                id="fullName"
                                type="text"
                                placeholder="Full Name"
                                required
                                name="fullName"
                                value={formData.fullName}
                                onChange={handelChange}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                name="email"
                                minLength={6}
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
                            {!isLoading && "Create Account"}
                            {isLoading && (
                                <>
                                    <Spinner />
                                    Processing...
                                </>
                            )}
                        </Button>
                        {error && (
                            <AlertError
                                errorTitle={'Signup failed:'}
                                error={error}
                            />
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}