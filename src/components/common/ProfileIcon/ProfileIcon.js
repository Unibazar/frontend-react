import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Link from 'next/link';
import Image from 'next/image';
import userImage from "../../../../public/userImage.png"
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loadUser } from '../../../redux/slice/userSlice';
import { useRouter } from 'next/router';

export default function ProfileIcon() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    toast.success('user logged out successfully!');

    dispatch(loadUser());
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <div className='rounded-full w-8 md:w-12 h-8 md:h-12 cursor-pointer' variant="contained" {...bindTrigger(popupState)}>
            <Image height={50} width={50} className='rounded-full w-full h-full object-cover' src={userImage} alt="user Image" />
          </div>
          <Menu {...bindMenu(popupState)}>
            <Link href="#"><MenuItem onClick={popupState.close}>Manage Account</MenuItem></Link>
            <MenuItem onClick={()=>{popupState.close; handleLogout()}}>Logout</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}