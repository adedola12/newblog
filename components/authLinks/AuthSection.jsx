"use client"

import { UserButton, useClerk } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

const AuthSection = () => {
    const { user } = useClerk();
  return (
    <div>
      {!user ? (
            // Login section
            <>
              <Link href="/sign-in">Login</Link>
            </>
          ) : (
            // Signout Section
            <>
              <Link href="/write">Write</Link>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
    </div>
  )
}

export default AuthSection
