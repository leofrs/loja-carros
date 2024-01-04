import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between pr-5 items-center shadow-sm border-b-[1px] ">
      <Image src="/logo.jpg" alt="logo" width={100} height={100} />
      <ul className="hidden md:flex gap-5">
        <li className="hover:bg-blue-500 p-2 rounded-full hover:text-white px-3 cursor-pointer">
          Home
        </li>
        <li className="hover:bg-blue-500 p-2 rounded-full hover:text-white px-3 cursor-pointer">
          History
        </li>
        <li className="hover:bg-blue-500 p-2 rounded-full hover:text-white px-3 cursor-pointer">
          Contact Us
        </li>
      </ul>
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
};

export default Navbar;
