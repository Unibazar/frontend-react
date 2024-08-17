import React from 'react'
import Image from 'next/image';
import SignupImage from '../../assets/unibazar-contactus-images/signup-img.png'
const Signup = () => {
  return (
    <>
      <div className='bg-teal-100 w-full flex md:flex-row flex-col justify-around'>
        <Image src={SignupImage} alt="wait.."></Image>
        <div className="w-full py-5">
          <p className='p-3 text-3xl'>
            All-in-one Platform <br/> to manage and grow your Business
          </p>
          <p className='p-3'>
            Organize your business with 24/7 automated yor products, <br/> reminders, payments, and more.
          </p>
          <div className="nav-buttons p-3">
            <a href="#" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">Signup for Free</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup