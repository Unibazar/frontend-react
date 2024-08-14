import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import logo from '../../assets/unibazar_logo.png';
const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5">
        <div className="p-5 max-w-md">
          <ul>
            <Image src={logo} alt="logo"></Image>
            <p className="text-gray-600 font-light text-1xl pb-4 pt-4 ">Unibazar is online platform which is used to sell your products from various E-commerce platforms.</p>
            <div className="flex gap-6 pb-4">
              {/* Section for icons */}
              <FaInstagram className="text-1xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-1xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-1xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-1xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className=" flex md:flex-row justify-between ">
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-normal text-1xl pb-4">COMPANY</p>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">About us</li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Blog</li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Contact us</li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Pricing</li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Testimonials</li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-normal text-1xl pb-4">SUPPORT</p>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Help center</li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Terms of service</li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Legal</li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Privacy policy</li>
              <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Status</li>
            </ul>
          </div>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-normal text-1xl pb-4 ">CONTACT INFO</p>
            <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Phone: +91-123-456-7890</li>
            <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">
              Email: <a href="">support@unibazar.com</a>
            </li>
            <li className="text-gray-600 text-md pb-2 font-light hover:text-blue-500 cursor-pointer">Location:123 E-commerce St, Business City, India</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
