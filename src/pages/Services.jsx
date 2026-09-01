import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export const Services = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="py-16">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <Badge variant="secondary" className="mb-5 px-3 py-1 uppercase tracking-wide">
                        Write With Us
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                        Publish your next article on DevNotes
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                        Whether you want to publish a one-off tutorial or partner with
                        us long-term, here's how developers and teams work with
                        DevNotes.
                    </p>
                </div>
            </section>

            <Separator />

            {/* Services Grid */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-semibold text-center">
                        Ways to work with DevNotes
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Guest Posts</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Write a free-standing tutorial or deep dive under your
                                own byline. Create an account and publish straight from
                                your dashboard &mdash; no pitch email required.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Sponsored Content</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Have a dev tool worth covering? We write honest,
                                hands-on posts about products we'd actually recommend,
                                clearly labeled as sponsored.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Technical Review</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Already have a draft? Send it over and we'll review it
                                for accuracy and clarity before it goes live under your
                                name.
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
                        How publishing works
                    </h3>

                    <div className="mt-12 grid gap-6 md:grid-cols-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>1. Sign Up</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Create a free account in under a minute &mdash; no
                                approval process to get started.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>2. Draft</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Write your post from your dashboard: title, excerpt,
                                category, and content.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>3. Review</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                We do a quick pass for accuracy and clarity before
                                anything goes live.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>4. Publish</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Your article joins the blog, credited to you, and stays
                                editable from your dashboard.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h3 className="text-3xl font-semibold">
                        Ready to publish something?
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                        Create a free account and your first draft can be live today.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="cursor-pointer" asChild>
                            <Link to="/sign-up">Create Free Account</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                            <Link to="/blogs">Read the Blog First</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
