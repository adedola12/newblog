import Image from 'next/image'
import React from 'react'

const CommentCard = () => {
  return (
    <div className='my-[50px]'>
      <div className='flex items-center gap-[20px] mb-[20px]'>
        <div className='relative gap-[10px]'>
            <Image 
                src='/p1.jpeg'
                alt=''
                width={50}
                height={50}
                className='object-cover rounded-[50%]'
            />
        </div>

        <div className='flex flex-col gap-[5px] text-gray-800'>
        <span className='font-[500]'>Author Name</span>
        <span className='text-[14px]'>Date</span>
        </div>
      </div>

      <p className='font-[300] text-[18px]'>
        Et occaecat amet veniam amet proident aute.
      </p>
    </div>
  )
}

export default CommentCard
