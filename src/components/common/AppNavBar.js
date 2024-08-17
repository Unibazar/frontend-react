'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import LogoImage from '../../../public/unibazar-logo.png';
import Link from 'next/link';
import './AppNavBar.css';
import '../ResponsiveStyle/Responsive.css'
function AppNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar-container ">
      <div className="logo-wrap">
        <Image src={LogoImage} alt="logo" className="navbar-logo"></Image>
      </div>

      <div className="hidden md:flex space-x-6 text-gray-600">
        <ul className="nav-links-ul">
          <li className="nav-link-item">
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-link-item">
            <Link href="/about-us">About</Link>
          </li>
          <li className="nav-link-item">
            <Link href="/">Features</Link>
          </li>
          <li className="nav-link-item">
            <Link href="/">Pricing</Link>
          </li>
          <li className="nav-link-item">
            <Link href="/contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="nav-buttons">
        <Link href="/sign-in" className="login-button">
          Login
        </Link>
        <a href="#register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800">
          Register
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-600 hover:text-teal-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <a href="#home" className="text-gray-600 hover:text-teal-700">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-teal-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-600 hover:text-teal-700">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-600 hover:text-teal-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-teal-700">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#login" className="text-gray-600 hover:text-teal-700">
                Login
              </a>
            </li>
            <li>
              <a href="#register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800">
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default AppNavBar;
