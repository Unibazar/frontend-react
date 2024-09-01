import React, { useState } from 'react';
import Image from 'next/image';
import TickImg from '../../../assets/unibazar-pricing-images/tick.png'
const ChoosePlan = () => {
  const [pricingType, setPricingType] = useState('monthly');

  const handlePricingTypeChange = (type) => {
    setPricingType(type);
  };
  return (
    <>
      <div className='w-full flex flex-col justify-center justify-items-center items-center text-center p-5'>
        <div className='w-full '>
          <p className='font-bold text-2xl py-2 pb-2 md:pb-10'>
            Choose Your Plan
          </p>
          <div className='w-full justify-center flex flex-row     '>
          
            <p className={`cursor-pointer w-auto px-10 md:px-20 py-2 outline-sky-900 outline-2 outline outline-offset-0 ${
                pricingType === 'monthly' ? 'bg-sky-900 text-white' : ''
              }`}
              onClick={() => handlePricingTypeChange('monthly')}
            >
              Monthly
            </p>
            <p className={`cursor-pointer w-auto px-10 md:px-20 py-2 outline-sky-900 outline-2 outline outline-offset-0 ${
                pricingType === 'yearly' ? 'bg-sky-900 text-white' : ''
              }`}
              onClick={() => handlePricingTypeChange('yearly')}
            >
              Yearly
            </p>
          
          </div>
          <div className='w-auto py-1 pb-2 '>
            <p className='px-4 py-2 text-normal text-gray-400'>
              Best Plan For <span className='text-black'>Business</span>
            </p>
          </div>
        </div>  
        <div className='w-full md:w-4/5 justify-center justify-items-center items-start flex md:flex-row flex-col md:gap-4'>
          <div className='w-full md:w-96 text-left p-6 rounded-lg shadow-md  '>
            <div className='w-auto py-2 '>
              <p className='w-10 text-sm font-bold text-emerald-600 justify-center flex bg-emerald-300 rounded-3xl '>Free</p>
            </div>
            <p className='text-2xl py-1'>{pricingType === 'monthly' ? '$0' : '$0'}<span className='text-normal font-normal text-gray-400 pl-1'>/month</span></p> 
            <p className='text-normal py-1 text-gray-500'>Just using this for yourself? Lite is the way to go for the lites platform.</p>
            <button type='button' className='bg-teal-600 w-full py-2  text-white rounded-xl text-center'>Sign Up for Free</button>
            <div className='w-full items-start py-3  '>
              <div className='flex flex-row items-start gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4 mt-1' ></Image>
                <p className='text-normal text-gray-500'>Link up to 2 e-commerce platforms</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4' ></Image>
                <p className='text-normal text-gray-500'>Manage up to 50 products</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4'></Image>
                <p className='text-normal text-gray-500'>Basic dashboard access</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4' ></Image>
                <p className='text-normal text-gray-500'>Basic customer support</p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-96 text-left p-6 rounded-lg shadow-xl '>
            <div className='w-auto py-2 '>
              <p className='w-10 text-sm font-bold text-fuchsia-600 justify-center flex bg-fuchsia-300 rounded-3xl '>Pro</p>
            </div>
            <p className='text-2xl py-1'>{pricingType === 'monthly' ? '$10' : '$7'}<span className='text-normal font-normal text-gray-400 pl-1'>/month</span></p> 
            <p className='text-normal py-1 text-gray-500'>Just using this for yourself? Lite is the way to go for the lites platform.</p>
            <button type='button' className='bg-teal-600 w-full py-2  text-white rounded-xl text-center'>Upgrade to Pro</button>
            <div className='w-full items-start py-3  '>
              <div className='flex flex-row items-start gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4 mt-1' ></Image>
                <p className='text-normal text-gray-500'>Link up to 5 e-commerce platforms</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4' ></Image>
                <p className='text-normal text-gray-500'>Manage up to 500 products</p>
              </div>
              <div className='flex flex-row items-start gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4 mt-1'></Image>
                <p className='text-normal text-gray-500'>Advanced dashboard access with real-time analytics</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4' ></Image>
                <p className='text-normal text-gray-500'>Priority customer support</p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-96 text-left p-6 rounded-lg shadow-md '>
            <div className='w-auto py-2 '>
              <p className='w-20 text-sm font-bold text-teal-600 justify-center flex bg-teal-300 rounded-3xl '>Enterprise</p>
            </div>
            <p className='text-2xl py-1'>Custom price</p> 
            <p className='text-normal py-1 text-gray-500'>Just using this for yourself? Lite is the way to go for the lites platform.</p>
            <button type='button' className='bg-teal-600 w-full py-2  text-white rounded-xl text-center'>Sign Up for Free</button>
            <div className='w-full items-start py-3  '>
              <div className='flex flex-row items-center gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4' ></Image>
                <p className='text-normal text-gray-500'>Unlimited platform integrations</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4' ></Image>
                <p className='text-normal text-gray-500'>Manage unlimited products</p>
              </div>
              <div className='flex flex-row items-start gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4 mt-1'></Image>
                <p className='text-normal text-gray-500'>Full dashboard access with advanced analytics</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <Image src={TickImg} alt='wait' className='w-4 h-4' ></Image>
                <p className='text-normal text-gray-500'>24/7 premium support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosePlan