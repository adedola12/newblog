'use client'

import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const EditorCard = () => {

    const today = new Date ();
    const day = today.getDate ();
    const month = today.getMonth () + 1;
    const year = today.getFullYear ();
  
    const formattedDate = `${day}.${month}.${year}`;
  

    const { theme } = useContext(ThemeContext)
  return (
    <div className="flex items-center gap-[10px]">

          <div className='flex-1 relative rounded-[50%] aspect-square'>
            <Image 
            src="/p1.jpeg" 
            alt="" 
            fill 
            className='object-cover rounded-[50%] border-[3px] border-gray-500'
            />
          </div>

          <div className='flex-[4] flex flex-col gap-[5px]'>
            <div className="py-[20px]">
            <Link href='/'>
              <h1 className={`text-[20px] font-[500]`}>
                Lorem ipsum dolor sit amet
              </h1>
            </Link>

            <div className="gap-[5px]">
              <span
                className={`${theme === 'black' ? 'text-gray-200' : 'text-gray-300'} text-[12px] pr-[5px]`}
              >
                {formattedDate}
              </span>
              <span
                className={`${theme === 'black' ? 'text-red-500' : 'text-red-400'} font-[500] text-[12px]`}
              >
                Author
              </span>
            </div>
            
            </div>
          </div>
          </div>
  )
}

export default EditorCard
