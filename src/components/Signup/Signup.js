import React from 'react';
import Image from 'next/image';
import SignupImage from '../../assets/unibazar-contactus-images/signup-img.svg';
import Link from 'next/link';
const Signup = () => {
  return (
    <>
      <div className="bg-teal-100 w-full flex md:flex-row flex-col justify-center md:pl-32 ">
        <div className='w-auto md:w-96 items-center flex'>
          <Image src={SignupImage} alt="wait.."></Image>
        </div>
        <div className="w-full py-5 ">
          <p className="p-5 text-3xl">
            All-in-one Platform <br /> to manage and grow your Business
          </p>
          <p className="p-5">
            Organize your business with 24/7 automated yor products, <br /> reminders, payments, and more.
          </p>
          <div className="p-5">
            <Link href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
              Signup for Free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
