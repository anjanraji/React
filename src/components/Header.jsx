import { Navigation } from './Navbar'
import { Link } from 'react-router'
import { Logo } from './Logo'

export const Header = ({
    logout,
    isAuthenticated
}) => {
    return (
        <header className='sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80'>
            <div className='flex items-center gap-4 max-w-[1200px] mx-auto px-5 py-4'>
                <Link to='/' className='brand shrink-0'>
                    <Logo />
                </Link>
                <Navigation logout={logout} isAuthenticated={isAuthenticated} />
            </div>
        </header>
    )
}
