import React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const Home = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="py-28">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Build modern interfaces faster
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                        A scalable React + shadcn UI foundation powered by Tailwind
                        and theme-based design tokens.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <Button size="lg" className="cursor-pointer">Get Started</Button>
                        <Button size="lg" variant="outline" className="cursor-pointer">
                            Explore Features
                        </Button>
                    </div>
                </div>
            </section>
            <Separator />
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-semibold text-center">
                        Everything you need to start
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Theme First</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Colors, radius, and spacing are fully driven by CSS variables
                                with built-in dark mode support.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Accessible UI</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                shadcn UI components built on Radix ensure accessibility
                                and composability by default.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Production Ready</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Clean structure that scales easily for dashboards,
                                marketing pages, or full applications.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-muted" />
                <div className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center relative z-10">
                    <div>
                        <h3 className="text-2xl font-semibold">
                            Designed for real-world projects
                        </h3>
                        <p className="mt-4 text-muted-foreground">
                            This placeholder page is intentionally minimal but structured.
                            It gives you flexibility to plug in real content without
                            rewriting layout logic.
                        </p>

                        <Button className="mt-6 cursor-pointer" variant="secondary">
                            Learn More
                        </Button>
                    </div>

                    <Card>
                        <CardContent className="p-8 text-sm text-muted-foreground">
                            “Using design tokens instead of hardcoded styles makes
                            maintenance easier and improves long-term consistency.”
                        </CardContent>
                    </Card>
                </div>
            </section>
            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h3 className="text-3xl font-semibold">
                        Ready to move forward?
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                        Start building on top of this layout and adapt it
                        to your product needs.
                    </p>

                    <Button size="lg" className="mt-8 cursor-pointer">
                        Start Your Project
                    </Button>
                </div>
            </section>
        </main>
    )
}