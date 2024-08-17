import React from 'react'
import Image from 'next/image'
import SigninImg from '../../../assets/signin-image.svg'
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png'
import FbImg from '../../../assets/fb.png'
import AppleImg from '../../../assets/apple.png'
import GoogleImg from '../../../assets/google.png'

import './Signin.css'
const Signin = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-around p-5">
        <div className="w-full  p-5 mainimg">
          {/*<Image src={LogoImage} alt="Logo" className='w-20' />*/}
          <Image src={SigninImg} alt="Signin_Image" ></Image>
        </div>
        <div className="w-full  p-5">
          <h1 className="text-3xl font-bold text-center">Sign In</h1>
          <p className='w-full text-normal text-gray-500 text-center py-3'>Please sign in to continue our app</p>
          <form className="flex flex-col justify-center items-center gap-3">
            <input type="text" placeholder="Email" className="w-full p-2 mb-
            5 border bg-gray-100 rounded-2xl " />
            <input type="password" placeholder="Password" className="w-full p-2 mb-
            5 border bg-gray-100 rounded-2xl " />
           
           {/* <VisibilityOffIcon className='absolute z-20'></VisibilityOffIcon>*/}
            <p className='w-full text-normal text-blue-500 text-right py-3'>Forget Password?</p>
            <button className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-
            2 px-4 rounded-2xl py-3">Sign In</button>
            <p className='w-full text-gray-600 py-5 text-center'>Don't have an account ? <a href='' className='text-blue-500'>Sign up</a><br/>Or connect</p>
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