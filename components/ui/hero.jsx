"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './button'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
    const [scrolled, setscrolled] = useState(false)

    useEffect(() => {
      const scrollHandler = ()=>{
        const scrollTop = window.scrollY
        setscrolled(scrollTop > 50)
      }

      window.addEventListener('scroll', scrollHandler)
      return () => window.removeEventListener('scroll', scrollHandler)
    }, [])
    
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
      <div className='space-y-6 text-center'>
        <div className='space-y-6 mx-auto'>
            <h1 className='text-7xl font-semibold tracking-tight text-gradient-to-b from-gray-300 via-gray-100 to-gray-700  '>
                Your AI Professor For
                <br/>
                Professionl Success
            </h1>
            <p className='font-light'>
                Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
            </p>
        </div>
        <div className='space-x-2'>
            <Link href='/dashboard'>
               <Button size="lg" className="px-8" >Get Started</Button>
            </Link>
            <Link href='/dashboard'>
               <Button size="lg" className="px-8" variant={"outline"} >Watch Demo</Button>
            </Link>
        </div>

        <div  className='mt-20 mb-10 px-4 md:py-6 lg:py-8'>
            <div className={`zoom-on-scroll ${scrolled ? 'scrolled' : ''}`}>
                <Image
                src={"/AI.png"}
                width={570}
                height={370}
                alt="Dashboard preview"
                className=' rounded-lg shadow-2xl mx-auto'
                priority
                />
            </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
