import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { Notfound } from './pages/Notfound'
import { Layout } from './Layout'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { BlogSingle } from './pages/BlogSingle'
import { useAuth } from './hooks/useAuth'
import { ProtectedRoute } from './components/Protected/ProtectedRoute'
import { Dashboard } from './pages/Dashboard'
import { Services } from './pages/Services'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'


export const Router = () => {
    const { user, error, login, signup, isAuthenticated, logout, isLoading } = useAuth();

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout logout={logout} isAuthenticated={isAuthenticated} />}>
                    <Route index element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/blogs/:slug" element={<BlogSingle />} />
                    <Route path="/login" element={<Login error={error} user={user} login={login} isLoading={isLoading} />} />
                    <Route path="/sign-up" element={<Signup error={error} user={user} signup={signup} isLoading={isLoading} />} />

                    <Route path="dashboard" element={
                        <ProtectedRoute user={user} isLoading={isLoading}>
                            <Dashboard user={user} isLoading={isLoading} />
                        </ProtectedRoute>
                    } />

                    <Route path="*" element={<Notfound />} />
                </Route>
            </Routes>
        </>
    )
}