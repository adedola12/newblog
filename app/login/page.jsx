"use client"

import { ThemeContext } from '@/context/ThemeContext'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const LoginPage = () => {

    const { theme } = useContext(ThemeContext)
    const { data, status } = useSession()

    console.log(`${data}data, ${status}status`)

    const router = useRouter()

    if (status === 'loading') {
      return<div className='font-bold text-[36px]'>Loading...</div>
    }

    if (status === 'authenticated') {
      router.push('/')
    }


  return (
    <div className='flex items-center justify-center mt-[60px]'>
      <div className={`${theme === 'dark' ? 'bg-gray-300' : 'bg-[#80808080]'} px-[150px] py-[200px] flex flex-col gap-[100px] max-[640px]:gap-[50px] rounded-[10px] max-[768px]:px-[50px] max-[768px]:py-[100px] max-[640px]:p-[30px]`}>
        <div className='p-[50px] rounded-[5px] border-none text-white font-bold cursor-pointer bg-red-400 items-center justify-center max-[640px]:font-[400] max-[640px]:p-[20px]' onClick={() => signIn("google")}>
            Sign in with Google
        </div>
        <div className='p-[50px] rounded-[5px] border-none text-white font-bold cursor-pointer bg-black items-center justify-center max-[640px]:font-[400] max-[640px]:p-[20px]' onClick={() => signIn("github")}>
            Sign in with GitHub
        </div>
        <div className='p-[50px] rounded-[5px] border-none text-white font-bold cursor-pointer bg-blue-400 items-center justify-center max-[640px]:font-[400] max-[640px]:p-[20px]'>
            Sign in with Facebook
        </div>
      </div>
    </div>
  )
}

export default LoginPage
