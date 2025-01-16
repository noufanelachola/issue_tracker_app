'use client'

import React from 'react';
import Link from 'next/link';
import {IoIosBug} from "react-icons/io";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';


const NavBar = () => {

    const currentPath = usePathname();

    const links = [
        { label : "Dashboard", href : "/" },
        { label : "Issues", href : "/issues"}
    ]

    return (
        <nav className='flex space-x-6 mb-5 px-5 h-14 items-center border-b'>
            <Link href="/"><IoIosBug size={22}/></Link>
            <ul className='flex space-x-6'>
                {links.map(link => 
                    <Link 
                    key={link.href} 
                    // className='text-zinc-500 hover:text-zinc-800 transition-colors' 
                    className={classnames({
                            "text-zinc-900" : currentPath === link.href,
                            "text-zinc-500" : currentPath !== link.href,
                            "hover:text-zinc-800 transition-colors" : true
                        })}
                        href={link.href}>{link.label}
                    </Link>
                )}
            </ul>
        </nav>
    )
}

export default NavBar