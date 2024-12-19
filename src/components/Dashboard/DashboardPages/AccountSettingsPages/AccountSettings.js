'use client'
import { IoIosArrowDown } from "react-icons/io";
import Personalinformation from "./AccountSetting-Components/Personalinformation";
import BusinessInformation from "./AccountSetting-Components/BusinessInformation";
import SubscriptionPlan from "./AccountSetting-Components/SubscriptionPlan";
import LinkedPlatform from "./AccountSetting-Components/LinkedPlatform";
import Accordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const CustomAccordion = styled(Accordion)(() => {
  return {
    boxShadow: 'none',
    border: 'none',
    marginTop: '15px',
    borderRadius: '10px',
    '&::before': {
      display: 'none',
    },
  }
})


export default function AccountSettings() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const userInformation = useSelector(state => state?.user?.user?.user);
  console.log(userInformation,"userInformation")

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (query=== 'profileManage') {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [query]);


  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded); 
  };

  return (
    <div className="h-full w-full  px-4 py-4 md:px-7 md:py-7">
      <div className='title flex flex-wrap justify-between items-center'>
        <h1 className='md:text-3xl text-lg font-semibold '>Account Settings</h1>
      </div>


      {/* personal information  */}
      <CustomAccordion className="w-full flex-col text-sm md:text-2xl" expanded={expanded} onChange={handleAccordionChange}>
        <AccordionSummary expandIcon={<IoIosArrowDown />} >
          <p className="w-full font-semibold text-left capitalize">personal inforamtion</p>
        </AccordionSummary>
        <AccordionDetails className="text-sm md:text-xl">
          <Personalinformation />
        </AccordionDetails>
      </CustomAccordion>



      {/* business information  */}
      <CustomAccordion className="w-full flex-col text-sm md:text-2xl">
        <AccordionSummary expandIcon={<IoIosArrowDown />} >
          <p className="w-full font-semibold text-left capitalize">business inforamtion</p>
        </AccordionSummary>
        <AccordionDetails className="text-sm md:text-xl">
          <BusinessInformation data={userInformation} />
        </AccordionDetails>
      </CustomAccordion>
      


      {/* subscription plan  */}
      <CustomAccordion className="w-full flex-col text-sm md:text-2xl">
        <AccordionSummary expandIcon={<IoIosArrowDown />} >
          <p className="w-full font-semibold text-left capitalize">subscription plan</p>
        </AccordionSummary>
        <AccordionDetails className="text-sm md:text-xl">
          <SubscriptionPlan />
        </AccordionDetails>
      </CustomAccordion>


      {/* linked platforms  */}
      <CustomAccordion className="w-full flex-col text-sm md:text-2xl">
        <AccordionSummary expandIcon={<IoIosArrowDown />} >
          <p className="w-full font-semibold text-left capitalize">linked platforms</p>
        </AccordionSummary>
        <AccordionDetails className="text-sm md:text-xl">
          <LinkedPlatform />
        </AccordionDetails>
      </CustomAccordion>

    </div>
  )
}
