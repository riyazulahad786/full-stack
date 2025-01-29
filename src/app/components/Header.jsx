"use client"
import React, { useState } from 'react';
import logo from '../assets/logo_logo 1.png';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="border-b px-4 ">
      <div className="container mx-auto flex justify-between items-center py-2 lg:px-5">
        {/* Logo */}
        <div>
          <Image src={logo} alt="Logo" className="py-3 w-32 lg:w-40" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center ">
          <ul className="flex items-center gap-8 mb-0 pb-0 ">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            {/* Dropdown Menu */}
            <li
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <a href="#" className="hover:text-blue-500 flex items-center">
                Our Service
                <span className="mx-1"><RxCaretDown size={25} /></span>
              </a>
              {/* Dropdown Items */}
              <div
                className={`absolute z-1000 top-full left-0 w-40 bg-white shadow-lg rounded-lg mt-2 transform transition-all duration-300 ease-in-out ${
                  dropdownOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                }`}
              >
                <ul className="flex flex-col p-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 1</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 2</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 3</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <div>
              <CiSearch size={27} className="hover:text-blue-500 cursor-pointer" />
            </div>
            <div>
              <button className="px-4 py-2 ctn text-white  lg:mx-5">
                Talk An Expert
              </button>
            </div>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          {mobileMenuOpen ? (
            <IoMdClose size={30} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer" />
          ) : (
            <IoMenu size={30} onClick={() => setMobileMenuOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <ul className="flex flex-col items-start gap-4 p-4">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li>
              <div className="flex items-center">
                <a href="#" className="hover:text-blue-500">Our Service</a>
                <span className="mx-1"><RxCaretDown size={20} /></span>
              </div>
              {/* Mobile Dropdown */}
              {dropdownOpen && (
                <ul className="flex flex-col pl-6 gap-2 mt-2">
                  <li><a href="#" className="hover:text-blue-500">Service 1</a></li>
                  <li><a href="#" className="hover:text-blue-500">Service 2</a></li>
                  <li><a href="#" className="hover:text-blue-500">Service 3</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <div>
              <CiSearch size={27} className="hover:text-blue-500 cursor-pointer" />
            </div>
            <div>
              <button className="px-4 py-2 ctn text-white ">
                Talk An Expert
              </button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;

