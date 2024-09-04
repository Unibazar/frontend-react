import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function ProfileIcon() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <div className='rounded-full w-8 md:w-12 h-8 md:h-12' variant="contained" {...bindTrigger(popupState)}>
            <img className='rounded-full w-full h-full object-cover' src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Manage Account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}