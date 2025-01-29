"use client";
import React from "react";
import Image from "next/image";
import backgroundimage from "../assets/Section.png";
import { LiaYoutube } from "react-icons/lia";
import star1 from "../assets/hero/Img.png";
import star2 from "../assets/hero/star.png";
import image1 from "../assets/hero/image1.png";
import image2 from "../assets/hero/image2.png";
import image3 from "../assets/hero/image3.png";
import hand from "../assets/hero/SVG.png";
import { LuLayoutDashboard } from "react-icons/lu";

function Hero() {
  return (
    <div className="container-fluid mx-auto relative w-full h-screen flex py-4">
      {/* Background Image */}
      <Image
        src={backgroundimage}
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="absolute inset-0 -z-10"
      />

      {/* Content Container */}
      <div className="container lg:ml-12 flex flex-col py-5 max-w-2xl justify-start px-4">
        <div className="absolute top-5 flex items-center  gap-3">
          <div>
            <Image src={star2} />
          </div>
          <p>Google ratings</p>
          <div>
            <Image src={star1} />
          </div>
        </div>
        <div className="lg:py-5">
          <h1 className="lg:text-4xl font-bold mb-2 mt-5">
            Your trusted partner
          </h1>
          <h1 className="lg:text-4xl font-bold ">
            for compliance business needs
          </h1>
          <div className="border-t-2 border-red-400 w-[42px] mt-2"></div> 
        </div>
        <p className="text-lg mb-6">
          An online business compliance platform that helps entrepreneurs and
          other individuals with various registrations, tax filings, and other
          legal matters.
        </p>

        <div>
          <div className="flex gap-3">
            <div>
              <LuLayoutDashboard size={30} />
            </div>
            <div className="mx-1">
              <Image src={image1} />
              <p>customer Rating</p>
            </div>
            <div className="sm:hidden">
              <Image src={hand} />
            </div>
            <div className="mx-2 ">
              <Image src={image2} />
              <p>clients</p>
            </div>
            <div>
              <Image src={hand} />
            </div>
            <div className="mx-2">
              <Image src={image3} />
              <p>Financial Stability</p>
            </div>
          </div>
        </div>

        {/* Button Container */}
        <div className="flex gap-4 mt-4">
          <button className="learn_more hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
            Talk to an Expert
          </button>
          <button className="bg-white border border-blue-600 font-semibold py-2 px-1 rounded-lg shadow-md flex items-center">
            <LiaYoutube size={30} className="mr-2 p-2" />{" "}
         
            <span>See how it works</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
