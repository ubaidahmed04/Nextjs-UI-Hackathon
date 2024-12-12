import Image from "next/image";
import ADs2 from "@/Images/Car (1).png";

export default function CarRentalHero() {
    return (
      <div className="relative bg-blue-500 text-white h-full rounded-lg overflow-hidden flex items-center justify-center">
        {/* Chevron Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-chevron-pattern w-full h-full opacity-20"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col lg:flex-row justify-center items-center ">
          <div className="text-center lg:text-left">
            <h1 className="text-xl lg:text-2xl font-bold w-full">
              Easy way to rent a car at a low price
            </h1>
            <p className="mt-4 text-lg">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg text-white font-semibold">
              Rental Car
            </button>
            <div className="mt-8 lg:mt-0 lg:ml-12 relative">
          <Image
          height={300}
          width={300}
            src={ADs2} 
            alt="Car"
            className="max-w-full w-[400px]"
          />
          </div>
          </div>
         
        </div>
      </div>
    );
  }
  