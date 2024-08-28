'use client'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Personalinformation from "./AccountSetting-Components/Personalinformation";
import BusinessInformation from "./AccountSetting-Components/BusinessInformation";
import SubscriptionPlan from "./AccountSetting-Components/SubscriptionPlan";
import LinkedPlatform from "./AccountSetting-Components/LinkedPlatform";



export default function AccountSettings() {
  const [showPersonalBox, setShowPersonalBox] = useState(false);
  const [showBusinessBox, setShowBusinessBox] = useState(false);
  const [showSubscriptionBox, setShowSubscriptionBox] = useState(false);
  const [showPlatformBox, setShowPlatformBox] = useState(false);

  return (
    <div className="h-full w-full  px-4 py-4 md:px-7 md:py-7">
      <div className='title flex flex-wrap justify-between items-center'>
        <h1 className='md:text-3xl text-lg font-semibold '>Account Setting</h1>
      </div>

      {/* personal information  */}
      <div onClick={()=>setShowPersonalBox(prev=>!prev)} className="box cursor-pointer bg-white mt-7 rounded-md p-3  text-lg md:text-2xl flex justify-between items-center">
        <p className="capitalize">personal inforamtion</p>
        <IoIosArrowDown className={`duration-200 ease-linear ${showPersonalBox ? "rotate-180" : "rotate-0"}`} />

      </div>
      <div className={`bg-white mainContainer duration-200 ease-linear overflow-hidden ${showPersonalBox ? "h-[750px]" : "h-0"}`}>
          <Personalinformation/>
      </div>


      {/* business information  */}
      <div onClick={()=>setShowBusinessBox(prev=>!prev)} className="box cursor-pointer bg-white mt-7 rounded-md p-3  text-lg md:text-2xl flex justify-between items-center">
        <p className="capitalize">business inforamtion</p>
        <IoIosArrowDown className={`duration-200 ease-linear ${showBusinessBox ? "rotate-180" : "rotate-0"}`} />

      </div>
      <div className={`bg-white mainContainer duration-200 ease-linear overflow-hidden ${showBusinessBox ? "h-[300px]" : "h-0"}`}>
          <BusinessInformation/>
      </div>


      {/* subscription plan  */}
      <div onClick={()=>setShowSubscriptionBox(prev=>!prev)} className="box cursor-pointer bg-white mt-7 rounded-md p-3  text-lg md:text-2xl flex justify-between items-center">
        <p className="capitalize">subscription plan</p>
        <IoIosArrowDown className={`duration-200 ease-linear ${showSubscriptionBox ? "rotate-180" : "rotate-0"}`} />

      </div>
      <div className={`bg-white mainContainer duration-200 ease-linear overflow-hidden ${showSubscriptionBox ? "h-[300px]" : "h-0"}`}>
          <SubscriptionPlan/>
      </div>


      {/* linked platforms  */}
      <div onClick={()=>setShowPlatformBox(prev=>!prev)} className="box cursor-pointer bg-white mt-7 rounded-md p-3  text-lg md:text-2xl flex justify-between items-center">
        <p className="capitalize">linked platforms</p>
        <IoIosArrowDown className={`duration-200 ease-linear ${showPlatformBox ? "rotate-180" : "rotate-0"}`} />

      </div>
      <div className={`bg-white mainContainer duration-200 ease-linear overflow-hidden ${showPlatformBox ? "h-[300px]" : "h-0"}`}>
          <LinkedPlatform/>
      </div>
    </div>
  )
}
