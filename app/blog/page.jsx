import Menu from '@/components/Menu/Menu'
import CardList from '@/components/cardList/CardList'
import { CategoryItems } from '@/constants'
import React from 'react'

const BlogPage = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams

  return (
    <div>
      <h1 className={`${CategoryItems[0].color} text-white py-[5px] px-[10px] bg-red-400 text-center font-[600] capitalize`}>
        {cat} Blog
      </h1>
      <div>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage
