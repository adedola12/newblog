import { CategoryItems } from '@/constants'
import Link from 'next/link'
import React from 'react'

const PopularCard = ({index}) => {
  return (
    <div className='gap-[35px] flex-col flex items-center '>
    <Link
      href="/"
    >
      <p className={`rounded-[10px] ${CategoryItems[index].color} max-w-fit py-[3px] text-white capitalize`}>
  {CategoryItems[index].name} 
</p>

   

      <h2 className='pt-[10px] font-[500] text-gray-500 text-[18px]'>Lorem ipsum dolor sit amnet consecteur adiplscing edilt</h2>

      <div className='flex'>
        <p className='pr-[5px] text-[15px]'>author</p>
        <span className='text-[15px] text-gray-500'>date</span>
      </div>
    </Link>
    </div>
  )
}

export default PopularCard
