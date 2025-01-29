import React from "react";
import shield from "../assets/choose/shield.png";
import user from "../assets/choose/user.png";
import emoji from "../assets/choose/emojis.png";
import check from "../assets/choose/check.png";
import Image from "next/image";

function ChooseUs() {
  return (
    <div className="container mx-auto py-5 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        {/* Left column */}
        <div className="flex-1">
          <p className="text-[#EB8D15] py-2">WHY REGISTERKARO.IN</p>
          <h2 className="lg:text-2xl font-bold">Why Choose Register Karo</h2>
          <p>
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
          <div className="flex justify-end items-end mt-4">
            <div className="text-center bg-[#EDF3FF] px-3 py-4 w-[250px]">
              <div className="flex justify-center items-center">
                <Image src={emoji} />
              </div>
              <h2 className="font-bold py-1">Guaranteed Satisfaction</h2>
              <p className="text-sm">
                We ensure that you stay 100% satisfied with our offered services
              </p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col items-center gap-6 lg:w-[650px]">
          {/* Top row */}
          <div className="flex gap-6">
            {/* Box 1 */}
            <div className="w-full sm:w-1/2 lg:w-[250px]">
              <div className="text-center bg-[#FCDDEC] px-3 py-4">
                <div className="flex justify-center items-center">
                  <Image src={shield} />
                </div>
                <h2 className="font-bold py-1">Confident and safe</h2>
                <p className="text-sm">
                  We ensure that you stay 100% satisfied with our offered services
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-full sm:w-1/2 lg:w-[250px]">
              <div className="text-center bg-[#EDF3FF] px-3 py-4">
                <div className="flex justify-center items-center">
                  <Image src={check} />
                </div>
                <h2 className="font-bold py-1">No hidden fees</h2>
                <p className="text-sm">
                  Our customer support is available 24/7 to help with any issues
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex gap-6">
            {/* Box 3 */}
            <div className="w-full sm:w-1/2 lg:w-[250px]">
              <div className="text-center bg-[#FCDDEC] px-3 py-4">
                <div className="flex justify-center items-center">
                  <Image src={user} />
                </div>
                <h2 className="font-bold py-1">Expert CA/CS Assistance</h2>
                <p className="text-sm">
                  Simplified process to register your business with no hassle
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="w-full sm:w-1/2 lg:w-[250px]">
              <div className="text-center bg-[#EDF3FF] px-3 py-4">
                <div className="flex justify-center items-center">
                  <Image src={shield} />
                </div>
                <h2 className="font-bold py-1">Confident and safe</h2>
                <p className="text-sm">
                  Competitive pricing that fits your business needs and budget
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
