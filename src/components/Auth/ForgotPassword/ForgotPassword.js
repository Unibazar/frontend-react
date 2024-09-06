import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SigninImg from '../../../assets/signin-image.svg';
import ForgotPassImg from '../../../assets/forgotPass.png';
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import styles from './ForgotPassword.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '@/redux/slice/userSlice';
import Loader from '@/components/Loader/Loader';
import { toast } from 'react-toastify';

function Popup({ onClose }) {
  const styles = {
    popupOverlay: {
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
    popupcontent: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    },
  };

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupcontent}>
        <div className="w-full items-center justify-center justify-items-center flex">
          <Image src={ForgotPassImg} alt="forgot password image"></Image>
        </div>
        <p className="text-bold text-xl text-center py-2 pt-1">Check your email</p>
        <p className="text-normal text-gray-500 text-center">
          We have send password recovery <br /> instruction to your email
        </p>
        <button onClick={onClose}></button>
      </div>
    </div>
  );
}

function ForgotPassword() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [email, setEmail] = useState('');

  const { user, isLoading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.success) {
      togglePopup();
    }

    if (error && error.message) {
      toast.error(error.message);
    }
  }, [user, error]);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      {isLoading && <Loader />}
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
          <Image src={SigninImg} alt="Signin_Image" />
        </div>
        <div className=" md:mr-10 md:pr-28 md:mt-20 justify-center justify-items-center items-center w-full p-5">
          <h1 className="text-3xl font-bold text-center">Forgot password</h1>
          <p className="w-full text-normal text-gray-500 text-center py-3 pb-10">
            Enter your email account to reset <br />
            your password
          </p>
          <form className="flex flex-col justify-center items-center gap-5">
            <TextField type="email" id="outlined-uncontrolled" label="Email" className="md:w-[500px] w-[380px] border bg-gray-100 rounded " onChange={e => setEmail(e.target.value)} required />

            {/* <VisibilityOffIcon className='absolute z-20'></VisibilityOffIcon>*/}
            <button
              type="button"
              onClick={e => {
                e.preventDefault();
                dispatch(forgetPassword(email));
              }}
              className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold px-4 rounded-xl py-3"
            >
              Reset Password
            </button>
          </form>
        </div>
        {isPopupVisible && <Popup onClose={togglePopup} />}
      </div>
    </>
  );
}

export default ForgotPassword;
