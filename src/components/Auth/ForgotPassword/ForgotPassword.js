import React, { useState } from 'react'
import Image from 'next/image'
import SigninImg from '../../../assets/signin-image.svg'
import ForgotPassImg from '../../../assets/forgotPass.png'
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png'
import Link from 'next/link'

import styles from './ForgotPassword.module.css'

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
      justifyContent:'center',
      alignItems:'center',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    },
  };

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupcontent}>
        <div className='w-full items-center justify-center justify-items-center flex'>
        <Image src={ForgotPassImg} alt='forgot password image'></Image>
        </div>
        <p className='text-bold text-xl text-center py-2 pt-1'>Check your email</p>
        <p className='text-normal text-gray-500 text-center'>We have send password recovery <br/> instruction to your email</p>
        <button onClick={onClose}></button>
      </div>
    </div>
  );
}

function ForgotPassword() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
       <div >
        <div className={`${styles.logo} pt-12 pl-12`}>
        <Link href='/'><Image src={LogoImage} alt="Logo" className='w-36' /></Link> 
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center justify-items-center items-start p-10">
        <div className={`${styles.mainimg} w-full md:ml-20 md:mt-10 p-5 `}>
          <Image src={SigninImg} alt="Signin_Image" />
        </div>
        <div className=" md:mr-10 md:pr-28 md:mt-20 justify-center justify-items-center items-center w-full p-5">
          <h1 className="text-3xl font-bold text-center">Forgot password</h1>
          <p className='w-full text-normal text-gray-500 text-center py-3 pb-10'>Enter your email account to reset <br/>your password</p>
          <div className="flex flex-col justify-center items-center gap-3">
            <input type="text" placeholder="Email" className="w-full p-2 mb-5 border bg-gray-100 rounded-2xl " />
           
           {/* <VisibilityOffIcon className='absolute z-20'></VisibilityOffIcon>*/}
            <button type="button" onClick={(e) => {
                e.preventDefault();
                togglePopup();
              }} className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold px-4 rounded-2xl py-3">Reset Password</button>
            
          </div>
        </div>
        {isPopupVisible && <Popup onClose={togglePopup} />}
      </div>
    </>
  );
}

export default ForgotPassword;