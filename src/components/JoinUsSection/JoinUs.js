import Image from 'next/image';
import React from 'react';
import image from '../../assets/joinUs.png';
import Link from 'next/link';
const Joinus = () => {
  return (
    <>
      <div className='w-full flex md:flex-row flex-col justify-around items-start pr-36 pt-11 p-5'>
        <div className=' md:w-2/3 p-5'>
         <p className="font-bold">JOIN US</p>
         <p className="py-2.5 font-normal">Join the growing community of successful sellers who have chosen Unibazar to enhance their e-commerce operations. Together, we can transform the way you manage your online business.</p>
         <button type='button' className='pb-5 text-white bg-teal-700 font-bold py-2 px-2 rounded-xl'><Link href='/sign-up'>Signup for free</Link></button>
        </div>
        <Image src={image} alt="join us "></Image>
      </div>
    </>
  );
};

export default Joinus;
