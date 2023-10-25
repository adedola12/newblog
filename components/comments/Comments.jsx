'use client';

import {ThemeContext} from '@/context/ThemeContext';
import {useClerk} from '@clerk/nextjs';
import React, {useContext} from 'react';

const Comments = () => {

  const {theme} = useContext (ThemeContext);
  const {user} = useClerk ();

  return (
    <div className='mt-[50px]'>
      <h1 className='text-gray-700 mb-[30px] text-[20px] font-bold'>
        Comments
      </h1>

      {user
        ? <div className="justify-between flex items-center gap-[30px] ">
            <textarea
              rows={3}
              type="text"
              placeholder="write a comment"
              className={`${theme === 'dark' ? 'bg-sky-600 text-white' : 'bg-white text-sky-600'} w-full p-[20px] rounded-[10px]`}
            />
            <button
              className={`${theme === 'dark' ? 'bg-sky-600 text-white' : 'bg-white text-sky-800'} rounded-[10px] w-fit px-[20px] py-[16px] font-bold border-none cursor-pointer`}
            >
              Send
            </button>
          </div>
        : <h1>
            Login to Make Comment
          </h1>}
    </div>
  );
};

export default Comments;
