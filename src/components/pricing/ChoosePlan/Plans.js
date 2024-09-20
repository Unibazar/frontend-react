import React from 'react';
import Image from 'next/image';
import TickImg from '../../../assets/unibazar-pricing-images/tick.png';

export default function Plans({ pricingType }) {
  return (
    <div className="w-full justify-center justify-items-center items-start flex md:flex-row flex-col gap-4 ">
      <div className="w-full md:w-96 text-left py-4 rounded-lg shadow-md">
        <div className="space-y-5 px-4 py-7">
          <div className="w-auto">
            <p className="w-fit py-1 px-3 text-sm font-semibold text-[#035388] justify-center flex bg-[#E3F8FF] rounded-3xl">Free</p>
          </div>
          <p className="text-2xl md:text-4xl font-bold flex items-center gap-1">
            {pricingType === 'monthly' ? '$0' : '$0'}
            <span className="text-sm font-normal text-gray-400 pl-1">/month</span>
          </p>
          <p className="text-base text-gray-500">Just using this for yourself? Lite is the way to go for the lites platform.</p>
          <button type="button" className="bg-teal-600 w-full py-3 text-base text-white rounded-xl text-center">
            Sign Up for Free
          </button>
        </div>
        <div className="w-full px-6 py-4 items-start border-t-2 space-y-3">
          <div className="flex flex-row items-start gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4 mt-1"></Image>
            <p className="text-base text-gray-500">Link up to 2 e-commerce platforms</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4"></Image>
            <p className="text-base text-gray-500">Manage up to 50 products</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4"></Image>
            <p className="text-base text-gray-500">Basic dashboard access</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4"></Image>
            <p className="text-base text-gray-500">Basic customer support</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-96 text-left py-4 rounded-lg shadow-md md:shadow-2xl">
        <div className="space-y-5 px-4 py-7">
          <div className="w-auto">
            <p className="w-fit py-1 px-3 text-sm font-semibold text-[#620042] justify-center flex bg-[#FFE3EC] rounded-3xl ">Pro</p>
          </div>
          <p className="text-2xl md:text-4xl font-bold flex items-center gap-1">
            {pricingType === 'monthly' ? '$10' : '$7'}
            <span className="text-sm font-normal text-gray-400 pl-1">/month</span>
          </p>
          <p className="text-base text-gray-500">Just using this for yourself? Lite is the way to go for the lites platform.</p>
          <button type="button" className="bg-teal-600 w-full py-3 text-base text-white rounded-xl text-center">
            Upgrade to Pro
          </button>
        </div>
        <div className="w-full px-6 py-4 items-start border-t-2 space-y-3">
          <div className="flex flex-row items-start gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4 mt-1"></Image>
            <p className="text-base text-gray-500">Link up to 5 e-commerce platforms</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4"></Image>
            <p className="text-base text-gray-500">Manage up to 500 products</p>
          </div>
          <div className="flex flex-row items-start gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4 mt-1"></Image>
            <p className="text-base text-gray-500">Advanced dashboard access with real-time analytics</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4"></Image>
            <p className="text-base text-gray-500">Priority customer support</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-96 text-left py-4 rounded-lg shadow-md">
        <div className="space-y-5 px-4 py-7">
          <div className="w-auto">
            <p className="w-fit py-1 px-3 text-sm font-semibold text-[#004440] justify-center flex bg-[#EFFCF6] rounded-3xl ">Enterprise</p>
          </div>
          <p className="text-2xl md:text-4xl font-semibold flex items-center gap-1">Custom Price</p>
          <p className="text-base text-gray-500">Just using this for yourself? Lite is the way to go for the lites platform.</p>
          <button type="button" className="bg-teal-600 w-full py-3 text-base text-white rounded-xl text-center">
            Sign Up for Free
          </button>
        </div>
        <div className="w-full px-6 py-4 items-start border-t-2 space-y-3">
          <div className="flex flex-row items-center gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4"></Image>
            <p className="text-base text-gray-500">Unlimited platform integrations</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4"></Image>
            <p className="text-base text-gray-500">Manage unlimited products</p>
          </div>
          <div className="flex flex-row items-start gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4 mt-1"></Image>
            <p className="text-base text-gray-500">Full dashboard access with advanced analytics</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={TickImg} alt="wait" className="w-4 h-4"></Image>
            <p className="text-base text-gray-500">24/7 premium support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
