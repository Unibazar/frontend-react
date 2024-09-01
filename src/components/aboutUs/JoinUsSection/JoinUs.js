import Image from 'next/image';
import React from 'react';
import image from '../../../assets/joinus.svg';
import Link from 'next/link';
const Joinus = () => {
  return (
    <>
      <div className='w-full flex md:flex-row flex-col justify-around items-start md:pr-36 pt-10 pb-10 md:p-10'>
        <div className=' md:w-[550px] p-5'>
         <p className="font-bold text-xl">JOIN US</p>
         <p className="py-2.5 font-normal text-base text-gray-500">Join the growing community of successful sellers who have chosen Unibazar to enhance their e-commerce operations. Together, we can transform the way you manage your online business.</p>
         <button type='button' className=' px-12 text-xl font-thin py-4 text-white bg-teal-500 rounded-xl hover:bg-teal-600 mt-12'><Link href='/register'>Signup for free</Link></button>
        </div>
        <div className='md:w-60 flex justify-center'>
        <Image src={image} alt="join us "></Image>
        </div>
        
      </div>
    </>
  );
};

export default Joinus;
