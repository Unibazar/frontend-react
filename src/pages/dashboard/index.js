import React, { useEffect } from "react"
import Image from "next/image";
import dashboardImage from "../../../public/dashboard-image1.png";
import LinkAccount from "../../components/OnBoardScreen/LinkAccount/LinkAccount"
import Head from "next/head";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "@/redux/slice/userSlice";
import { LineChart } from "@mui/x-charts";
import { RiBox3Fill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GiBackwardTime } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import Box from "../../components/Dashboard/Common-Components/Box";



export default function Dashboard() {
  const [isLinkAccountOpen, setIsLinkAccountOpen] = useState(false);
  const [showGraph, setShowGraph] = useState(false);

  const dispatch = useDispatch();


  const { user } = useSelector((state) => state.user);
  const businessInformation = user?.user?.businessInformation;


  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (businessInformation?.hasOwnProperty('amazon') || businessInformation?.hasOwnProperty('meesho')) {
      setIsLinkAccountOpen(true);
      setShowGraph(true);
    }
  }, [user]);

  const handleAddButton = () => {
    setIsLinkAccountOpen(true);
  };



  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];

  return (
    <>
      <Head>
        <title>Dashboard | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>

      <div className="w-full flex justify-center md:justify-start items-center flex-col gap-5">


        {/* Hide the button if the modal is open */}

        {!isLinkAccountOpen ?
          <>
            <div className="imageContainer w-[50vw] md:w-[50vh] mt-[5%]">
              <Image src={dashboardImage} width="auto" height="auto" alt="dashboard_image" className="w-full h-full object-contain" />
            </div>
            <button
              className="px-8 py-2 mt-[2%] bg-[#08A9A0] text-white rounded-md w-[50vw] md:w-[20vw] text-sm lg:text-lg"
              onClick={handleAddButton}
            >
              Add Account
            </button>
          </>
        : (
          !showGraph && (
            <div className="flex flex-row justify-center items-center">
              <LinkAccount
                isOpen={isLinkAccountOpen}
                onClose={() => setIsLinkAccountOpen(false)}
              />
            </div>
          )
        )}
        

        {/* the graph section */}

        {showGraph &&

          <div className="w-full px-4 py-4 md:px-7 md:py-7">
            <div className='title flex flex-wrap items-center'>
              <h1 className='md:text-3xl text-lg font-semibold '>Dashboard</h1>
            </div>

            <div className="boxes flex gap-5 mt-10 flex-wrap">
              <Box title="Total Session" count="40,689" bgColor="#E4E4FF" textColor="#8280FF" description="Logo up from yesterday" Icon={FaUserGroup}/>

              <Box title="Total Order" count="10,399" bgColor="#FEF2D6" textColor="#FEC53D" description="Logo up from yesterday" Icon={RiBox3Fill} textSize="3xl"/>

              <Box title="Total Sales" count="$89,000" bgColor="#D9F7E7" textColor="#4AD991" description="Logo up from yesterday" Icon={GoGraph} textSize="2xl"/>

              <Box title="Total Pending" count="2040" bgColor="#FFDED2" textColor="#FFA583" description="Logo up from yesterday" Icon={GiBackwardTime} textSize="3xl"/>
            </div>

            <div className="chart bg-white mt-10 rounded-lg overflow-hidden w-full">
              <LineChart className="w-full p-2"
                height={400}
                series={[
                  { data: pData, label: 'pv' },
                  { data: uData, label: 'uv' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}

                grid={{ horizontal: true }}
              />
            </div>

          </div>
        }

      </div>
    </>
  );
}
