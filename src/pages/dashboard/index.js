import React, {useEffect} from "react"
import Image from "next/image";
import dashboardImage from "../../../public/dashboard-image1.png";
import Head from "next/head";
import { useState } from "react";
import LinkAccount from "../../components/OnBoardScreen/LinkAccount/LinkAccount"
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "@/redux/slice/userSlice";



export default function Dashboard() {
  const [isLinkAccountOpen, setIsLinkAccountOpen] = useState(false);

  const dispatch = useDispatch();

  // State to track filled accounts
  const [filledAccounts, setFilledAccounts] = useState({
    amazon: false,
    meesho: false,
  });


  const { user } = useSelector((state) => state.user);

  
  useEffect(() => {
    dispatch(loadUser()); 
  }, [dispatch]);

  useEffect(() => {
    if (user?.user?.businessInformation?.hasOwnProperty('amazon')) {
      setFilledAccounts((prev) => ({ ...prev, amazon: true }));
    }
    if (user?.user?.businessInformation?.hasOwnProperty('meesho')) {
      setFilledAccounts((prev) => ({ ...prev, meesho: true }));
    }
  }, [user]);

  useEffect(() => {
    if (filledAccounts.amazon || filledAccounts.meesho ) {
      setIsLinkAccountOpen(true); // Automatically open the modal when Amazon || Meesho is linked
    }
  }, [filledAccounts.amazon, filledAccounts.meesho]);

  const handleAddButton = () => {

    setIsLinkAccountOpen(true);
  };

  return (
    <>
      <Head>
        <title>Dashboard | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>

      <div className="h-full w-full flex justify-center md:justify-start items-center flex-col gap-5">


        {/* Hide the button if the modal is open */}
        {!isLinkAccountOpen ? (
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
        ):(
          <div className="flex flex-row justify-center items-center">
        <LinkAccount
          isOpen={isLinkAccountOpen}
          onClose={() => setIsLinkAccountOpen(false)}
        />
      </div>
        )}
        
      </div>
    </>
  );
}
