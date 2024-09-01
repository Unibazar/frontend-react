import React from 'react';
import Image from 'next/image';
import BackgroundImage from '../../../assets/unibazar-aboutus-images/story.png';
const Story = () => {
  return (
    <> 
      <div className='w-full'>
      <div className="relative flex items-center justify-center text-center">
        <div className="absolute -z-10 w-full">
          <Image src={BackgroundImage} alt="background image" className="w-full md:h-auto h-[500px]"></Image>
        </div>
        <div className=" py-6 md:px-5 my-8 text-center bg-white rounded-xl justify-center items-center md:mt-3 md:m-0 m-10">
          <p className="font-bold text-2xl py-2">Our Story</p>
          <p className="font-normal text-lg text-gray-500 text-center px-4">
            Unibazar was founded in May 2024 by Amritesh and Rahul. With a shared vision to
            <br />
            address the complexities faced by sellers in managing multiple e-commerce platforms,
            <br />
            they combined their expertise to create a solution that would transform the e-commerce
            <br />
            landscape
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Story;
