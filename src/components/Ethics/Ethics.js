import React from 'react';
import Image from 'next/image';
import MissionImage from '../../assets/unibazar-aboutus-images/mission.svg';
import ValueImage from '../../assets/unibazar-aboutus-images/value.svg';
const Ethics = () => {
  return (
    <>
      {/*our mission */}
      <div className=" w-full flex md:flex-row flex-col justify-center md:p-10 md:ml-5">
        <div className="  w-full md:w-1/2 p-5">
          <Image src={MissionImage} alt="wait"></Image>
        </div>
        <div className=" w-full md:w-1/2 p-5">
          <h1 className="text-3xl font-bold text-gray-800 p-5">Our Mission</h1>
          <p className="text-lg text-gray-500 p-5">At Unibazar, we aim to simplify and revolutionize the way sellers manage their e-commerce platforms. By providing a unified, user-friendly interface, we empower businesses to seamlessly handle multiple online marketplaces, enhancing efficiency and boosting sales.</p>
        </div>
      </div>
      {/*our values */}
      <div className=" w-full flex md:flex-row flex-col justify-center md:p-10 ">
        <div className="  w-full md:w-[600px] p-5">
          <h1 className="text-3xl font-bold text-gray-800 p-5">Our Values</h1>
          <ul className="text-lg text-gray-500 p-5 list-disc">
            <li>
              <b className='text-black'>Innovation: </b>We continuously strive to bring cutting-edge solutions to the e-commerce industry.
            </li>
            <li>
              <b className='text-black'>User-Centric Design: </b>Our platform is designed with the user in mind, ensuring ease of use and accessibility.
            </li>
            <li>
              <b className='text-black'>Integrity: </b>We believe in transparency and honesty in all our dealings with customers and partners.
            </li>
            <li>
              <b className='text-black'>Customer Success: </b>Your success is our success. We are dedicated to providing tools and support to help your business thrive.
            </li>
          </ul>
        </div>
        <div className='  w-full flex items-center md:w-2/5 p-5'>
        <Image src={ValueImage} alt="wait"></Image>
        </div>
        
      </div>
    </>
  );
};

export default Ethics;
