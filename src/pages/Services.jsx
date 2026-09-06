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
import {
    PenLine,
    Megaphone,
    FileCheck2,
    UserPlus,
    FileEdit,
    Search,
    Rocket,
} from "lucide-react"

const offerings = [
    {
        icon: PenLine,
        title: "Guest Posts",
        body: "Write a free-standing tutorial or deep dive under your own byline. Create an account and publish straight from your dashboard — no pitch email required.",
    },
    {
        icon: Megaphone,
        title: "Sponsored Content",
        body: "Have a dev tool worth covering? We write honest, hands-on posts about products we'd actually recommend, clearly labeled as sponsored.",
    },
    {
        icon: FileCheck2,
        title: "Technical Review",
        body: "Already have a draft? Send it over and we'll review it for accuracy and clarity before it goes live under your name.",
    },
]

const steps = [
    {
        icon: UserPlus,
        title: "Sign Up",
        body: "Create a free account in under a minute — no approval process to get started.",
    },
    {
        icon: FileEdit,
        title: "Draft",
        body: "Write your post from your dashboard: title, excerpt, category, and content.",
    },
    {
        icon: Search,
        title: "Review",
        body: "We do a quick pass for accuracy and clarity before anything goes live.",
    },
    {
        icon: Rocket,
        title: "Publish",
        body: "Your article joins the blog, credited to you, and stays editable from your dashboard.",
    },
]

const faqs = [
    {
        q: "Do I need to be an experienced writer to contribute?",
        a: "No. We care more about whether you actually solved the problem you're writing about than about polished prose. We'll help tighten the writing during review.",
    },
    {
        q: "Do you pay for guest posts?",
        a: "Guest posts are unpaid and published under your own byline for the exposure and portfolio value. Sponsored content is a separate, paid arrangement — reach out for details.",
    },
    {
        q: "How long does review take?",
        a: "Most drafts get a first pass within a couple of days. Straightforward tutorials with working code samples move fastest.",
    },
    {
        q: "Can I republish the post elsewhere later?",
        a: "Yes. You keep the rights to your own writing — cross-posting to your own blog or company site afterward is completely fine.",
    },
]

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
                        {offerings.map(({ icon: Icon, title, body }) => (
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

            {/* Process Section */}
            <section className="relative">
                <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-muted" />
                <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
                    <h3 className="text-3xl font-semibold text-center">
                        How publishing works
                    </h3>

                    <div className="mt-12 grid gap-6 md:grid-cols-4">
                        {steps.map(({ icon: Icon, title, body }, index) => (
                            <Card key={title} className="relative overflow-visible">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                                            {index + 1}
                                        </span>
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
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

            {/* FAQ */}
            <section className="py-24">
                <div className="mx-auto max-w-3xl px-6">
                    <h3 className="text-3xl font-semibold text-center">
                        Common questions
                    </h3>

                    <div className="mt-10 space-y-3">
                        {faqs.map(({ q, a }) => (
                            <details
                                key={q}
                                className="group rounded-lg border bg-card px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                                    {q}
                                    <span className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="mt-3 text-sm text-muted-foreground">{a}</p>
                            </details>
                        ))}
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
