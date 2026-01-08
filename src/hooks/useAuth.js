import React, { useEffect, useState } from 'react'
import { useApi } from './useApi'

export const useAuth = () => {
    const api = useApi()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const loginUser = localStorage.getItem('user')
        const parsedUser = JSON.parse(loginUser)
        setUser(parsedUser && parsedUser !== 'null' ? parsedUser : null)
        setIsLoading(false)
    }, [])

    const login = async (email, password) => {
        setIsLoading(true)
        setError('')

        try {
            if (!email || !password) {
                setError('All fields are required')
                return
            }

            const response = await api.auth.login(email, password)
            const { data, status, ok, message } = response

            if (!ok || !data) {
                setError(message || (status === 401 ? "Invalid email or password" : "Can't proceed to login"))
                return
            }

            const { token, user: loginUser } = data

            if (!token || !loginUser) {
                setError("Invalid server response")
                return
            }

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(loginUser))
            setUser(loginUser)
            return loginUser

        } catch (err) {
            console.error(err)
            setError("Cann't proceed to login")

        } finally {
            setIsLoading(false)
        }
    }

    const signup = async (name, email, password) => {
        setIsLoading(true)
        setError('')

        try {
            if (!name || !email || !password) {
                setError("All fields are required")
                return
            }

            const response = await api.auth.signup(name, email, password)
            const { data, ok, message } = response

            if (!ok || !data) {
                setError(message || "Unable to create your account")
                return
            }

            const { token, user: signupUser } = data

            if (!token || !signupUser) {
                setError("Invalid server response")
                return
            }

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(signupUser))

            setUser(signupUser)

            return signupUser

        } catch (err) {
            setError(err || "Unable to create your account")

        } finally {
            setIsLoading(false)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    const normalizedUser = user && user !== 'null' ? user : null
    const isAuthenticated = !!normalizedUser

    return { user: normalizedUser, error, login, signup, logout, isAuthenticated, isLoading }
}