import React from "react"
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

export const About = () => {
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
                        <Card>
                            <CardHeader>
                                <CardTitle>Practical over perfect</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                We'd rather ship a useful, slightly imperfect tutorial
                                than sit on a "perfect" draft for six months.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Tested, not theoretical</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Every code sample comes from something that ran in a
                                real project, not just a sandbox demo.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Open to contributors</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Anyone can create a free account and publish a post.
                                We review, but we don't gatekeep.
                            </CardContent>
                        </Card>
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

            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h3 className="text-3xl font-semibold">
                        Want to write for DevNotes?
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                        We're always happy to publish a good, honest write-up from
                        another developer.
                    </p>

                    <Button size="lg" className="mt-8 cursor-pointer" asChild>
                        <Link to="/sign-up">Create a Free Account</Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
