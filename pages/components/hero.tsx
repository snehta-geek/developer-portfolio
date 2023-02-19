import { urlFor } from '@/sanity';
import { PageInfo } from '@/typings';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from './backgroundCircle';

type Props = {
    pageInfo: PageInfo;
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi,I'm ${pageInfo.name}`,
            "who loves to do coding",
            "Welcome to the Portfolio Site",              
            "Enjoy the experience"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
            <BackgroundCircle />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={urlFor(pageInfo?.profilePic).url()}
                alt="pic" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
                   {pageInfo?.role}
                    </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='yellow' />
                </h1>

                <div className='pt-5'>
                    <Link href='#about'>
                    <button className='hero-btn'>About</button>
                    </Link>
                    <Link href='#experience'>
                    <button className='hero-btn'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                    <button className='hero-btn'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                    <button className='hero-btn'>Projects</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero