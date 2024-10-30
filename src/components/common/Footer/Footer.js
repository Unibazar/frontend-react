import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import logo from '../../../assets/unibazar_logo.svg';
import styles from './Footer.module.css'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5">
        <div className="p-5 max-w-md">
          <ul>
            <li className=' md:w-16 w-16'>
              <Link href='/'><Image src={logo} alt="logo"></Image></Link>
            </li>
            <li className="text-gray-600 font-light text-1xl pb-4 pt-4 ">Unibazar is online platform which is used to sell your products from various E-commerce platforms.</li>
            <li className="flex gap-6 pb-4">
              {/* Section for icons */}
              <FaInstagram className="text-1xl cursor-pointer hover:text-yellow-600" />
              <FaXTwitter className="text-1xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-1xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-1xl cursor-pointer hover:text-red-600" />
            </li>
          </ul>
        </div>
        <div className={`${styles.companySupport} flex md:flex-row justify-between `}>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-1xl pb-4">COMPANY</p>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer"><Link href='/about-us'>About us</Link></li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer"><Link href='/blog'>Blog</Link></li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer"><Link href='/contact-us'>Contact us</Link></li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer"><Link href='/pricing'>Pricing</Link></li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer"><Link href='/testimonials'>Testimonials</Link></li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-1xl pb-4">SUPPORT</p>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer"><Link href='/help-center'>Help center</Link></li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer"><Link href='/term-and-conditions'>Terms of service</Link></li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer"><Link href='/legal-information'>Legal</Link></li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer"><Link href='/privacy-and-policy'>Privacy policy</Link></li>
            </ul>
          </div>
        </div>
        <div className={`${styles.contactInfo} p-5`}>
          <ul>
            <p className="text-gray-800 font-bold text-1xl pb-4 ">CONTACT INFO</p>
            <li className="text-gray-600 text-md pb-2 font-light ">Phone: <span className='hover:text-blue-500 cursor-pointer'><Link href="tel:+91-123-456-7890">+91-123-456-7890</Link></span></li>
            <li className="text-gray-600 text-md pb-2 font-light ">
              Email: <span className='hover:text-blue-500 cursor-pointer'><Link href="mailto:support@unibazar.com">support@unibazar.com</Link></span>
            </li>
            <li className="text-gray-600 text-md pb-2 font-light ">Location: <span className='hover:text-blue-500 cursor-pointer'><Link href="https://www.google.com/maps/search/123 E-commerce St, Business City, India" target='_blank' rel='noopener noreferrer'>123 E-commerce St, Business City, India</Link></span></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
