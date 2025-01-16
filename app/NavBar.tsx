import React from 'react'
import Link from 'next/link'

const NavBar = () => {

    const links = [
        { label : "Home", href : "/" },
        { label : "Issues", href : "/issues"}
    ]

    return (
        <nav className='flex space-x-6 mb-5 px-5 h-14 items-center border-b'>
            <Link href="/">Image</Link>
            <ul className='flex space-x-6'>
                {links.map(link => 
                    <Link 
                        key={link.href} 
                        className='text-zinc-500 hover:text-zinc-800 transition-colors' 
                        href={link.href}>{link.label}
                    </Link>
                )}
            </ul>
        </nav>
    )
}

export default NavBar