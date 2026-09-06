import React from 'react'
import { Link } from 'react-router'
import { Github, Twitter, Rss, ExternalLink } from 'lucide-react'
import { Logo } from './Logo'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='border-t bg-secondary/40'>
            <div className='mx-auto max-w-[1200px] px-5 py-12'>
                <div className='grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]'>
                    <div>
                        <Link to='/'>
                            <Logo iconClassName='h-8 w-8' />
                        </Link>
                        <p className='mt-4 max-w-xs text-sm text-muted-foreground'>
                            Practical, no-fluff tutorials on React, JavaScript, CSS, and
                            backend development &mdash; written by developers who ship code.
                        </p>
                        <div className='mt-5 flex gap-3'>
                            <a href='https://github.com' target='_blank' rel='noreferrer' aria-label='GitHub' className='flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground'>
                                <Github className='h-4 w-4' />
                            </a>
                            <a href='https://twitter.com' target='_blank' rel='noreferrer' aria-label='Twitter' className='flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground'>
                                <Twitter className='h-4 w-4' />
                            </a>
                            <a href='/blogs' aria-label='RSS feed' className='flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground'>
                                <Rss className='h-4 w-4' />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-sm font-semibold'>Site</h3>
                        <ul className='mt-4 space-y-2.5 text-sm text-muted-foreground'>
                            <li><Link to='/' className='transition-colors hover:text-foreground'>Home</Link></li>
                            <li><Link to='/blogs' className='transition-colors hover:text-foreground'>Blog</Link></li>
                            <li><Link to='/about-us' className='transition-colors hover:text-foreground'>About</Link></li>
                            <li><Link to='/services' className='transition-colors hover:text-foreground'>Write With Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-sm font-semibold'>Topics</h3>
                        <ul className='mt-4 space-y-2.5 text-sm text-muted-foreground'>
                            <li><Link to='/blogs' className='transition-colors hover:text-foreground'>React</Link></li>
                            <li><Link to='/blogs' className='transition-colors hover:text-foreground'>JavaScript</Link></li>
                            <li><Link to='/blogs' className='transition-colors hover:text-foreground'>CSS</Link></li>
                            <li><Link to='/blogs' className='transition-colors hover:text-foreground'>Backend</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-sm font-semibold'>Account</h3>
                        <ul className='mt-4 space-y-2.5 text-sm text-muted-foreground'>
                            <li><Link to='/login' className='transition-colors hover:text-foreground'>Login</Link></li>
                            <li><Link to='/sign-up' className='transition-colors hover:text-foreground'>Sign Up</Link></li>
                            <li><Link to='/dashboard' className='transition-colors hover:text-foreground'>Dashboard</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-sm font-semibold'>Elsewhere</h3>
                        <ul className='mt-4 space-y-2.5 text-sm text-muted-foreground'>
                            <li>
                                <a href='https://www.raji.com.np/' target='_blank' rel='noreferrer' className='inline-flex items-center gap-1 transition-colors hover:text-foreground'>
                                    Portfolio <ExternalLink className='h-3.5 w-3.5' />
                                </a>
                            </li>
                            <li>
                                <a href='https://nextjs.raji.com.np/' target='_blank' rel='noreferrer' className='inline-flex items-center gap-1 transition-colors hover:text-foreground'>
                                    Next.js Version <ExternalLink className='h-3.5 w-3.5' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-10 flex flex-col gap-2 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
                    <p>&copy; {currentYear} DevNotes. All rights reserved.</p>
                    <p>Built with React, React Router, and shadcn/ui.</p>
                </div>
            </div>
        </footer>
    )
}
