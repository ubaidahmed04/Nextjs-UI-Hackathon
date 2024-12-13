import React from 'react'
import ADs2 from "@/Images/car (1).png";
import ADs1 from "@/Images/car7.png";
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className="relative bg-blue-500 text-white h-full flex items-center rounded-lg justify-center md:justify-start py-10 px-2">
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-blue-400 opacity-30 top-10 left-10" />
        <div className="absolute w-80 h-80 rounded-full bg-blue-300 opacity-30 top-32 left-32" />
        <div className="absolute w-96 h-96 rounded-full bg-blue-400 opacity-30 bottom-20 right-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col lg:flex-row justify-center items-center ">
        <div className="text-center lg:text-left">
          <h1 className="text-xl lg:text-2xl font-bold w-full">
            The Best Platform for Car Rental
          </h1>
          <p className="mt-4 text-lg w-2/3">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg text-white font-semibold">
            Rental Car
          </button>
          <div className="mt-8 lg:mt-0 lg:ml-20  relative ">
          <Image
          height={300}
          width={300}
            src={ADs1} // Replace this with the correct path to your car image
            alt="Car"
            className="max-w-full w-[400px]"
          />
        </div>
        </div>
       
      </div>
     

    </div>
  )
}

