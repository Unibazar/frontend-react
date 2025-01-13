import React, { useState } from 'react';

import Plans from './Plans';
const ChoosePlan = () => {
  const [pricingType, setPricingType] = useState('monthly');

  const handlePricingTypeChange = (type) => {
    setPricingType(type);
  };
  return (
    <>
      <div className='w-full flex flex-col text-center p-5'>
        <div className='w-full'>
          <p className='font-bold text-2xl py-2 pb-2 md:pb-10'>
            Choose Your Plan
          </p>
          <div className='w-full justify-center flex flex-row     '>
          
            <p className={`cursor-pointer w-auto px-10 md:px-20 py-2 outline-teal-900 outline-2 outline outline-offset-0 ${
                pricingType === 'monthly' ? 'bg-teal-900 text-white' : ''
              }`}
              onClick={() => handlePricingTypeChange('monthly')}
            >
              Monthly
            </p>
            <p className={`cursor-pointer w-auto px-10 md:px-20 py-2 outline-teal-900 outline-2 outline outline-offset-0 ${
                pricingType === 'yearly' ? 'bg-teal-900 text-white' : ''
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
        <Plans pricingType={pricingType}/>
      </div>
    </>
  );
};

export default ChoosePlan