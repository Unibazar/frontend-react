import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import SigninImg from '../../../assets/signin-image.svg';
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png';
import { IoChevronBackOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from './OTP.module.css';
import { useRouter } from 'next/router';
import { otpVerification } from '@/redux/slice/userSlice';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader/Loader';

const Otp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const { user, isLoading, error } = useSelector(state => state.user);
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const refs = useRef([]);

  const handleBackClick = () => {
    router.back();
  };

  useEffect(() => {
    if (user?.user.verified) {
      toast.success('User registered successfully!');
      router.replace('/dashboard');
    }
    if (error?.message) {
      toast.error(error.message);
    }
  }, [user, error, router]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;

      // Focus on the next input
      if (value && index < otp.length - 1) {
        refs.current[index + 1].focus();
      }

      setOtp(newOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      refs.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < otp.length - 1) {
      refs.current[index + 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      refs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData('text').split('');
    const newOtp = [...otp];

    pastedData.forEach((char, index) => {
      if (index < newOtp.length && /^\d$/.test(char)) {
        newOtp[index] = char;
        if (index < newOtp.length - 1) {
          refs.current[index + 1].focus();
        }
      }
    });

    setOtp(newOtp);
  };

  useEffect(() => {
    refs.current[0].focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(otpVerification(otp.join('')));
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(120);
    setCanResend(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div>
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
        <div className={`${styles.mainimg} w-full min-w-[400px] min-h-[400px] h-full justify-center flex md:mt-10 p-5`}>
          <Image src={SigninImg} alt="Signin_Image" />
        </div>
        <div className="flex flex-col justify-center min-w-[250px] w-full p-5">
          <h1 className="text-3xl font-bold text-center">OTP Verification</h1>
          <p className="w-full text-normal text-gray-500 text-center py-3">
            Please check your email {user?.user.email} <br /> we have sent OTP
          </p>
          <form id="otp-form" onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold w-64 m-auto">OTP Code</h1>
            <div className="flex items-center justify-center gap-3 p-2">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type='text'
                  className='w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-400'
                  maxLength="1"
                  ref={el => refs.current[index] = el}
                  value={value}
                  onPaste={handlePaste}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onChange={(e) => handleChange(e, index)}
                />
              ))}
            </div>
            <div className="max-w-[260px] mx-auto mt-4">
              <button type="submit" className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold px-4 rounded py-3">
                Verify
              </button>
            </div>
            <div className="text-center mt-4">
              {timeLeft > 0 ? (
                <p className="text-gray-500">
                  Resend OTP in {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
                </p>
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
