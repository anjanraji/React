import React from "react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Atom,
    Braces,
    Paintbrush,
    Server,
    Wand2,
    BookOpenCheck,
    Users,
} from "lucide-react"

const topics = [
    { label: "React", slug: "react", icon: Atom, blurb: "Hooks, patterns, and performance" },
    { label: "JavaScript", slug: "javascript", icon: Braces, blurb: "Core language, ES2024+" },
    { label: "CSS", slug: "css", icon: Paintbrush, blurb: "Layout, Grid, and animation" },
    { label: "Backend", slug: "backend", icon: Server, blurb: "APIs, Node.js, databases" },
]

export const Home = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="py-16">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <Badge variant="secondary" className="mb-5 px-3 py-1 uppercase tracking-wide">
                        A blog for working developers
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                        Practical tutorials for developers
                        <span className="text-primary"> who ship</span>
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                        DevNotes is a small, independent publication covering React,
                        JavaScript, CSS, and backend development &mdash; short,
                        practical write-ups you can actually use, with no fluff.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="cursor-pointer" asChild>
                            <Link to="/blogs">Start Reading</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                            <Link to="/about-us">About the Authors</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Separator />

            <section className="py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Browse by topic</h2>
                        <p className="mt-3 text-muted-foreground">
                            Jump straight to the stack you're working in.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {topics.map(({ label, icon: Icon, blurb }) => (
                            <Link to="/blogs" key={label} className="group block">
                                <Card className="h-full transition-colors group-hover:border-primary/40">
                                    <CardHeader>
                                        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <CardTitle className="mt-3">{label}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground">
                                        {blurb}
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-muted" />
                <div className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-3 relative z-10">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardHeader>
                            <BookOpenCheck className="h-6 w-6 text-primary" />
                            <CardTitle className="mt-3">Practical, not academic</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            Every article is written from a real problem we ran into on
                            a project &mdash; not a rehash of the docs.
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-none bg-transparent">
                        <CardHeader>
                            <Users className="h-6 w-6 text-primary" />
                            <CardTitle className="mt-3">Written by developers</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            No ghostwriters. Every post is written and reviewed by the
                            engineer who did the work.
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-none bg-transparent">
                        <CardHeader>
                            <Wand2 className="h-6 w-6 text-primary" />
                            <CardTitle className="mt-3">Free, always</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            No paywall, no newsletter gate. Create a free account only
                            if you want to publish your own posts.
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h3 className="text-3xl font-semibold">
                        Have something worth sharing?
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                        Create a free account and publish your own write-up to the
                        DevNotes blog in a few minutes.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="cursor-pointer" asChild>
                            <Link to="/sign-up">Create Free Account</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                            <Link to="/services">Learn About Writing With Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
