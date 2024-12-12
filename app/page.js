"use client"
import { HeroSection, ProductCard } from "@/components";
import Image from "next/image";
import Product1 from "@/Images/car (1).png";
import Product2 from "@/Images/Car (2).png";
import Product3 from "@/Images/Car (3).png";
import Product4 from "@/Images/Car (4).png";
import Product5 from "@/Images/Car (5).png";
import Product6 from "@/Images/Car (6).png";
import Product7 from "@/Images/Car (7).png";
import Product8 from "@/Images/Car (8).png";
import Product9 from "@/Images/Car (9).png";
import Product10 from "@/Images/Car (10).png";
import Product11 from "@/Images/Car (11).png";
import CarRentalHero from "@/components/Herosection/HeroCard2";
export default function Home() {
  return (
    <>
      <span className="py-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <HeroSection />
        <CarRentalHero />
      </span>
      <span className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard url={Product1} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product2} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product3} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product4} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product5} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product6} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product7} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product8} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product9} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product10} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product11} title='product 1' price1={1200} price2={1500} />
        <ProductCard url={Product11} title='product 1' price1={1200} price2={1500} />
      </span>
      <span className="w-full flex justify-center py-4">
        <button className="mt-6 px-6 py-3 bg-darkBlue  hover:bg-blue-800 rounded-lg text-white font-semibold">
          Show more car
        </button>
      </span>
    </>
  );
}
