import React, { useState } from "react";
import Image from "next/image";
import AmazonLogo from '../../../assets/unibazar-home-images/amazon-logo.svg';
import MeeshoLogo from '../../../assets/unibazar-home-images/meesho-logo.png';
import CredentialDailog from "../CredentialsDailog/CredentialsDailog";
import { useRouter } from 'next/router';
const LinkAccount = () => {
  const [isCredentialDailogOpen, setIsCredentialDailogOpen] = useState(false);
  const [CredentialDailogContent, setCredentialDailogContent] = useState({ title: '', content: '' });
  const router = useRouter();

  const handleImageClick = (title, content) => {
    setCredentialDailogContent({ title, content });
    setIsCredentialDailogOpen(true);
  };

  const handleNextClick = () => {
    router.push('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div className="max-w-[600px] bg-gray-50 w-full max-md:mt-10 h-fit gap-0  flex flex-col items-center my-10 py-10 rounded-xl px-5">
      <h1 className="text-[30px] font-bold text-center">Link Account</h1>
      <p className="text-[16px] text-[#8692a6] leading-[34px] font-normal text-center">For the purpose of industry regulation, your details are required.</p>
      <div className="w-full flex justify-center gap-2 mb-8 ">
        <div className="flex flex-col items-center w-[144px] h-[130px] py-3  bg-[rgba(255,_255,_255,_1)] rounded-xl cursor-pointer" onClick={() => handleImageClick('Amazon', 'Amazon is an Indian fashion e-commerce platform.')}>
          <Image src={AmazonLogo} alt='AmazonLogo' className="w-[48px] h-[48px] rounded-full " ></Image>
          <div className="h-6  mt-2">
            <span className="font-bold text-[16px] leading-[17px] text-[rgba(0,_0,_0,_0.7)]">Amazon</span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[144px] h-[130px] py-3  bg-[rgba(255,_255,_255,_1)] rounded-xl cursor-pointer" onClick={() => handleImageClick('Meesho', 'Meesho is an Indian social commerce platform.')}>
          <Image src={MeeshoLogo} alt='Meeshologo' className="w-[48px] h-[48px] rounded-full " ></Image>
          <div className="h-6  mt-2">
            <span className="font-bold text-[16px] leading-[17px] text-[rgba(0,_0,_0,_0.7)]">Meesso</span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[144px] h-[130px] py-3  bg-[rgba(255,_255,_255,_1)] rounded-xl">
          <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5]"></div>
          <div className="h-6  mt-2">
            <span className="flex text-center font-bold text-[16px] text-[rgba(0,_0,_0,_0.7)]">
              Own other <br /> site
            </span>
          </div>
        </div>
      </div>
      <button onClick={handleNextClick} className="bg-teal-600 hover:bg-teal-800 w-full md:w-[440px] md:px-24 px-12 py-4 text-[22px] font-normal text-white tracking-[0.05rem] rounded-lg mt-5" >NEXT</button>
      <CredentialDailog
        isOpen={isCredentialDailogOpen}
        onClose={() => setIsCredentialDailogOpen(false)}
        title={CredentialDailogContent.title}
        content={CredentialDailogContent.content}
      />
    </div>
  );
};

export default LinkAccount;