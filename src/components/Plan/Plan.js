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

        <div className=" w-full flex md:flex-row flex-col justify-between items-end   ">
        <div className=" w-full justify-items-end ">
          <h1 className="w-full font-bold uppercase text-4xl p-3">
          Choose the Right Plan <br/>for Your Business
          </h1>
          <p className="w-full capitalize text-xl font-thin mb-4 p-3">
          Flexible pricing plans to suit your needs. Start with our<br/> Free plan or unlock more features with our Pro and<br/> Enterprise plans.
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
          <Image src={PricingImage} alt="hero-image.."></Image>
        </div>
      </div>    
    </>
  );
};

export default Plan;
