import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Socials = ({width, height}) => {
  return (
    <div className='flex gap-[10px] flex-1 md:gap-[5px] sm:items-start max-[820px]:hidden'>
        <Link href="/">
        <Image 
          src="/facebook.png"
          alt="Facebook"
          width={width}
          height={height}
        />
        </Link>

        <Link href="/">
        <Image 
          src="/instagram.png"
          alt="instagram"
          width={width}
          height={height}
        />
        </Link>
        <Link href="/">

        <Image 
          src="/youtube.png"
          alt="Youtube"
          width={width}
          height={height}
        />
        </Link>
        <Link href="/">

        <Image 
          src="/tiktok.png"
          alt="Tiktok"
          width={width}
          height={height}
        />
        </Link>
      </div>
  )
}

export default Socials
