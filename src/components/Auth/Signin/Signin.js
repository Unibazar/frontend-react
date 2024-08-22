import React from 'react'
import Image from 'next/image'
import SigninImg from '../../../assets/signin-image.svg'
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png'
import FbImg from '../../../assets/fb.png'
import AppleImg from '../../../assets/apple.png'
import GoogleImg from '../../../assets/google.png'
import {IoMdEyeOff} from 'react-icons/io'
import Link from 'next/link'
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from 'next/router';

import styles from './SignIn.module.css'
const Signin = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };  
  return (
    <>
      <div >
        <div className='md:hidden pt-12 pl-10  w-full flex'>
        <IoChevronBackOutline className='bg-gray-50 rounded-full w-8 h-8 p-2 justify-center justify-items-center items-center' onClick={handleBackClick}/>
        </div>
        <div className={`${styles.logo} pt-12 pl-12`}>
        <Link href='/'><Image src={LogoImage} alt="Logo" className='w-36' /></Link> 
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center justify-items-center items-start p-10">
        <div className={`${styles.mainimg} w-full md:ml-20 md:mt-10 p-5 `}>
          
          <Image src={SigninImg} alt="Signin_Image" ></Image>
        </div>
        <div className=" md:mr-10 md:pr-28  w-full p-5">
          <h1 className="text-3xl font-bold text-center">Sign In</h1>
          <p className='w-full text-normal text-gray-500 text-center py-3'>Please sign in to continue our app</p>
          <form className="flex flex-col justify-center items-center gap-3">
            <input type="text" placeholder="Email" className="w-full p-2 mb-
            5 border bg-gray-100 rounded-2xl " />
            <div className='w-full flex flex-row justify-between p-2  border bg-gray-100 rounded-2xl'>
              <input type="password" placeholder="Password" className="w-auto outline-0 border-0 bg-gray-100 " />
              <div className=' w-auto items-center'>
                <IoMdEyeOff style={{'color':'gray'}}/>
              </div>
            </div>
           
           {/* <VisibilityOffIcon className='absolute z-20'></VisibilityOffIcon>*/}
            <p className='w-full text-normal text-blue-500 text-right p-1 pb-2'><Link href='/forgot-password' >Forget Password?</Link></p>
            <button className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-
            2 px-4 rounded-2xl py-3">Sign In</button>
            <p className='w-full text-gray-600 py-5 text-center'>Don't have an account ? <Link href='/register' className='text-blue-500'>Sign up</Link><br/>Or connect</p>
            <div className='w-full flex md:flex-row items-center justify-center justify-items-center gap-1 py-3'>
              <Image src={FbImg} alt='facbook-image'></Image>
              <Image src={AppleImg} alt='facbook-image'></Image>
              <Image src={GoogleImg} alt='facbook-image'></Image>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin