import React from 'react'
import { SignUpCard } from '../components/SignUpCard'

export const Signup = ({ user, error, signup, isLoading }) => {
    return (
        <>
            <SignUpCard
                error={error}
                user={user}
                signup={signup}
                isLoading={isLoading}
            />
        </>
    )
}
