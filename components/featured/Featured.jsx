"use client"

import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image'
import React, { useContext } from 'react'

const Featured = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='mt-[30px]'>
      <h1 className='text-[96px] font-[300] max-[1280px]:text-[72px] max-[1024px]:text-[64px] max-[768px]:text-[48px] max-[640px]:text-[36px]'>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className='mt-[60px] flex items-center gap-[50px]'>
        <div className='flex-1 h-[500px] relative max-[1024px]:hidden'>
          <Image 
            src='/p1.jpeg'
            alt=''
            fill
            className='object-cover'
          />
        </div>
        <div className='flex-1 flex flex-col gap-[20px]'>
          <h1 className='text-[40px]'>
            Lorem ipsum dolor sit amet, con
          </h1>
          <p className={`text-[20px] font-[300] ${theme === 'black' ? 'text-gray-300' : 'text-sky-70'}`}>
            Lorem ipsum dolor sit amet, consetetur adipiscing elit
          </p>
          <button className={`pt-[16px] pb-[16px] pl-[20px] pr-[20px] rounded-[5px] border-none w-max ${theme === 'black' ? 'bg-sky-800 text-white' : 'bg-white text-black'}`}>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
