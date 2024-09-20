import React from 'react';
import GetStartImg from '../../../assets/onboarding-images/getstart.svg';
import Image from 'next/image';
import Logo from '../../../assets/unibazar_logo.svg';
const GetStart = () => {
  return (
    <>
      <div className="md:w-[503px] w-full md:h-[593px] flex flex-col bg-gray-100 justify-center text-center">
        <div className="w-full flex justify-center p-3">
          <Image src={Logo} alt="logo"></Image>
        </div>
        <div className="w-full text-2xl font-bold p-3">Manage all your e-commerce platforms from one place</div>
        <div className="w-full flex justify-center p-3">
          <Image src={GetStartImg} alt="getstartImg"></Image>
        </div>
        <div className="w-full text-base font-thin p-3">effortlessly handle their product listings, inventory, and sales across various e-commerce platforms from a single interface</div>
        <div className="w-full flex justify-center">
          <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default GetStart;
