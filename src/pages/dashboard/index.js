import Image from "next/image";
import dashboardImage from "../../../public/dashboard-image1.png";
import Head from "next/head";
import { useState } from "react";
import LinkAccount from "../../components/Onboarding/LinkAccount/LinkAccount"



export default function Dashboard() {
  const [isLinkAccountOpen, setIsLinkAccountOpen] = useState(false);
  const [isCredentialDailogOpen, setIsCredentialDailogOpen] = useState(false);
  const [CredentialDailogContent, setCredentialDailogContent] = useState({ title: '', content: '' });


  const handleAddButton = (title, content) => {

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
        {!isLinkAccountOpen && (
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

        )}
      </div>
      <div className="flex flex-row justify-center items-center">
        <LinkAccount
          isOpen={isLinkAccountOpen}
          onClose={() => setIsLinkAccountOpen(false)}
        />
      </div>

    </>
  );
}