import { Navigation } from './Navbar'
import { Link } from 'react-router'
import { CodeXml } from 'lucide-react'

export const Header = ({
    logout,
    isAuthenticated
}) => {
    return (
        <header className='sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80'>
            <div className='flex items-center gap-4 max-w-[1200px] mx-auto px-5 py-4'>
                <Link to='/' className='brand flex items-center gap-2 shrink-0'>
                    <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground'>
                        <CodeXml className='h-5 w-5' />
                    </span>
                    <span className='text-lg font-bold tracking-tight'>
                        Dev<span className='text-primary'>Notes</span>
                    </span>
                </Link>
                <Navigation logout={logout} isAuthenticated={isAuthenticated} />
            </div>
        </header>
    )
}
