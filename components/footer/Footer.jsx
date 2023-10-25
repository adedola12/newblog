"use client"

import Image from 'next/image'
import React, { useContext } from 'react'
import Socials from '../socials/Socials'
import Link from 'next/link'
import { ThemeContext } from '@/context/ThemeContext'

const Footer = () => {

  const{ theme } = useContext(ThemeContext)

  return (
    <div className={`flex mt-[50px] justify-between ${theme === 'black' ? 'text-gray-900' : 'text-gray-300'} py-[20px] items-center max-[768px]:flex-col max-[768px]:gap-[50px]`}>
      <div className='flex-1 flex flex-col gap-[14px]'>
      <div className='flex gap-[10px] items-center'>
        <Image 
          src='/logo.png'
          alt=''
          width={50}
          height={50}
          className='object-cover rounded-[50%] border-[3px] border-gray-500'
        />
        <h1>Logo</h1>
      </div>
      
      <p className='py-[10px] font-[300]'>
        Lorem import Text
      </p>

      <Socials 
        width={20}
        height={20}
      />
      </div>

      <div className='flex-1 flex justify-end gap-[100px] max-[1024px]:gap-[50px]  max-[768px]:w-full max-[768px]:justify-between max-[640px]:font-[14px]'>

      <div className='flex flex-col gap-[10px] font-[300]'>
        <span className='font-[600]'>Links</span>
        <Link href='/'>Homepage</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
      </div>

      <div className='flex flex-col gap-[10px] font-[300] max-[768px]:w-full max-[768px]:justify-between max-[640px]:font-[14px]'>
        <span className='font-[600]'>Links</span>
        <Link href='/'>Homepage</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
      </div>

      <div className='flex flex-col gap-[10px] font-[300] max-[768px]:w-full max-[768px]:justify-between max-[640px]:font-[14px]'>
        <span className='font-[600]'>Links</span>
        <Link href='/'>Homepage</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default Footer
