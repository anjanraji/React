import React, { useEffect, useState } from "react"
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
import { useApi } from "@/hooks/useApi"
import { Target, FlaskConical, Users, ExternalLink } from "lucide-react"

const team = [
    {
        name: "Alex Johnson",
        role: "Co-founder, Frontend & CSS",
        bio: "Builds design systems for a living and writes about React and CSS on the weekend.",
    },
    {
        name: "Sam Rivera",
        role: "Co-founder, JavaScript & Backend",
        bio: "Backend engineer who ended up writing most of the JavaScript and Node.js posts.",
    },
]

const values = [
    {
        icon: Target,
        title: "Practical over perfect",
        body: "We'd rather ship a useful, slightly imperfect tutorial than sit on a \"perfect\" draft for six months.",
    },
    {
        icon: FlaskConical,
        title: "Tested, not theoretical",
        body: "Every code sample comes from something that ran in a real project, not just a sandbox demo.",
    },
    {
        icon: Users,
        title: "Open to contributors",
        body: "Anyone can create a free account and publish a post. We review, but we don't gatekeep.",
    },
]

const elsewhere = [
    {
        label: "Next.js Version",
        blurb: "The same DevNotes concept, rebuilt on Next.js.",
        href: "https://nextjs.raji.com.np/",
    },
    {
        label: "My Portfolio",
        blurb: "More projects and write-ups outside of DevNotes.",
        href: "https://www.raji.com.np/",
    },
]

export const About = () => {
    const api = useApi()
    const [stats, setStats] = useState(null)

    useEffect(() => {
        let active = true

        api.blogs.getAll().then((response) => {
            if (!active) return
            const posts = response.data || []
            setStats({
                articles: posts.length,
                topics: new Set(posts.map((p) => p.category)).size,
                writers: new Set(posts.map((p) => p.authorName)).size,
            })
        })

        return () => {
            active = false
        }
    }, [])

    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="py-16">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <Badge variant="secondary" className="mb-5 px-3 py-1 uppercase tracking-wide">
                        About DevNotes
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                        Two developers, one blog
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                        DevNotes started as a shared notes doc between two developers
                        tired of losing the same Stack Overflow answers twice. It's now
                        a small blog covering React, JavaScript, CSS, and backend work.
                    </p>

                    {stats && (
                        <div className="mt-10 flex flex-wrap justify-center gap-2">
                            <Badge variant="outline" className="px-3 py-1 text-sm">
                                {stats.articles} articles published
                            </Badge>
                            <Badge variant="outline" className="px-3 py-1 text-sm">
                                {stats.topics} topics covered
                            </Badge>
                            <Badge variant="outline" className="px-3 py-1 text-sm">
                                {stats.writers} writers
                            </Badge>
                        </div>
                    )}
                </div>
            </section>
            <Separator />
            <section className="py-24">
                <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            How it started
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            In 2023, Alex and Sam were working on the same product team
                            and kept explaining the same debugging tricks to each other
                            over Slack. Eventually those messages turned into proper
                            write-ups, and DevNotes was born.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            The rule has stayed the same since day one: if we didn't
                            actually run into the problem ourselves, we don't write
                            about it.
                        </p>
                    </div>

                    <Card>
                        <CardContent className="p-8 text-sm text-muted-foreground">
                            &ldquo;We started DevNotes so future-us would stop
                            re-Googling the same things. Turns out a lot of other
                            developers had the same problem.&rdquo;
                            <div className="mt-4 text-foreground font-medium not-italic">
                                &mdash; Alex &amp; Sam, DevNotes
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="relative">
                <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-muted" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
                    <h2 className="text-3xl font-semibold text-center">
                        What we care about
                    </h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {values.map(({ icon: Icon, title, body }) => (
                            <Card key={title}>
                                <CardHeader>
                                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <CardTitle className="mt-3">{title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    {body}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-semibold text-center">
                        The people behind DevNotes
                    </h2>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        {team.map((member) => (
                            <Card key={member.name}>
                                <CardHeader>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                                        {member.name.split(" ").map((n) => n[0]).join("")}
                                    </div>
                                    <CardTitle className="mt-3">{member.name}</CardTitle>
                                    <p className="text-sm text-primary">{member.role}</p>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    {member.bio}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Separator />

            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-semibold">More builds of this project</h2>
                    <p className="mt-4 text-muted-foreground">
                        This React front end isn't the only version of DevNotes out
                        there &mdash; there's a Next.js build too, plus more of my
                        work over on my portfolio.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
                        {elsewhere.map(({ label, blurb, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="group block text-left"
                            >
                                <Card className="h-full transition-colors group-hover:border-primary/40">
                                    <CardContent className="p-5">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">{label}</span>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                                        </div>
                                        <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h3 className="text-3xl font-semibold">
                        Want to write for DevNotes?
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                        We're always happy to publish a good, honest write-up from
                        another developer.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="cursor-pointer" asChild>
                            <Link to="/sign-up">Create a Free Account</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                            <Link to="/services">See How Writing With Us Works</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
