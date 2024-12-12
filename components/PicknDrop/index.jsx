"use client"
import React from 'react'
import {
  Select, Option,
  Button,
  Radio,
} from "@material-tailwind/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownComp from './dropDown';
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
const PicknDrop = () => {
  return (
    <div className='shadow-xl my-4 p-2 rounded-md border-gray bg-blue-gray-50 w-full md:w-fit'>
    <span className='flex flex-col md:flex-row justify-center items-center gap-4'>
      <DropDownComp title={"Pick - Up"} />
      <span className='bg-darkBlue shadow-lg shadow-darkBlue md:flex w-full md:w-fit h-fit p-3 rounded-sm hidden '>
        <HiOutlineArrowNarrowUp className='text-white' size={24} />
        <HiOutlineArrowNarrowDown className='text-white' size={24} />
      </span>
      <DropDownComp title={"Drop - Off"} />
    </span>
  </div>
  )
}

export default PicknDrop