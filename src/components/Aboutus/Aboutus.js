import React from 'react';
import Image from 'next/image';
import AboutusImage from '../../assets/unibazar-aboutus-images/aboutus.svg';
import Link from 'next/link'
const Aboutus = () => {
  return (
    <>

<div className=" w-full flex md:flex-row flex-col justify-between items-center  md:mt-5 ">
        <div className=" w-full justify-items-end ">
          <h1 className="w-full font-bold uppercase text-4xl p-3">
          ABOUT US
          </h1>
          <p className="w-full capitalize text-xl font-thin mb-4 p-3">
          Discover how Unibazar can transform your <br /> multi-platform selling experience.
          </p>
          <div className="pt-3 p-3">
            <Link href="/register" className="px-12 py-4 text-white text-lg font-thin bg-teal-500 rounded-xl hover:bg-teal-600 ">
            Get Start for Free
            </Link>
          </div>
          <br />
          <br />
        </div>

        <div className=" md:w-4/5 w-full md:pl-16 justify-center md:justify-right justify-items-center items-center">
          <Image src={AboutusImage} alt="hero-image.."></Image>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
