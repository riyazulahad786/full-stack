import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { IoLogoPinterest } from "react-icons/io5";

function TopNav() {
  return (
    <div className="container-fluid w-full top_nav">
      <div className="container mx-auto flex flex-wrap justify-end items-center py-2 px-4 md:px-10 lg:px-16">
        {/* Left Section */}
       

        {/* Right Section */}
        <div className="flex items-center space-x-4 text-sm">
        <div className="text-sm ">
          <a href="https://www.registerkaro.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            www.registerkaro.in
          </a>
        </div>
          {/* Contact */}
          <div className="flex items-center">
            <IoCallOutline className="mr-2 hidden " />
            <a href="tel:+918447746183" className="hover:text-blue-500">
              +91 8447746183
            </a>
          </div>

          {/* Social Icons */}
          <ul className="flex gap-3 items-center  ">
            <li className="hover:text-blue-500 cursor-pointer">
              <FaInstagram />
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <CiFacebook />
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <CiTwitter />
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <IoLogoPinterest />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
