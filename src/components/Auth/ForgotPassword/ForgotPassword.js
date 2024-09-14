import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import SigninImg from '../../../assets/signin-image.svg';
import ForgotPassImg from '../../../assets/forgotPass.png';
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '@/redux/slice/userSlice';
import Loader from '@/components/Loader/Loader';
import { toast } from 'react-toastify';

import styles from './ForgotPassword.module.css';

function Popup({ onClose }) {
  const popupStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    closeButton: {
      marginTop: '10px',
      padding: '10px',
      border: 'none',
      backgroundColor: '#0070f3',
      color: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={popupStyles.overlay}>
      <div style={popupStyles.content}>
        <div className="flex justify-center">
          <Image src={ForgotPassImg} alt="Forgot Password" />
        </div>
        <p className="text-xl font-bold mt-4">Check your email</p>
        <p className="text-gray-500 mt-2">
          We have sent password recovery <br /> instructions to your email.
        </p>
        <button style={popupStyles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

function ForgotPassword() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [email, setEmail] = useState('');

  const { user, isLoading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  // useCallback to avoid creating a new function on every render
  const togglePopup = useCallback(() => {
    setIsPopupVisible(prev => !prev);
  }, []);

  useEffect(() => {
    if (user?.success) {
      togglePopup();
    }

    if (error?.message) {
      toast.error(error.message);
    }
  }, [user, error, togglePopup]);

  const handleBackClick = () => {
    router.back();
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="relative">
        <div className="md:hidden pt-12 pl-10 flex">
          <IoChevronBackOutline className="bg-gray-50 rounded-full w-8 h-8 p-2" onClick={handleBackClick} />
        </div>
        <div className={`${styles.logo} pt-12 pl-12`}>
          <Link href="/">
            <a>
              <Image src={LogoImage} alt="Logo" className="w-36" />
            </a>
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-start p-10">
          <div className={`${styles.mainimg} w-full md:ml-20 p-5`}>
            <Image src={SigninImg} alt="Signin" />
          </div>
          <div className="md:mr-10 md:pr-28 p-5 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
            <p className="w-full text-gray-500 text-center py-3 pb-10">Enter your email to reset your password</p>
            <form className="w-full flex flex-col items-center gap-3" onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 mb-5 border bg-gray-100 rounded-2xl" required />
              <button type="submit" className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold px-4 rounded-2xl py-3">
                Reset Password
              </button>
            </form>
          </div>
          {isPopupVisible && <Popup onClose={togglePopup} />}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
