import React from 'react'
import { cn } from '@/lib/utils'

// The DevNotes mark: a code chevron pair "< >" around a short dash, read as
// "a line of code" — with a small folded-corner accent nodding to "notes".
// Drawn as raw paths (not a lucide icon) so it's ownable by this project and
// can be reused 1:1 as the static favicon in public/favicon.svg.
export function LogoMark({ className }) {
    return (
        <span
            className={cn(
                'relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary text-primary-foreground',
                className
            )}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-[58%] w-[58%]"
                aria-hidden="true"
            >
                <path
                    d="M9 6 4 12l5 6M15 6l5 6-5 6M10.5 12h3"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span
                className="absolute top-0 right-0 h-2.5 w-2.5 rounded-tr-lg rounded-bl-md bg-primary-foreground/25"
                aria-hidden="true"
            />
        </span>
    )
}

export function Logo({ className, iconClassName, textClassName }) {
    return (
        <span className={cn('flex items-center gap-2', className)}>
            <LogoMark className={iconClassName} />
            <span className={cn('text-lg font-bold tracking-tight', textClassName)}>
                Dev<span className="text-primary">Notes</span>
            </span>
        </span>
    )
}
