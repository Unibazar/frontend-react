'use client';
import React, { useState } from 'react';

const AccordionItem = ({faqData , indexA, indexB, indexC, indexD}) => {
  const [expanded, setExpanded] = useState(null);

  console.log(indexA , indexB, indexC, indexD);
  const sliceA = faqData.slice(indexA, indexB);
  const sliceB = faqData.slice(indexC, indexD);

  if (!faqData || !Array.isArray(faqData)) {
    return <div>No FAQ data available</div>;
  }
    
  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    
    <>
    
      <div className='w-full  gap-4 flex md:flex-row flex-col md:justify-center '>
        <div className='flex flex-col gap-4'>
          {sliceA.map((item, index) => (
              <div key={index} className='md:w-[510px] w-full bg-gray-100 rounded-lg cursor-pointer  p-3 ' 
                onClick={() => handleToggle(index)}>
                <div className='w-full flex justify-between'>
                  <p className='text-lg  '>{item.question}</p>
                  <p className={`text-lg  items-center flex  transition duration-700 ease-in-out ${
                      expanded === index ? 'rotate-180' : ''}`}>
                    {expanded === index ? '-' : '+'}
                  </p>
                </div>
                <div
                  className={`${
                  expanded === index ? 'max-h-screen' : 'max-h-0'
                  } transition-all duration-700 ease-in-out overflow-hidden`}
                >
                  <p className='w-full text-base text-gray-400 font-thin pt-1'>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className='flex flex-col gap-4'>
          {sliceB.map((item, index) => (
              <div key={index} className='md:w-[510px] w-full bg-gray-100 rounded-lg  cursor-pointer p-3 ' 
                onClick={() => handleToggle(index + indexB)}>
                <div className='w-full flex justify-between'>
                  <p className='text-lg  '>{item.question}</p>
                  <p className={`text-lg   items-center flex  transition duration-700 ease-in-out ${
                      expanded === index + indexB ? 'rotate-180' : ''}`}>
                    {expanded === index + indexB ? '-' : '+'}
                  </p>
                </div>
                <div
                  className={`${
                  expanded === index + indexB ? 'max-h-screen' : 'max-h-0'
                  } transition-all duration-700 ease-in-out overflow-hidden`}
                >
                  <p className='w-full text-base text-gray-400 font-thin pt-1'>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
        </div>
          
      </div>
    </>
  )
}

export default AccordionItem