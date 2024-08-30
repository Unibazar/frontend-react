import React from 'react';
import Image from 'next/image';
import HeroImage from '../../../assets/unibazar-features-images/FeaturesHeroImg.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <>

      <div className=" w-full flex md:flex-row flex-col justify-between items-end   ">
        <div className=" w-full justify-items-end ">
          <h1 className="w-full font-bold uppercase text-4xl p-3">
          Unlock the Power of <br /> Seamless
            
            E-commerce <br/>Management
          </h1>
          <p className="w-full capitalize text-base font-thin mb-4 p-3">
          Discover how Unibazar can transform your <br /> multi-platform selling experience.
          </p>
          <div className="pt-3 p-3">
            <Link href="/register" className="px-12 py-4 text-white text-lg font-thin bg-teal-500 rounded-xl hover:bg-teal-600 ">
              Get Start For Free
            </Link>
          </div>
          <br />
          <br />
        </div>

        <div className=" md:w-1/2 w-full justify-center md:justify-right justify-items-start items-start ">
          <Image src={HeroImage} alt="hero-image.."></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
