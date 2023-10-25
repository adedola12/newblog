"use client"

import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image'
import Link from 'next/link';
import React, { useContext } from 'react'

const Card = () => {

    const {theme} = useContext (ThemeContext);

  const today = new Date ();
  const day = today.getDate ();
  const month = today.getMonth () + 1;
  const year = today.getFullYear ();

  const formattedDate = `${day}.${month}.${year}`;


  return (
       <div className="flex mb-[50px] items-center gap-[50px]">

          <div className="flex-1 h-[350px] relative max-[1024px]:hidden">

            <Image 
            src="/p1.jpeg" 
            alt="" 
            fill 
            className='object-cover'
            />
          </div>

          <div className='flex-1 flex flex-col gap-[10px]'>

            <div className="gap-[10px]">
              <span
                className={`${theme === 'black' ? 'text-gray-200' : 'text-gray-400'} pr-[5px]`}
              >
                {formattedDate}
              </span>
              <span
                className={`${theme === 'black' ? 'text-red-500' : 'text-red-400'} font-[500]`}
              >
                Cat
              </span>
            </div>

            <div className="py-[10px]">

            <Link href='/'>
              <h1 className={`text-[30px] font-[600]`}>
                Lorem ipsum dolor sit amet
              </h1>
            </Link>

              <p className= {`text-[18px] font-[300] ${theme === 'black' ? 'text-gray-600' : 'text-gray-300'}`}>
                Lorem ipsum dolor sti amit
              </p>

              <Link href="/blog" className='border-b-[1px] border-red-400 w-max p-[2px]'>
                Read More
              </Link>
            </div>
          </div>
          </div>
        
  )
}

export default Card
