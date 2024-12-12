
import React from 'react';
import { Select, Option, Button, Radio, Input } from "@material-tailwind/react";

const DropDownComp = ({ title }) => {
  return (
    <div className='flex flex-col w-full p-4'>
      <span className='flex flex-wrap items-center gap-2'>
        <Radio name="color" color="blue" />
        <span className='text-black flex justify-start w-full sm:w-auto sm:ml-4 mt-2 sm:mt-0'>
          {title}
        </span>
      </span>

      <span className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
        <span>
          <span className='w-full text-black flex justify-start mb-2'>Locations</span>
          <span className='w-full'>
            <Input color="blue" type='select' label="Input Blue" />
          </span>
        </span>

        <span>
          <span className='w-full text-black flex justify-start mb-2'>Date</span>
          <span className='w-full bg-blue-gray-300'>
          <Input color="blue" type='select' label="Input Blue" />
          </span>
        </span>

        {/* <span>
          <span className='w-full text-black flex justify-start mb-2'>Time</span>
          <span className='w-full'>
          <Input color="blue" type='select' label="Input Blue" />
          </span>
        </span> */}
      </span>
    </div>
  );
};

export default DropDownComp;
