import Image from "next/image";
import React from "react";
import about from "../assets/about.png";
import { FaArrowCircleRight } from "react-icons/fa";
import backgroundimage1 from "../assets/Vector.png";
import dots from "../assets/dots.png";
function About() {
  return (
    <div className="container mx-auto py-4 px-4 relative">
      <Image 
        src={backgroundimage1}
        alt="Background"
        className="absolute inset-y-0  right-0 w-auto h-full object-cover z-0"
        priority
      />
      <Image 
        src={dots}
        alt="Background"
        className="absolute bottom-0 right-0 w-auto h-auto object-contain z-0 lg:block hidden"
        priority
      />
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-6 z-10 relative">
        {/* Left Column */}
        <div className="text-center md:text-left flex-1">
          <p className="text-lg font-semibold">Welcome to</p>
          <h2 className="text-xl md:text-2xl font-bold">
            About <span className="text-[#FFA229]">Register karo</span>
          </h2>
          <p className="p-2 text-gray-700">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years, and I’m
            extremely pleased with their performance, ability to execute, and
            willingness to adapt in our ever-changing environment.
          </p>
          <p className="p-2 text-gray-700">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
          <div className="py-3">
            <button className="px-3 flex items-center w-[150px] py-3 learn_more">
              Learn More{" "}
              <span className="mx-2">
                <FaArrowCircleRight />
              </span>
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center flex-1">
          <Image src={about} alt="About Us" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
