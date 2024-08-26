import React from 'react';
import Image from 'next/image';
import HeroImage from '../../../assets/unibazar-aboutus-images/aboutus.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-between p-10 ">
        <div className="w-full">
          <h1 className="w-full font-bold uppercase text-gray-600 text-4xl p-3">
          Unlock the Power of Seamless<br />
          E-commerce Management 
          </h1>
          <p className="w-full capitalize text-normal mb-4 p-3">
            Discover how Unibazar can transform your <br /> multi-platform selling experience.
          </p>
          <div className="pt-3 p-3">
            <Link href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
              Get Start For Free
            </Link>
          </div>
          <br />
          <br />
        </div>

        <div className="">
          <Image src={HeroImage} alt="hero-image.."></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
