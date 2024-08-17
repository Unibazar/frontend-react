import React from 'react'
import Image from 'next/image'
import ContactSupportImg from '../../../assets/unibazar-contactus-images/contactSupport.svg'
import './ContactSupport.css'
const ContactSupport = () => {
  return (
    <>
      <div className='w-full flex md:flex-row flex-col justify-around p-5'>
        <div className='p-5'>
          <p className='font-bold text-3xl'>GET IN TOUCH WITH US</p>
          <p className='text-lg'>We're Here To Help You With Any Questions Or Support You Need</p>
          <button type='button' className='bg-teal-700 rounded-xl text-white'>Contact Support</button>
        </div>
        <Image src={ContactSupportImg} alt='wait' className='p-5'></Image>
      </div>
    </>
  )
}

export default ContactSupport