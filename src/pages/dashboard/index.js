import React, { useEffect } from "react"
import Image from "next/image";
import dashboardImage from "../../../public/dashboard-image1.png";
import Head from "next/head";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "@/redux/slice/userSlice";
import { LineChart } from "@mui/x-charts";
import { RiBox3Fill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GiBackwardTime } from "react-icons/gi";
import { LuBoxes } from "react-icons/lu";
import Box from "../../components/Dashboard/Common-Components/Box";
import Link from "next/link";
import { loadProduct } from "@/redux/slice/productSlice";
import { fetchOrders } from "@/redux/slice/orderSlice";



export default function Dashboard() {
  const [showGraph, setShowGraph] = useState(false);
  const [noOfOrders, setNoOfOrders] = useState(0);
  const [noOfProducts, setNoOfProducts] = useState(0);

  const dispatch = useDispatch();


  const { user } = useSelector((state) => state.user);
  // const {product } = useSelector(state=>state.product);
  // const {orders} = useSelector(state=>state.orders);
  const businessInformation = user?.user?.businessInformation;


  useEffect(() => {
    dispatch(loadUser()).then(data=>{
      dispatch(getOrders());
      dispatch(loadProduct());
    })
  }, [dispatch]);
  
  useEffect(() => {
    if ( user?.user?.hasOwnProperty("amazon") &&
    user.user.amazon?.clientId !== null &&
    user.user.amazon?.clientId !== undefined &&
    user.user.amazon?.clientId !== "") {
      setIsLinkAccountOpen(true);
      setShowGraph(true);
    }
  }, [user, businessInformation]);

  useEffect(() => {
    setNoOfProducts(product?.numberOfResults)
    setNoOfOrders(orders?.orders?.payload?.Orders?.length);
  }, [product , orders])
  

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
  const { product , isLoading ,error } = useSelector((state) => state.product);

  const { orders } = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(loadProduct());
    dispatch(fetchOrders());

  }, [user, dispatch]);
  // // console.log(orders?.orders?.payload?.Orders,"orders")
  //   useEffect(() => {
  //     dispatch(fetchOrders());
  //   }, []);
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
            <Link href="/dashboard/linkaccount"
              className="px-8 py-2 mt-[2%] bg-[#08A9A0] text-white rounded-md w-[50vw] md:w-[20vw] text-sm lg:text-lg text-center"
            >
              Add Account
            </Link>
          </>:<div className="w-full px-4 py-4 md:px-7 md:py-7">
            <div className='title flex flex-wrap items-center'>
              <h1 className='md:text-3xl text-lg font-semibold text-green-600 '>Welcome {user?.user?.name}</h1>
            </div>

            <div className="boxes flex gap-5 mt-10 flex-wrap">
              <Box title="Total Products" count={product?.items?.length} bgColor="#E4E4FF" textColor="#8280FF" description="Logo up from yesterday" Icon={FaUserGroup}/>

              <Box title="Total Order" count={orders?.orders?.payload?.Orders?.length} bgColor="#FEF2D6" textColor="#FEC53D" description="Logo up from yesterday" Icon={RiBox3Fill} textSize="3xl"/>

              <Box title="Total Sales" count="$89,000" bgColor="#D9F7E7" textColor="#4AD991" description="Logo up from yesterday" Icon={GoGraph} textSize="2xl"/>

              <Box title="Total Pending" count="2040" bgColor="#FFDED2" textColor="#FFA583" description="Logo up from yesterday" Icon={GiBackwardTime} textSize="3xl"/>
            </div>

            <div className="chart bg-white mt-10 rounded-lg overflow-hidden w-full">
              <h1 className="md:text-2xl font-semibold m-5 mb-0">Sales Details</h1>
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


        {/* the graph section */}

        {/* {showGraph &&

          <div className="w-full px-4 py-4 md:px-7 md:py-7">
            <div className='title flex flex-wrap items-center'>
              <h1 className='md:text-3xl text-lg font-semibold '>Dashboard</h1>
            </div>

            <div className="boxes flex gap-5 mt-10 flex-wrap">
              <Box title="Total Session" count={noOfProducts} bgColor="#E4E4FF" textColor="#8280FF" description="Logo up from yesterday" Icon={LuBoxes} textSize="3xl" />

              <Box title="Total Order" count={noOfOrders} bgColor="#FEF2D6" textColor="#FEC53D" description="Logo up from yesterday" Icon={RiBox3Fill} textSize="3xl" />

              <Box title="Total Sales" count="$89,000" bgColor="#D9F7E7" textColor="#4AD991" description="Logo up from yesterday" Icon={GoGraph} textSize="2xl" />

              <Box title="Total Pending" count="2040" bgColor="#FFDED2" textColor="#FFA583" description="Logo up from yesterday" Icon={GiBackwardTime} textSize="3xl" />
            </div>

            <div className="chart bg-white mt-10 rounded-lg overflow-hidden w-full">
              <h1 className="md:text-2xl font-semibold m-5 mb-0">Sales Details</h1>
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
        } */}

      </div>
    </>
  );
}
