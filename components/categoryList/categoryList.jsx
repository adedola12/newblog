import { CategoryItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  //styles
  const categoryStyle = 'flex items-center gap-[10px] capitalize w-[15%] h-[80px] justify-center rounded-[10px] max-[1280px]:w-[20%] max-[1024px]:w-[25%] max-[768px]:w-[45%] max-[640px]:w-[100%]'
  const categoryImageStyle = 'rounded-[50%] '
  

  return (
    <div className=''>
      <h1 className='my-[50px]'>Popular Categories</h1>
      <div className='flex flex-wrap justify-between gap-[20px] '>
      {CategoryItems.map((category, index) => (
  <Link href={`/blog?cat=${category.name}`} className={`${categoryStyle} bg-blue-300`} key={index}>
    <Image
      src={category.img}
      alt=''
      width={32}
      height={32}
      className={`${categoryImageStyle}`}
    />
    {category.name}
  </Link>
))}
      </div>
    </div>
  )
}

export default CategoryList
