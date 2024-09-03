import React from 'react';
import Image from 'next/image';
import PricingImage from '../../assets/unibazar-pricing-images/pricing.svg';
{
  /*import './Hero.css';
import '../ResponsiveStyle/Responsive.css'*/
}
import Link from 'next/link';
const Plan = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-between items-center lg:py-8 ">
        <div className="w-full ">
          <h1 className="w-full font-bold uppercase text-gray-600 text-4xl p-3">
            Choose the Right Plan <br />
            for Your Business
          </h1>
          <p className="w-full capitalize text-normal mb-4 p-3">
            Flexible pricing plans to suit your needs. Start with our
            <br /> Free plan or unlock more features with our Pro and
            <br /> Enterprise plans.
          </p>
          <div className="pt-3 p-3">
            <Link href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
              Get Start For Free
            </Link>
          </div>
        </div>

        <div className="w-full md:w-auto justify-center justify-items-center items-center">
          <Image src={PricingImage} alt="hero-image.."></Image>
        </div>
      </div>
    </>
  );
};

export default Plan;
