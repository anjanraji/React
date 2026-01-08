import React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const About = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="py-28">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        About Us
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We are a team focused on building thoughtful, scalable, and
                        user-centered digital experiences.
                    </p>
                </div>
            </section>
            <Separator />
            <section className="py-24">
                <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            Our story
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Our journey started with a simple goal: create clean,
                            maintainable products that scale with real business needs.
                            Over time, we refined our process around design systems,
                            accessibility, and performance.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Today, we work closely with teams to turn ideas into
                            production-ready solutions using modern tools and
                            best practices.
                        </p>
                    </div>

                    <Card>
                        <CardContent className="p-8 text-sm text-muted-foreground">
                            “We believe great products are built through clarity,
                            consistency, and collaboration.”
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="relative">
                <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-muted" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
                    <h2 className="text-3xl font-semibold text-center">
                        Our values
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Clarity</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                We value simple solutions that are easy to understand,
                                maintain, and scale.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Quality</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Attention to detail, accessibility, and performance
                                guide every decision we make.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Collaboration</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                We work as partners with our clients, not just
                                service providers.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-semibold text-center">
                        Meet the team
                    </h2>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                        {["Designer", "Frontend Dev", "Backend Dev", "Product Lead"].map(
                            (role, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle>{role}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground">
                                        Passionate about building meaningful digital products
                                        with modern technologies.
                                    </CardContent>
                                </Card>
                            )
                        )}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h3 className="text-3xl font-semibold">
                        Want to work with us?
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                        Let’s build something great together.
                    </p>

                    <Button size="lg" className="mt-8 cursor-pointer">
                        Get in Touch
                    </Button>
                </div>
            </section>
        </main>
    )
}