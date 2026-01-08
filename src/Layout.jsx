import React from 'react'
import { Outlet } from "react-router";
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const Layout = ({
    logout,
    isAuthenticated
}) => {
    return (
        <div id="wrapper" className='min-h-screen flex flex-col'>
            <Header
                logout={logout}
                isAuthenticated={isAuthenticated}
            />
            <main className="main flex-1 flex flex-col w-full py-20 px-5 relative" id="main">
                <div className='m-auto w-full max-w-[1200px]'>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}