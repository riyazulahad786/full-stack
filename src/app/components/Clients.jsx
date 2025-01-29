import React from "react";
import client from "../assets/Pagination.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function Clients() {
  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center flex-col max-w-[900px] text-center justify-center mx-auto">
        <h2 className="lg:text-2xl py-2 font-bold">Our Happy Clients</h2>
        <p>
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>
      </div>
      <div className="py-2">
        <Image src={client} />
      </div>
      <div className="flex gap-2 items-center justify-center cursor-pointer">
        <span className="text-blue-600">show more</span>{" "}
        <span className="text-blue-600">
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
}

export default Clients;
