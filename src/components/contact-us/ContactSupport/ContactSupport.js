import React from 'react';
import Image from 'next/image';
import ContactSupportImg from '../../../assets/unibazar-contactus-images/contactSupport.svg';
import Link from 'next/link';
const ContactSupport = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col content-center justify-between lg:py-8">
        <div className=" pt-8">
          <p className="font-bold text-3xl">GET IN TOUCH WITH US</p>
          <p className="text-lg py-3 pb-8">
            We&apos;re Here To Help You With Any Questions Or <br />
            Support You Need
          </p>
          <Link href="#" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
            Contact Support
          </Link>
        </div>
        <div className="md:w-96 justify-center justify-items-center flex">
          <Image src={ContactSupportImg} alt="wait" className=""></Image>
        </div>
      </div>
    </>
  );
};

export default ContactSupport;
