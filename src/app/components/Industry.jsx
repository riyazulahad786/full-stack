import React from 'react';
import { FaCheck } from 'react-icons/fa';

function Industry() {
  return (
    <div className='container-fluid py-8 px-4 industry_background flex flex-col items-center text-center' >
      <p className='text-lg font-semibold text-white'>1% OF THE INDUSTRY</p>
      <h3 className='text-2xl md:text-3xl font-bold mt-2 text-white'>Welcome to your new digital reality. Now.</h3>
      
      <div className='relative py-3'>
          <input 
            type='email' 
            placeholder='Email...' 
            className='w-100 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-20'
          />
          <button className='absolute right-0 top-1/2 transform -translate-y-1/2 ctn text-white px-5 py-2 rounded-md hover:bg-blue-700 transition'>
            Submit
          </button>
        </div>

      <div className='flex flex-col sm:flex-row gap-4 py-4 text-white'>
        <div className='flex items-center gap-2 '>
          <FaCheck className='text-green-500'/> <span>Instant results</span>
        </div>
        <div className='flex items-center gap-2'>
          <FaCheck className='text-green-500'/> <span>User-friendly interface</span>
        </div>
        <div className='flex items-center gap-2'>
          <FaCheck className='text-green-500'/> <span>Personalized customization</span>
        </div>
      </div>
    </div>
  );
}

export default Industry;