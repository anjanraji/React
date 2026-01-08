import { Navigation } from './Navbar'
import { Link } from 'react-router'

export const Header = ({
    logout,
    isAuthenticated
}) => {
    return (
        <header className='p-5 bg-gray-200'>
            <div className='flex align-middle max-w-[1200px] mx-auto'>
                <div className="brand">
                    <Link to='/'><img className="w-[200px] height-auto" src='/logo.svg' alt="lorem logo" /></Link>
                </div>
                <Navigation logout={logout} isAuthenticated={isAuthenticated} />
            </div>
        </header>
    )
}