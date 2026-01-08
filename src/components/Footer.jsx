import React from 'react'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='bg-primary text-primary-foreground font-medium p-5 text-center'>
            <div className="mx-auto max-w-[1200px]">
                <p>Copyright ©{currentYear} Test React. All Rights Reserved.</p>
            </div>
        </footer>
    )
}