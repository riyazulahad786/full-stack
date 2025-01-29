import React from 'react';
import Image from 'next/image';
import group from '../assets/service/group.png';
import chain from '../assets/service/chain.png';
import analysis from '../assets/service/analysis.png';
import setting from '../assets/service/setting.png';
import advertise from '../assets/service/advertise.png';
import cart from '../assets/service/cart.png';
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { FaArrowRight } from 'react-icons/fa6';

const services = [
  { img: setting, title: 'Company Information', desc: 'Build web-based solutions that enhance customer experience.' },
  { img: chain, title: 'Company Secretarial Services', desc: 'Make data-driven decisions and utilize technology to reach business goals.' },
  { img: analysis, title: 'Virtual Office Address', desc: 'Foster customer relationships by effectively serving your market.' },
  { img: group, title: 'Annual Compliance Services', desc: 'Turn your ideas into modern products with our design experts.' },
  { img: advertise, title: 'Payroll Services', desc: 'Expand your business across the globe with minimal effort.' },
  { img: cart, title: 'Bookkeeping Services', desc: 'Steering user behaviours with creative design, data insights & technology.' }
];

function Services() {
  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='text-center'>
        <p className='text-gray-600'>WELCOME TO REGISTERKARO.IN</p>
        <h1 className='text-3xl font-semibold py-2'>Explore Our Services</h1>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
        {services.map((service, index) => (
          <div key={index} className='flex flex-col items-center text-center p-4  rounded-lg  hover:shadow-xl transition duration-300'>
            <Image src={service.img} alt={service.title} width={80} height={80} />
            <h2 className='text-lg font-semibold mt-4'>{service.title}</h2>
            <p className='text-gray-500 mt-2'>{service.desc}</p>
            <div className="py-3">
                       <button className="px-3  flex items-center w-[150px] py-3 ">Learn More <span className="mx-2"><MdOutlineArrowCircleRight className=''/></span></button>
                     </div>
          </div>
        ))}
      </div>
       <div className="flex gap-2 mt-5 items-center justify-center cursor-pointer">
              <div className="flex learn_more px-3 max-w-[300px] py-3 items-center ">
                <span className="">See All Services</span>{" "}
                <span className="mx-2">
                  <FaArrowRight />
                </span>
              </div>
            </div>
    </div>
  );
}

export default Services;
