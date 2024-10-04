"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LogoImage from '../../../../public/unibazar-logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '@/redux/slice/userSlice';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import styles from './AppNavBar.module.css';
import profileImg from '../../../../public/userImage.png'
function AppNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { user, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const handleLogout = () => {

    localStorage.removeItem('jwtToken');
    setSnackbarMessage('user logged out successfully!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);

    dispatch(loadUser());

  }

  const pathname = usePathname();
  const isActive = href => pathname === href;

  return (
    <>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <nav className={styles.navbarContainer}>
        <Link href="/" className={styles.logoWrap}>
          <Image src={LogoImage} alt="logo" className={styles.navbarLogo}></Image>
        </Link>

        <div className="hidden md:flex space-x-6 text-gray-600">
          <ul className={styles.navLinksUl}>
            <li className={styles.navLinkItem}>
              <Link href="/" className={isActive('/') ? ' text-teal-500' : 'text-gray-600'}>
                <span>Home</span>
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link href="/about-us" className={isActive('/about-us') ? ' text-teal-500' : 'text-gray-600'}>
                About
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link href="/features" className={isActive('/features') ? ' text-teal-500' : 'text-gray-600'}>
                Features
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link href="/pricing" className={isActive('/pricing') ? ' text-teal-500' : 'text-gray-600'}>
                Pricing
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link href="/contact-us" className={isActive('/contact-us') ? ' text-teal-500' : 'text-gray-600'}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        {
          user ? (
            <div className={styles.profileContainer} onClick={toggleDropdown}>
              <Image
                className={styles.profileImg}
                src={profileImg}
                alt="Profile Image"
                width={40}
                height={40}
              />
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <Link href="/account-management" className={styles.dropdownItem}>
                    Account Management
                  </Link>
                  <button onClick={handleLogout} className={styles.dropdownItem}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) :
            <div className={styles.navButtons}>
              <Link href="/login" className={styles.loginButton}>
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800">
                Register
              </Link>
            </div>
        }


        {!user && <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-teal-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>}

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
            <ul className="flex flex-col items-center space-y-4 p-4">
              <li>
                <Link href="/" className={`${isActive('/') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className={`${isActive('/about-us') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/features" className={`${isActive('/features') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={`${isActive('/pricing') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className={`${isActive('/contact-us') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/login" className={`${isActive('/login') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default AppNavBar;
