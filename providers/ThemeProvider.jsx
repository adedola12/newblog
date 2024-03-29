"use client"

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext, useEffect, useState } from 'react';

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
      return (
        <div className={theme === 'dark' ? 'bg-white text-sky-800' : 'bg-sky-800 text-white'}>
          {children}
        </div>
      );
  }
}

export default ThemeProvider;
