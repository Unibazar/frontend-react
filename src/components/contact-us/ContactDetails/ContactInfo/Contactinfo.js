import React from 'react'
import Image from 'next/image';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationImg from '../../../../assets/unibazar-contactus-images/map.png'
import Bgcircle1 from '../../../../assets/unibazar-contactus-images/bgCircle/Ellipse 793.png'
import Bgcircle2 from '../../../../assets/unibazar-contactus-images/bgCircle/Ellipse 794.png'
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
const Contactinfo = () => {
  return (
    <>
      <div className="bg-teal-500 w-full flex rounded-xl md:flex-col text-white text-left mr-2">
        <div className=" p-5">
          <p className="text-3xl">Contact Information</p>
          <p className='text-normal '>say someting to start a live chat !</p>
        </div>
        <div className='p-5'>
          <div className='flex md:flex-row'>
            <PhoneInTalkIcon className='filled'></PhoneInTalkIcon>
            <p className='text-normal pl-2'>+91-123-456-7890</p>
          </div>
          <div className='flex md:flex-row '>
            <EmailIcon className='filled'></EmailIcon>
            <p className='text-normal pl-2'>support@unibazar.com</p>
          </div>
          <div className='flex md:flex-row '>
            <LocationOnIcon className='filled '></LocationOnIcon>
            <p className='text-normal pl-2'>123 E-commerce St, Business City, India</p>
          </div>
        </div>
        <div className='p-5'>
          <p className='text-normal'>
          Note: Our support team is available Monday to Friday, 
          </p>
          <p className='font-bold text-xl'>9 AM TO 6PM IST</p>
        </div>
        <div className='w-full relative p-5'>
          <div className='w-full absolute z-10 flex md:flex-col justify-end justify-items-end items-end pt-24'>
            <Image src={Bgcircle2} alt='bg-circle' className='z-10'></Image>
            <Image src={Bgcircle1} alt='bg-circle' className='z-20'></Image>
          </div>
          <Image src={LocationImg} alt='map' className='w-full object-cover pr-16' ></Image>
                       {/* Section for icons */}
          <div className="flex gap-6 pt-16">
              <FaXTwitter className="text-1xl cursor-pointer rounded-full hover:text-blue-600" />
              <FaInstagram className="text-1xl cursor-pointer rounded-full hover:text-yellow-600" />
              <FaFacebook className="text-1xl cursor-pointer rounded-full hover:text-blue-600" />
              <FaLinkedin className="text-1xl cursor-pointer rounded-full hover:text-blue-600" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Contactinfo