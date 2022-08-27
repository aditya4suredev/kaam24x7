import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
    const session = false;
    return (
        <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#F6F4EE] p-4">
            <div className="flex items-center justify-center md:w-1/5">
                <Link href="/">
                    <div className="relative h-[50px] w-[50px]  cursor-pointer opacity-75 transition hover:opacity-100">
                        <Image
                            src="/logo.png"
                            layout='fill'
                            objectFit='contain' 
                        />         
                    </div>
                </Link>
            </div>
            <div className='hidden flex-1 items-center justify-center font-bold text-lg  space-x-8 md:flex'>
                <a href='https://www.kaam24x7.com/#services' className='headerLink'>Services</a>
                <a href='/category' className='headerLink'>Explore</a>
                <a className='headerLink'>Work</a>
            </div>
            <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
                <SearchIcon className='headerIcon' />
                <Link href='/checkout'>
                    <div className='relative cursor-pointer'>
                        <span className='absolute -right-1 -top-1 text-white  z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-[#E5A763] to-[#5E474C] text-[10px]'>5</span>
                        <ShoppingBagIcon className='headerIcon' />
                    </div>
                </Link>
                {session ? (
                    <Image src={
                        // session.user?.image ||
                        ''
                    }
                        alt=''
                        className='cursor-pointer rounded-full'
                        width={34}
                        height={34}
                    // onClick={()=> signOut()}
                    />
                ) : (
                    <UserIcon className='headerIcon'
                    // onClick={()=> signIn()}
                    />
                )}
            </div>
        </header >
    );
}

export default Header
