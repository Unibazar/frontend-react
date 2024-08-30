import React from 'react';
import Image from 'next/image';
import HeroImage from '../../assets/unibazar-home-images/hero-img.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className=" w-full flex md:flex-row flex-col justify-between items-center  md:mt-5 ">
        <div className=" w-full justify-items-end ">
          <h1 className="w-full font-bold uppercase text-4xl p-3">
            Simplify Your E-commerce <br /> Management with <br />
            <span className="text-teal-400 pt-4">Unibazar</span>
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

        <div className=" md:w-4/5 w-full justify-center md:justify-right justify-items-center items-center">
          <Image src={HeroImage} alt="hero-image.."></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
