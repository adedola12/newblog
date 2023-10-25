import React from 'react';
import PopularCard from '../popular/PopularCard';
import {CategoryItems} from '@/constants';
import Link from 'next/link';
import EditorCard from '../editor/EditorCard';

const Menu = () => {
  return (
    <div className="flex-[2] mt-[60px] max-[1024px]:hidden">
      <div>
        <p className="text-[16px] text-gray-500  font-[400]">Whats' hot</p>
        <h1 className="font-[600] mb-[30px] text-[20px]">Most Popular</h1>
        <PopularCard 
          index={0}
        />
        <PopularCard 
          index={1}
        />
        <PopularCard 
          index={2}
        />
      </div>

        <div className='py-[30px]'>
          <p className="text-[15px] text-gray-500 ">Discover by topic</p>
          <h1 className="font-[600] mb-[30px] text-[20px]">Categories</h1>

          <div className="flex flex-wrap justify-between gap-[20px] ">
            {CategoryItems.map ((category, index) => (
              <Link
                href={`/blog?cat=${category.name}`}
                className={` bg-blue-300 rounded-[10px] max-w-fit p-[5px] text-gray-500`}
                key={index}
              >
                {category.name}
              </Link>
            ))}
          </div>

        
        <div className='py-[30px]'>
        <p className="text-[15px] text-gray-500 ">Choose by the editor</p>
        <h1 className="font-[600] mb-[30px] text-[20px]">Editors Pick</h1>
          <EditorCard />
          <EditorCard />
          <EditorCard />
        </div>
      </div>
    </div>
  );
};

export default Menu;
