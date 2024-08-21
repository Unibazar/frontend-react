import React from 'react'
import Contactinfo from './ContactInfo/Contactinfo'
import ContactInput from './ContactInput/ContactInput'
const ContactDetails = () => {
  return (
    <>
      <div className='w-full justify-around text-center items-center p-5'>
        <p className='font-bold text-xl'>Contact Us</p>
        <p className='text-lg text-gray-600'>Any question or remarks? just write us a message!</p>
        <div className='w-full flex md:flex-row flex-col justify-around p-3 pt-10'>
          <Contactinfo/>
          <ContactInput/>
        </div>
      </div>
    </>
  )
}

export default ContactDetails