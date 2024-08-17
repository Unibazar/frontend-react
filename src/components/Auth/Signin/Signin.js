import React from 'react'
import Image from 'next/image'
import SigninImg from '../../../assets/signin-image.svg'
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png'
const Signin = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-around p-5">
        <div className="w-full md:w-1/2 p-5">
           <Image src={LogoImage} alt="Logo" />
          <Image src={SigninImg} alt="Signin_Image"></Image>
        </div>
        <div className="w-full md:w-1/2 p-5">
          <h1 className="text-3xl font-bold text-center">Sign In</h1>
          <form className="flex flex-col justify-center items-center">
            <input type="text" placeholder="Email" className="w-full p-2 mb-
            5 border border-gray-400 rounded-lg" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-
            5 border border-gray-400 rounded-lg" />
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-
            2 px-4 rounded">Sign In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin