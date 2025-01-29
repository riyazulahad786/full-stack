import Image from 'next/image';
import React from 'react';
import customers from '../assets/stats/1m.png';
import image1 from '../assets/stats/12.png';
import image2 from '../assets/stats/41.png';
import image3 from '../assets/stats/78.png';
import image4 from "../assets/stats/3287.png";
import plus from '../assets/stats/plus.png';

const stats = [
  { img: customers, label: 'Customers' },
  { img: image1, label: 'Years of Excellence' },
  { img: image2, label: 'Partners' },
  { img: image3, label: 'R & D Engineers' },
  { img: image4, label: 'Countries' },
  { img: image2, label: 'Partners' }
];

function Statistics() {
  return (
    <div className='container mx-auto py-5 px-4'>
      <div className='text-center'>
        <h2 className='text-[#EB8D15]'>Why Register Karo</h2>
        <h1 className='text-3xl font-bold py-3'>Some Numbers are Important</h1>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-6'>
        {stats.map((stat, index) => (
          <div key={index} className='flex flex-col items-center text-center p-4  rounded-lg transition duration-300'>
           <div className='flex'> 
           <div>
              <Image  src={stat.img} alt={stat.label} />
            
            </div>
            <div>
            <Image  src={plus} alt='plus' className='mx-2' height={5} width={20}/>
            </div>
           </div>
            <h2 className='mt-2 font-bold'>{stat.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;