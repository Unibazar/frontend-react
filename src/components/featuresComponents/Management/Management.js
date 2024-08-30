import React from 'react';
import Image from 'next/image';
import Easy from '../../../assets/unibazar-features-images/Easy.svg';
import Dashboard from '../../../assets/unibazar-features-images/Dashboard.svg';
import Analytics from '../../../assets/unibazar-features-images/Analytics.svg';
import Managements from '../../../assets/unibazar-features-images/Management.svg';
import Products from '../../../assets/unibazar-features-images/Products.svg';
import Interface from '../../../assets/unibazar-features-images/Interface.svg';
const Management = () => {
  return (
    <>
      <div className="w-full mt-10">
        <div className="bg-[#F5FDFD] text-center py-6 max-md:px-3">
          <span className="font-bold text-2xl ">Unlock the Power of Seamless E-commerce Management </span>
          <p className="text-gray-500 text-base mt-3">
            At Unibazar, we offer a suite of powerful features designed to simplify and streamline your e-commerce operations. <br className="max-md:hidden" /> Discover how Unibazar can transform your multi-platform selling experience with the following features
          </p>
        </div>
        <div className="flex items-center justify-evenly md:gap-32 max-md:flex-col-reverse my-5 max-md:px-5">
          <Image src={Easy} alt="vector image1" className="max-sm:w-full max-sm:h-auto md:w-80 w-48" />
          <div className="flex flex-col max-md:my-10 max-md:w-full">
            <div className="text-[#08A9A0] max-md:text-[16px]">Easy Integration</div>
            <h2 className="text-[24px] font-bold my-2 max-md:text-[25px]">Connect All Your Platforms Effortlessly</h2>
            <p className="text-base text-gray-500 max-md:text-[14px]">
              Unibazar allows you to link multiple e-commerce platforms like <br className="max-md:hidden" /> Myntra, Meesho, and your own website with just a few clicks
            </p>
          </div>
        </div>
        {/* Vector Container End */}
        {/* Vector Container Start */}
        <div className="flex items-center justify-evenly md:gap-32 max-md:flex-col my-14 max-md:px-5">
          <div className="flex flex-col  max-md:my-10 max-md:w-full">
            <div className="text-[#08A9A0] max-md:text-[16px]">Unified Dashboard </div>
            <h2 className="text-[24px] font-bold my-2 max-md:text-[25px]">Centralized Management Hub</h2>
            <p className="text-base text-gray-500 max-md:text-[14px]">
              Access a comprehensive dashboard that provides a holistic <br className="max-md:hidden" /> view of your sales, inventory, and orders across all connected <br /> platforms
            </p>
          </div>
          <Image src={Dashboard} alt="vector image1" className="max-sm:w-full max-sm:h-auto md:w-96 w-48" />
        </div>
        {/* Vector Container End */}
        {/* Vector Container Start */}
        <div className="flex items-center justify-evenly md:gap-32 max-md:flex-col-reverse my-14 max-md:px-5">
          <Image src={Analytics} alt="vector image1" className="max-sm:w-full max-sm:h-auto md:w-96 w-48" />
          <div className="flex flex-col  max-md:my-10 max-md:w-full">
            <div className="text-[#08A9A0] max-md:text-[16px]">Real-time Analytics </div>
            <h2 className="text-[24px] font-bold my-2 max-md:text-[25px]">Actionable Insights at Your Fingertips </h2>
            <p className="text-base text-gray-500 max-md:text-[14px]">
              Leverage real-time data and analytics to track sales performance, <br className="max-md:hidden" /> monitor inventory levels, and make informed business decisions
            </p>
          </div>
        </div>
        {/* Vector Container End */}
        {/* Vector Container Start */}
        <div className="flex items-center justify-evenly md:gap-32 max-md:flex-col my-14 max-md:px-5">
          <div className="flex flex-col max-md:my-10 max-md:w-full">
            <div className="text-[#08A9A0] max-md:text-[16px]">Inventory Management</div>
            <h2 className="text-[24px] font-bold my-2 max-md:text-[25px]">Keep Your Stock in Sync </h2>
            <p className="text-base text-gray-500 max-md:text-[14px]">
              Automatically synchronize inventory levels across <br className="max-md:hidden" /> all your sales channels
            </p>
          </div>
          <Image src={Managements} alt="vector image1" className="max-sm:w-full max-sm:h-auto md:w-96 w-48 md:h-80" />
        </div>
        {/* Vector Container End */}
        {/* Vector Container Start */}
        <div className="flex items-center justify-evenly md:gap-32 max-md:flex-col-reverse my-14 max-md:px-5">
          <Image src={Products} alt="vector image1" className="max-sm:w-full max-sm:h-auto md:w-96 w-48" />
          <div className="flex flex-col max-md:my-10 max-md:w-full">
            <div className="text-[#08A9A0] max-md:text-[16px]">Seamless Product Listing</div>
            <h2 className="text-[24px] font-bold my-2 max-md:text-[25px]">List Once, Sell Everywhere</h2>
            <p className="text-base text-gray-500 max-md:text-[14px]">
              Understand sales trends, platform performance, and <br className="max-md:hidden" /> customer behavior to make strategic decisions
            </p>
          </div>
        </div>
        {/* Vector Container End */}
        {/* Vector Container Start */}
        <div className="flex items-center justify-evenly md:gap-32 max-md:flex-col my-14 max-md:px-5">
          <div className="flex flex-col max-md:my-10 max-md:w-full">
            <div className="text-[#08A9A0] max-md:text-[16px]">User-friendly Interface </div>
            <h2 className="text-[24px] font-bold my-2 max-md:text-[25px]">Designed for Ease of Use</h2>
            <p className="text-base text-gray-500 max-md:text-[14px]">
              Leverage real-time analytics to make informed <br className="max-md:hidden" /> business decisions. 
            </p>
          </div>
          <Image src={Interface} alt="vector image1" className="max-sm:w-full max-sm:h-auto md:w-96 w-48" />
        </div>
        {/* Vector Container End */}
      </div>
    </>
  );
};

export default Management;
