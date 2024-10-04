'use client'
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import userImage from "../../../../public/userImage.png"
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loadUser } from '@/redux/slice/userSlice'


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    dispatch(loadUser());
  };

  return (
    <div>
        <div className='rounded-full w-8 md:w-12 h-8 md:h-12 cursor-pointer' id="basic-button" onClick={handleClick}>
          <Image height={40} width={40} className='rounded-full w-full h-full object-cover' src={userImage} alt="user Image" />
        </div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
        <MenuItem onClick={handleClose}>Manage account</MenuItem>
        <MenuItem onClick={()=>{handleClose(); handleLogout();}}>Logout</MenuItem>
      </Menu>
    </div>
  );
}