import React from 'react';
import Image from 'next/image';
import ContactSupportImg from '../../../assets/unibazar-contactus-images/contactSupport.svg';
import Link from 'next/link';
const ContactSupport = () => {
  return (
    <>

<div className=" w-full flex md:flex-row flex-col justify-between items-center  ">
        <div className=" w-full justify-items-end items-end md:pt-10">
          <h1 className="w-full font-bold uppercase text-4xl p-3">
          GET IN TOUCH WITH US
          </h1>
          <p className="w-full capitalize text-base font-thin mb-4 p-3">
          We&apos;re Here To Help You With Any Questions Or <br />
          Support You Need
          </p>
          <div className="pt-3 p-3">
            <Link href="/register" className="px-12 py-4 text-white text-lg font-thin bg-teal-500 rounded-xl hover:bg-teal-600 ">
            Contact Support
            </Link>
          </div>
          <br />
          <br />
        </div>

        <div className=" md:w-3/5 w-full justify-center md:justify-right ">
          <Image src={ContactSupportImg} alt="hero-image.."></Image>
        </div>
      </div>
    </>
  );
};

export default ContactSupport;
