"use client "
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
  Input,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt1 } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { SlBasket, SlMagnifier } from "react-icons/sl";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <span>
        <CiHeart />
      </span>
      <span>
        <IoIosNotifications />
      </span>
      <span>
        <IoMdSettings />
      </span>
      <Avatar
        variant="circular"
        size="md"
        alt="tania andrew"
        withBorder={true}
        color="blue-gray"
        className="rounded-full p-0.5"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
      />
    </ul>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className=" w-full px-6 py-3">
      <div className="flex items-center justify-between text-black">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer text-darkBlue fontbold py-1.5"
        >
          MORENT
        </Typography>
        <span className="hidden sm:block">
            <Input placeholder="Search ...." className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              icon={<SlMagnifier />} />
          </span>
        <div className="hidden lg:block">

          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <RxCross2 className="h-6 w-6"  />
          ) : (
            <HiMenuAlt1 className="h-6 w-6"  />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}