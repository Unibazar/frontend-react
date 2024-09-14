import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import SigninImg from '../../../assets/signin-image.svg';
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png';
// import SigninImg from '../../assets/signin-image.svg';
// import LogoImage from '../../assets/unibazar-home-images/unibazarlogo.png';
import { IoChevronBackOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Otp.module.css';
import { useRouter } from 'next/router';
import { otpVerification } from '@/redux/slice/userSlice';
import Loader from '../../Loader/Loader';
import { toast } from 'react-toastify';

const Otp = () => {
  const { user, isLoading, error } = useSelector(state => state.user);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds for 2 minutes
  const [canResend, setCanResend] = useState(false); // State to control the resend button
  const router = useRouter();
  const dispatch = useDispatch();

  // Timer logic with useCallback to avoid recreating the function on every render
  const updateTimer = useCallback(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    updateTimer();
  }, [updateTimer]);

  useEffect(() => {
    if (user?.user?.verified) {
      toast.success('User registered successfully!');
      router.replace('/dashboard');
    }

    if (error?.message) {
      toast.error(error.message);
    }
  }, [user, error, router]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(otpVerification(otp.join('')));
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== '' && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleResend = () => {
    // Add logic for resending OTP here
    setTimeLeft(120); // Reset the timer to 2 minutes
    setCanResend(false); // Disable the resend button
  };

  const formatTimeLeft = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="relative">
        <div className="md:hidden pt-12 pl-10 w-full flex">
          <IoChevronBackOutline className="bg-gray-50 rounded-full w-8 h-8 p-2" onClick={handleBackClick} />
        </div>
        <div className={`${styles.logo} pt-12 pl-12`}>
          <Link href="/">
            <Image src={LogoImage} alt="Logo" className="w-36" />
          </Link>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-around p-10">
        <div className={`${styles.mainimg} w-full md:ml-20 p-5`}>
          <Image src={SigninImg} alt="Signin" />
        </div>
        <div className="md:mr-10 md:pr-28 w-full p-5">
          <h1 className="text-3xl font-bold text-center">OTP Verification</h1>
          <p className="text-gray-500 text-center py-3">
            Please check your email {user?.user?.email} <br /> We have sent an OTP
          </p>
          <form id="otp-form" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold w-64 mx-auto">OTP Code</h2>
            <div className="flex items-center justify-center gap-3">
              {[0, 1, 2, 3].map((_, index) => (
                <input key={index} id={`otp-${index}`} type="text" inputMode="numeric" pattern="\d*" maxLength="1" className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" value={otp[index]} onChange={e => handleOtpChange(e, index)} disabled={index > 0 && otp[index - 1] === ''} />
              ))}
            </div>
            <div className="max-w-[260px] mx-auto mt-4">
              <button type="submit" className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-2xl">
                Verify
              </button>
            </div>
            <div className="text-center mt-4">
              {timeLeft > 0 ? (
                <p className="text-gray-500">Resend OTP in {formatTimeLeft(timeLeft)}</p>
              ) : (
                <button onClick={handleResend} className={`text-teal-500 hover:text-teal-700 ${canResend ? '' : 'opacity-50 cursor-not-allowed'}`} disabled={!canResend}>
                  Resend OTP
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Otp;
