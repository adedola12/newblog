import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between'>
      <button className='w-[100px] border-none p-[16px] bg-red-500 text-white cursor-pointer rounded-[10px]'>Previous</button>
      <button className='w-[100px] border-none p-[16px] bg-red-500 text-white cursor-pointer rounded-[10px]'>Next</button>
      
    </div>
  )
}

export default Pagination
