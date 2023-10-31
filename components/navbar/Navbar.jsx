"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
import AuthSection from '../authLinks/AuthSection'
import Socials from '../socials/Socials'

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update the window width when the component mounts
    setWindowWidth(window.innerWidth);

    // Add an event listener to update the window width when it changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex items-center justify-between h-[100px]'>
      <Socials 
        width={24}
        height={24}
      />
      <div className='flex-1 items-center 2xl:text-[36px] font-bold md:text-[32px] sm:text-[20px]'>
      Logo
      </div>
      <div className='flex 2xl:gap-[20px] max-[820px]:gap-[10px] flex-1 2xl:text-[20px] max-[450px]:text-[15px] items-center md:gap-[15px]  '>
      <ThemeToggle />
        <Link href="/" className='max-[640px]:hidden'>Homepage</Link>
        <Link href="/" className='max-[640px]:hidden'>Contact</Link>
        <Link href="/" className='max-[640px]:hidden'>About</Link>
        {/* {window.innerWidth <= 640 ? <AuthLinks /> : <AuthSection />} */}
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
