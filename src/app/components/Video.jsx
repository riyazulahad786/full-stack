"use client";
import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

function Video() {
  return (
    <div className="bg-gray-100 py-10 video_section">
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Our Video Introductions
            </h1>
            <p className="leading-relaxed">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>

            <div className="flex gap-3 py-2">
              <div ><IoBulbOutline size={40} className="video_icons rounded-full p-2"/></div>
              <div>
                <h1 className="text-2xl font-medium py-2">Explore ideas together</h1>
                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
              </div>
            </div>
            <div className="flex gap-3 ">
            <div ><FaCheck size={40} className="video_icons rounded-full p-2"/></div>
            <div>
                <h1 className="text-2xl font-medium py-1">Bring those ideas to life</h1>
                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="flex justify-center">
            <div className="w-full h-56 md:h-72 lg:h-80 bg-gray-300 flex items-center justify-center rounded-lg">
              {/* Replace with an actual video */}
              <div className="flex justify-center">
                <video
                  src="https://www.youtube.com/watch?v=-FKQwXtrSSQ"
                  controls
                  className="w-full h-56 md:h-72 lg:h-80 rounded-lg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
