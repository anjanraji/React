import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const Services = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="py-28">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Our Services
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We provide end-to-end solutions designed to help teams build,
                        scale, and maintain modern digital products.
                    </p>
                </div>
            </section>

            <Separator />

            {/* Services Grid */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-semibold text-center">
                        What we offer
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>UI / UX Design</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                User-focused design systems, wireframes, and interfaces
                                that are accessible and easy to use.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Frontend Development</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Modern React, Tailwind, and shadcn UI development with
                                scalable and maintainable code.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Backend Integration</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                API integration, authentication, and data handling
                                tailored to your product needs.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="relative">
                <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-muted" />
                <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
                    <h3 className="text-3xl font-semibold text-center">
                        Our process
                    </h3>

                    <div className="mt-12 grid gap-6 md:grid-cols-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Discover</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Understanding your goals, users, and requirements.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Design</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Creating clean, consistent, and accessible interfaces.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Build</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Developing scalable solutions using modern tools.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Launch</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Testing, optimizing, and delivering production-ready code.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h3 className="text-3xl font-semibold">
                        Let’s work together
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                        Have a project in mind? Let’s discuss how we can help you.
                    </p>

                    <Button size="lg" className="mt-8 cursor-pointer">
                        Contact Us
                    </Button>
                </div>
            </section>
        </main>
    )
}