"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
  Button
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ProductCard({ url, title, price1, price2,  }) {
  return (

    <Card className="min-w-full max-w-[14rem] shadow-lg">

      <Link href={'/products'}>
    <div className="px-4">
      <span className="flex items-center justify-between ">
        <span className="text-black font-bold">Nisssan GT</span>
        <IoIosHeartEmpty className="text-gray " size={20}/>
      </span>
        <p className="text-gray font-semibold"> Sport</p>
    </div>
      <CardHeader floated={false} shadow={false} className="group relative">
        <Image
          height={200}
          width={220}
          src={url}
          alt="ui/ux review check"
          className="h-36 w-full object-contain"
        />
        <div className="blur  h-2 relative bottom-8 w-full bg-blue-gray-800 opacity-30"></div>
      </CardHeader>
      </Link>

      <CardBody>
        <div className=" ">
          <span className="flex gap-2 justify-between">
          <span className="flex gap-1 items-center text-gray">
            <BsFuelPumpDiesel />  <span className="text-sm"> 90L</span>
          </span>
          <span className="flex gap-1 items-center text-gray">
            <IoCarSport />  <span className="text-sm"> Manual</span>
          </span>
          <span className="flex gap-1 items-center text-gray">
            <MdPeopleAlt />  <span className="text-sm"> 2People</span>
          </span>

          </span>
        </div>
        <div className="mb-3 flex  justify-between items-center pt-10 ">
          <span>
          <Typography variant="h5" color="blue-gray" className="font-medium myfont">
            ${price1} /<span className="text-gray text-sm"> day</span>
          </Typography>
          <Typography variant="h5" color="blue-gray" className="text-sm text-gray myfont">
            ${price2}
          </Typography>
          </span>
          <span>
          <Button variant="gradient" className="bg-darkBlue text-white">Rent Now</Button>
          </span>
          
        </div>

        

        {/* <Typography
          color="blue-gray"
          className="flex items-center gap-1.5 myfont"
        >
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          (35)
        </Typography> */}
      </CardBody>
    </Card>
  );
}
