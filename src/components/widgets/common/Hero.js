import React from 'react';
import Image from 'next/image';
import AppButton from './AppButton';

const Hero = ({img, title, detail, buttonText }) => {
  return (
    <>
      <div className=" w-full md:h-1/2 flex md:flex-row flex-col justify-between ">
        <div className=" w-full md:h-full md:w-1/2 md:pt-10 items-end ">
          <h1 className="w-full font-bold uppercase text-4xl p-3">
            {title}
          </h1>
          <div className="w-full capitalize text-base font-thin mb-4 p-3">
            {detail}
          </div>
          <AppButton btnText={buttonText} />
        </div>

        <div className=" md:w-1/2 w-full md:pt-5 flex justify-end items-start">
          <Image src={img} alt="hero-image.."></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
