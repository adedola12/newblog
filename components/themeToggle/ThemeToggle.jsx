"use client"

import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import React, { useContext } from 'react';

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-[40px] h-[20px] rounded-[50px] cursor-pointer flex items-center justify-between ${theme === 'dark' ? 'bg-sky-800' : 'bg-white'} relative`}
      onClick={toggle}
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={`w-[15px]  h-[15px] rounded-[50%] absolute left-[1px] ${
          theme === 'dark' ? 'left-[25px] bg-sky-950' : 'bg-white'
        }`}
      />
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;
