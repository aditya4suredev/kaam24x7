import Image from 'next/image';
import React from 'react'
import Button from './Button';

function Landing() {
    return (
        <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
           
            <div className='space-y-8'>
                <h1 className='space-y-3 font-coffee text-7xl font-semibold tracking-wide lg:-mt-20 xl:text-7xl'>
                    <span className='font-bold bg-gradient-to-r from-[#5E464D] to-[#33272B]  bg-clip-text text-transparent'>Serving</span>
                    <span className='block'>Every Household</span>
                    <span className='block  font-darkage text-sm'>Not Just Urban!</span>
                </h1>
                <div className='space-x-8'>
                    <Button title='Get Started' />
                    <a href='/category' className='link'>Explore</a>
                </div>
            </div>

            <div className='relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]'>
                <Image src='/okfinal.gif' layout='fill' objectFit='contain' />
            </div>
        </section>
    );
}

export default Landing;
