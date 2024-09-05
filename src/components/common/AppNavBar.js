'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LogoImage from '../../../public/unibazar-logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import { Button, Drawer } from '@mui/material';
import DrawerList from './DrawerList/DrawerList';
import ProfileIcon from './ProfileIcon/ProfileIcon';

function AppNavBar() {
  const { user, isLoading, error } = useSelector(state => state.user);
 
  const pathname = usePathname();
  const isActive = href => pathname === href;

  const [DrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setDrawerOpen(newOpen);
  };

  return (
    <nav className={`flex justify-between items-center py-4 px-4 md:px-16 border-b-2 ${user && "flex-row-reverse md:flex-row"} `}>
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
        <ProfileIcon/>
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

      <div className='md:hidden'>
        <Button onClick={toggleDrawer(true)} >
          <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={DrawerOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
        </Button>
        <Drawer anchor={`${user?"left":"right"}`} className="md:hidden" open={DrawerOpen} onClose={toggleDrawer(false)}>
          <DrawerList toggleDrawer={toggleDrawer} isActive={isActive} />
        </Drawer>
      </div>
    </nav>
  );
}

export default AppNavBar;
