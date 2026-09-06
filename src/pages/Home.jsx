import React, { useEffect, useState } from "react"
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
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useApi } from "@/hooks/useApi"
import {
    Atom,
    Braces,
    Paintbrush,
    Server,
    Layers,
    Sparkles,
    Wand2,
    BookOpenCheck,
    Users,
    ArrowRight,
} from "lucide-react"

const topics = [
    { label: "React", slug: "react", icon: Atom, blurb: "Hooks, patterns, and performance" },
    { label: "JavaScript", slug: "javascript", icon: Braces, blurb: "Core language, ES2024+" },
    { label: "CSS", slug: "css", icon: Paintbrush, blurb: "Layout, Grid, and animation" },
    { label: "Backend", slug: "backend", icon: Server, blurb: "APIs, Node.js, databases" },
    { label: "WordPress", slug: "wordpress", icon: Layers, blurb: "Themes, plugins, and the loop" },
    { label: "General", slug: "general", icon: Sparkles, blurb: "Tooling, workflow, and career notes" },
]

export const Home = () => {
    const api = useApi()
    const [posts, setPosts] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        let active = true

        api.blogs.getAll().then((response) => {
            if (!active) return
            setPosts(response.data || [])
            setIsLoaded(true)
        })

        return () => {
            active = false
        }
    }, [])

    const latestPosts = [...posts]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3)

    const stats = [
        { label: "Articles", value: posts.length },
        { label: "Topics", value: new Set(posts.map((p) => p.category)).size },
        { label: "Writers", value: new Set(posts.map((p) => p.authorName)).size },
    ]

    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="relative overflow-hidden py-16">
                <div
                    className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-96 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,var(--accent),transparent_70%)]"
                    aria-hidden="true"
                />
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

                    {isLoaded && (
                        <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
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

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

            {(!isLoaded || latestPosts.length > 0) && (
                <section className="py-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="flex flex-wrap items-end justify-between gap-4">
                            <div>
                                <h2 className="text-3xl font-semibold">Latest from the blog</h2>
                                <p className="mt-3 text-muted-foreground">
                                    Fresh write-ups, straight from the people who wrote the code.
                                </p>
                            </div>
                            <Button variant="ghost" className="cursor-pointer" asChild>
                                <Link to="/blogs" className="group inline-flex items-center gap-1.5">
                                    View all posts
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {latestPosts.map((post) => {
                                const dateOnly = new Date(post.createdAt).toISOString().slice(0, 10)

                                return (
                                    <Link to={`/blogs/${post.slug}`} key={post._id} className="group block">
                                        <Card className="h-full p-0 overflow-hidden transition-colors group-hover:border-primary/40">
                                            <CardContent className="p-5">
                                                <AspectRatio ratio={16 / 9} data-cover={post.category} className="mb-3 rounded-lg w-full" />
                                                <div className="flex flex-wrap gap-2">
                                                    <Badge className="uppercase">{post.category}</Badge>
                                                    <Badge variant="outline" className="uppercase">{dateOnly}</Badge>
                                                </div>
                                                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                                                    {post.title}
                                                </h3>
                                                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

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
