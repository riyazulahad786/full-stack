import Image from "next/image";
import React from "react";
import service from "../assets/servicemanage.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io5";

function ServiceManage() {
  return (
    <div className="container-fluid py-3 service px-3">
      <div className="container mx-auto flex items-center justify-between">
        <div >
          <h1 className="lg:text-2xl font-medium py-1">Manage Your Services by your Mobile Phone</h1>
          <p>
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.{" "}
             <div className="flex gap-4 mt-4">
                      <button className="learn_more flex items-center hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
                       <span><IoLogoApple/></span> Talk to an Expert
                      </button>
                      <button className="border border-blue-600 font-semibold py-2 px-1 rounded-lg shadow-md flex items-center">
                       
                     
                        <span>See how it works</span>
                      </button>
                    </div>
          </p>
        </div>
        <div>
          <Image alt="image" src={service} />
        </div>
      </div>
    </div>
  );
}

export default ServiceManage;
