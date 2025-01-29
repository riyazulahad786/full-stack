import React from "react";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

function Blog() {
  return (
    <div className="container mx-auto py-3">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[#EB8D15]">EXPLORE OUR BLOGS</h2>
        <h1 className="lg:text-3xl font-bold">
          Accelerate Digital Transformation
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
        <div className="bg-white shadow-md rounded-lg p-4">
          <Image src={blog1} alt="Blog 1" />
          <div className="flex justify-between items-center mt-2">
            <p>Mahesh Kumar</p>
            <p>1 Jan 2023</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h2 className="font-bold">Small business and startups</h2>
            <span>
              <RiArrowRightUpLine />
            </span>
          </div>
          <div className="py-1">
            <p>
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
          </div>
          <div className="flex gap-3 py-2">
            <button className="rounded-lg text-[#6941C6] inline-flex items-center  bg-gray-50 px-2 py-1 text-xs font-medium  ring-1 ring-gray-500/10 ring-inset ">
              Tax & audit
            </button>
            <button className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
              Management
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Image src={blog2} alt="Blog 1" />
          <div className="flex justify-between items-center mt-2">
            <p>Mahesh Kumar</p>
            <p>1 Jan 2023</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h2 className="font-bold">Small business and startups</h2>
            <span>
              <RiArrowRightUpLine />
            </span>
          </div>
          <div className="py-1">
            <p>
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
          </div>
          <div className="flex gap-3 py-2">
            <button className="rounded-lg text-[#6941C6] inline-flex items-center  bg-gray-50 px-2 py-1 text-xs font-medium  ring-1 ring-gray-500/10 ring-inset ">
              Tax & audit
            </button>
            <button className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
              Management
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Image src={blog3} alt="Blog 1" />
          <div className="flex justify-between items-center mt-2">
            <p>Mahesh Kumar</p>
            <p>1 Jan 2023</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h2 className="font-bold">Small business and startups</h2>
            <span>
              <RiArrowRightUpLine />
            </span>
          </div>
          <div className="py-1">
            <p>
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
          </div>
          <div className="flex gap-3 py-2">
            <button className="rounded-lg text-[#6941C6] inline-flex items-center  bg-gray-50 px-2 py-1 text-xs font-medium  ring-1 ring-gray-500/10 ring-inset ">
              Tax & audit
            </button>
            <button className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
              Management
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
        <div className="bg-white shadow-md rounded-lg p-4">
          <Image src={blog1} alt="Blog 1" />
          <div className="flex justify-between items-center mt-2">
            <p>Mahesh Kumar</p>
            <p>1 Jan 2023</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h2 className="font-bold">Small business and startups</h2>
            <span>
              <RiArrowRightUpLine />
            </span>
          </div>
          <div className="py-1">
            <p>
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
          </div>
          <div className="flex gap-3 py-2">
            <button className="rounded-lg text-[#6941C6] inline-flex items-center  bg-gray-50 px-2 py-1 text-xs font-medium  ring-1 ring-gray-500/10 ring-inset ">
              Tax & audit
            </button>
            <button className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
              Management
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Image src={blog2} alt="Blog 1" />
          <div className="flex justify-between items-center mt-2">
            <p>Mahesh Kumar</p>
            <p>1 Jan 2023</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h2 className="font-bold">Small business and startups</h2>
            <span>
              <RiArrowRightUpLine />
            </span>
          </div>
          <div className="py-1">
            <p>
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
          </div>
          <div className="flex gap-3 py-2">
            <button className="rounded-lg text-[#6941C6] inline-flex items-center  bg-gray-50 px-2 py-1 text-xs font-medium  ring-1 ring-gray-500/10 ring-inset ">
              Tax & audit
            </button>
            <button className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
              Management
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Image src={blog3} alt="Blog 1" />
          <div className="flex justify-between items-center mt-2">
            <p>Mahesh Kumar</p>
            <p>1 Jan 2023</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h2 className="font-bold">Small business and startups</h2>
            <span>
              <RiArrowRightUpLine />
            </span>
          </div>
          <div className="py-1">
            <p>
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
          </div>
          <div className="flex gap-3 py-2">
            <button className="rounded-lg text-[#6941C6] inline-flex items-center  bg-gray-50 px-2 py-1 text-xs font-medium  ring-1 ring-gray-500/10 ring-inset ">
              Tax & audit
            </button>
            <button className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
              Management
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-3 items-center justify-center cursor-pointer">
        <div className="flex learn_more px-3 max-w-[300px] py-3 items-center ">
          <span className="">Show More Images</span>{" "}
          <span className="mx-2">
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
