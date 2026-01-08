import React from 'react'
import { Navigate, useLocation } from 'react-router';
import { Spinner } from '../ui/spinner';

export const ProtectedRoute = ({ children, user, isLoading }) => {
    const location = useLocation();

    return (
        <>
            {isLoading && (
                <div className='flex justify-center items-center gap-1.5 text-2xl absolute top-1/2 left-1/2 -translate-1/2'>
                    <Spinner className="size-7" />
                    <span>Loading...</span>
                </div>
            )}

            {!isLoading && !user && (
                <Navigate to="/login" state={{ from: location }} replace />
            )}

            {!isLoading && user && (
                children
            )}
        </>
    )
}
