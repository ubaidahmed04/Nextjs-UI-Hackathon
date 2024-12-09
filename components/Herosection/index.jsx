import React from 'react'
import ADs1 from "@/Images/Ads 1.png";
import ADs2 from "@/Images/Ads 2.png";
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className='grid grid-cols-1 py-5 px-4 gap-4 md:grid-cols-2 '>
      <span>
      <Image
          height={400}
          width={320}
          src={ADs1}
          alt="ui/ux review check"
          className="h-72 w-full object-contain"
        />
      </span>
      <span className='hidden md:block'>
      <Image
          height={200}
          width={220}
          src={ADs2}
          alt="ui/ux review check"
          className="h-72 w-full object-contain"
        />
      </span>


    </div>
  )
}

