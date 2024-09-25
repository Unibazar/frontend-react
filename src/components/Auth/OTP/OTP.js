import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SigninImg from '../../../assets/signin-image.svg';
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';

import styles from './OTP.module.css';
const OTP = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  const [otp, setOtp] = useState(['', '', '', '']);
  const [email, setEmail] = useState('uihut@gmail.com');
  const [time, setTime] = useState(60); // 1 minute
  const [resend, setResend] = useState(false);

  useEffect(() => {
    let timerId;
    if (time > 0) {
      timerId = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      setResend(true);
    }
    return () => clearTimeout(timerId); // clean up the timer on unmount
  }, [time]); // re-run the effect when time changes

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // prevent entering more than one character
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    // Verify OTP logic here
  };

  const handleResend = () => {
    setResend(true);
    setTime(60); // reset timer
  };

  return (
    <>
      <div>
        <div className="md:hidden pt-12 pl-10  w-full flex">
          <IoChevronBackOutline className="bg-gray-50 rounded-full w-8 h-8 p-2 justify-center justify-items-center items-center" onClick={handleBackClick} />
        </div>
        <div className={`${styles.logo} pt-12 pl-12`}>
          <Link href="/">
            <Image src={LogoImage} alt="Logo" className="w-36" />
          </Link>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center justify-items-center items-start p-10">
        <div className={`${styles.mainimg} w-full md:ml-20 md:mt-10 p-5 `}>
          <Image src={SigninImg} alt="Signin_Image"></Image>
        </div>
        <div className=" md:mr-10 md:mt-16 md:pr-28  w-full p-5">
          <h1 className="text-3xl font-bold text-center">OTP Verification</h1>
          <p className="w-full text-normal text-gray-500 text-center py-3 pb-5">
            Please check your email {email} <br />
            to see the verification code
          </p>
          <form className="flex flex-col justify-center items-center gap-3">
            <p className="w-full text-2xl md:mt-5 font-bold text-left">OTP Code</p>
            <div className="w-full flex flex-row justify-around">
              <input type="text" value={otp[0]} onChange={e => handleOtpChange(0, e.target.value)} placeholder="0" className="w-10 h-10 text-center  rounded  bg-gray-200 " />
              <input type="text" value={otp[1]} onChange={e => handleOtpChange(1, e.target.value)} placeholder="0" className="w-10 h-10 text-center  rounded  bg-gray-200 " />
              <input type="text" value={otp[2]} onChange={e => handleOtpChange(2, e.target.value)} placeholder="0" className="w-10 h-10 text-center  rounded  bg-gray-200 " />
              <input type="text" value={otp[3]} onChange={e => handleOtpChange(3, e.target.value)} placeholder="0" className="w-10 h-10 text-center  rounded  bg-gray-200 " />
            </div>
            <button
              className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-
            2 px-4 rounded-2xl py-3"
              onClick={handleVerify}
            >
              Verify
            </button>
            <div className="w-full justify-between flex flex-row px-2">
              <p className="w-full text-gray-600 py-2 text-left">Resend code to {email}</p>
              {resend ? (
                <button className="bg-teal-500 w-20  hover:bg-teal-700 text-white font-bold  rounded-xl " onClick={handleResend}>
                  Resend
                </button>
              ) : (
                <p className="w-20  text-gray-600 py-2 text-right">{time} seconds</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OTP;
