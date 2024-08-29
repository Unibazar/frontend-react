"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import LogoImage from '../../../public/unibazar-logo.png';
import Link from 'next/link';
import styles from './AppNavBar.module.css';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '@/redux/slice/userSlice';
import { Button, Drawer} from '@mui/material';
import DrawerList from './DrawerList/DrawerList';


function AppNavBar() {

  const { user, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const handleLogout = () => {

    localStorage.removeItem('jwtToken');

    dispatch(loadUser());

  }

  const pathname = usePathname();
  const isActive = href => pathname === href;

  const [DrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  
  return (
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
        user ? <button className={styles.loginButton} onClick={() => handleLogout()}> Logout </button> :
          <div className={styles.navButtons}>
            <Link href="/login" className={styles.loginButton}>
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800">
              Register
            </Link>
          </div>
      }
  

      <Button onClick={toggleDrawer(true)} className='text-black md:hidden'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={DrawerOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
      </Button>
      <Drawer anchor={'top'} open={DrawerOpen} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} isActive={isActive}/>
      </Drawer>
    </nav>
  );
}

export default AppNavBar;
