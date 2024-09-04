'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LogoImage from '../../../public/unibazar-logo.png';
import profileImg from '../../../public/profileImg.png';
import Link from 'next/link';
import styles from './AppNavBar.module.css';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '@/redux/slice/userSlice';
import { toast } from 'react-toastify';
import { Button, Drawer } from '@mui/material';
import DrawerList from './DrawerList/DrawerList';

function AppNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { user, isLoading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    toast.success('user logged out successfully!');

    dispatch(loadUser());
  };

  const pathname = usePathname();
  const isActive = href => pathname === href;

  const [DrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setDrawerOpen(newOpen);
  };

  return (
    <nav className={`flex justify-between items-center py-5 px-4 md:px-16 border-b-2 ${user && "flex-row-reverse md:flex-row"} `}>
      <Link href="/" className={`w-[170px] md:w-[200px] ${user && "hidden md:inline"}`}>
        <Image src={LogoImage} alt="logo" className='w-full h-full'></Image>
      </Link>

      <div className="hidden md:flex space-x-6 text-gray-600">
        <ul className="flex gap-4">
          <li className="text-lg py-2">
            <Link href="/" className={isActive('/') ? ' text-teal-500' : 'text-gray-600'}>
              <span>Home</span>
            </Link>
          </li>
          <li className="text-lg py-2">
            <Link href="/about-us" className={isActive('/about-us') ? ' text-teal-500' : 'text-gray-600'}>
              About
            </Link>
          </li>
          <li className="text-lg py-2">
            <Link href="/features" className={isActive('/features') ? ' text-teal-500' : 'text-gray-600'}>
              Features
            </Link>
          </li>
          <li className="text-lg py-2">
            <Link href="/pricing" className={isActive('/pricing') ? ' text-teal-500' : 'text-gray-600'}>
              Pricing
            </Link>
          </li>
          <li className="text-lg py-2">
            <Link href="/contact-us" className={isActive('/contact-us') ? ' text-teal-500' : 'text-gray-600'}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      
      {user ? (
        <div className={styles.profileContainer} onClick={toggleDropdown}>
          <Image className={styles.profileImg} src={profileImg} alt="Profile Image" width={40} height={40} />
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
      ) : (
        <div className="hidden gap-4 items-center md:flex">
          <Link href="/login" className="px-5 py-2 rounded-md bg-zinc-200">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800">
            Register
          </Link>
        </div>
      )}

      <Button onClick={toggleDrawer(true)} className="text-black md:hidden">
        <svg className="w-6 h-6 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={DrawerOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
        </svg>
      </Button>
      <Drawer anchor={`${user?"left":"right"}`} className="md:hidden" open={DrawerOpen} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} isActive={isActive} />
      </Drawer>
    </nav>
  );
}

export default AppNavBar;
