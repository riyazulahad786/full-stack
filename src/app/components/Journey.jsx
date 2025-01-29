import React from "react";
import letter from "../assets/journey/letter.png";
import contactForm1 from "../assets/journey/contact-form 1.png";
import contactForm from "../assets/journey/contact-form.png";
import email from "../assets/journey/email.png";
import Image from "next/image";

function Journey() {
  return (
    <div className="container-fluid bg-[#FFA229] py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-9">
        {/* Step 1 */}
        <div className="flex items-center justify-center gap-3">
          <Image alt="image"
            size={20}
            src={letter}
            className="bg-[#ee5555] p-2 h-[40px] w-[40px] rounded-full"
          />
          <span className="text-white text-lg">Fill up Application</span>
        </div>

        {/* Step 2 */}
        <div className="flex items-center justify-center gap-3">
          <Image alt="image"
            size={20}
            src={contactForm1}
            className="bg-[green] p-2 h-[40px] w-[40px] rounded-full"
          />
          <span className="text-white text-lg">Make Online payment</span>
        </div>

        {/* Step 3 */}
        <div className="flex items-center justify-center gap-3">
          <Image alt="image"
            size={20}
            src={contactForm}
            className="bg-[#F2994A] p-2 h-[40px] w-[40px] rounded-full"
          />
          <span className="text-white text-lg">Executive will Process Application</span>
        </div>

        {/* Step 4 */}
        <div className="flex items-center justify-center gap-3">
          <Image alt="image"
            size={20}
            src={email}
            className="bg-[gray] p-2 h-[40px] w-[40px] rounded-full"
          />
          <span className="text-white text-lg">Get Confirm Mail</span>
        </div>
      </div>
    </div>
  );
}

export default Journey;
