import React from 'react'
import segment from '../assets/trusted/segment.png'
import morphus from '../assets/trusted/morphus.png'
import monday from '../assets/trusted/monday.png'
import sumsang from '../assets/trusted/sumsang.png'
import oracle from '../assets/trusted/oracle.png'
import Image from 'next/image'
function Trusted() {
  return (
    <div className='container mx-auto py-3'>
         <div>
            <h2 className='text-center py-3'>Trusted By Over 100+ Startups and freelance business</h2>
         </div>
         <div className='flex justify-around mt-4 py-2 items-center gap-8'>
            <div>
                <Image src={segment}/>
            </div>
            <div>
                <Image src={morphus}/>
            </div>
            <div>
                <Image src={monday}/>
            </div>
            <div>
                <Image src={sumsang}/>
            </div>
            <div>
                <Image src={oracle}/>
            </div>
         </div>
    </div>
  )
}

export default Trusted