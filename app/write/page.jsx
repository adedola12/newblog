"use client"

import React, { useContext, useState } from 'react'
import { Book, BookIcon, Image, ImageIcon, PlusCircle, Video } from 'lucide-react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { useSession } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { ThemeContext } from '@/context/ThemeContext'

const WritePage = () => {

  const { theme } = useContext(ThemeContext)

    const { status } = useSession()

    console.log(`${data}data, ${status}status`)

    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
  
    const style = 'h-[36px] w-[36px] flex items-center justify-center cursor-pointer'

    if (status === 'loading') {
      return<div className='font-bold text-[36px]'>Loading...</div>
    }

    if (status === 'authenticated') {
      router.push('/')
    }



  if (status === 'loading') {
    return <div className=''>Loading...</div>
  }

  if (status === "authenticated") {
    router.push("/")
  }
  

  return (
    <div className=''>
        <input 
          type="text"
          placeholder='Title'
          className='p-[50px] text-[64px] border-none outline-none bg-transparent'
        />
    

    <div className=' mt-[30px] flex gap-[20px] h-[700px] relative'>

        <button 
          className={style}
          onClick={()=>setOpen(!open)}
        >
        <PlusCircle 
          className='h-12 w-12'
        />
        </button>

        {
          open && (<div className='flex gap-[20px] absolute z-[999] w-full left-[50px]'>
        <button className={style}>

        <ImageIcon 
          className='h-10 w-10'
        />
        </button>

        <button className={style}>
        <BookIcon
          className='h-10 w-10'
        />
        </button>

        <button className={style}>
        <Video
          className='h-10 w-10'
        />
        </button>
          </div>
        )}

        <ReactQuill 
        theme='bubble' 
        value={value} 
        onChange={setValue} 
        placeholder='Tell your story...' 
          className='w-full'
        />
        
    </div>
      
      <button
      className='absolute top-[30px] right-[20px] py-[10px] px-[10px] border-none bg-green-500 text-white rounded-[20px]'
      >
        Publish
      </button>

    </div>
  )
}

export default WritePage
