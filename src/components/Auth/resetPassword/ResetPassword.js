import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SigninImg from '../../../assets/signin-image.svg';
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, loadUser, clearUser } from '@/redux/slice/userSlice';
import Loader from '@/components/Loader/Loader';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { FormControl, OutlinedInput, InputLabel, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';

const ResetPassword = ({ userToken }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');

  const { user, isLoading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      dispatch(loadUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
    if (error && error.message) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      dispatch(clearUser());
    }
  }, [user, error, router, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(resetPassword({ newPassword, confirmPassword, userToken }));
  };

  const handleClickShowPassword = () => setShowPassword(prev => !prev);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(prev => !prev);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleMouseUpPassword = event => {
    event.preventDefault();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <div>
        <div className='md:hidden pt-12 pl-10 w-full flex'>
          <IoChevronBackOutline
            className='bg-gray-50 rounded-full w-8 h-8 p-2'
            onClick={() => router.back()}
          />
        </div>
        <div className='pt-12 pl-12'>
          <Link href='/'>
            <Image src={LogoImage} alt="Logo" className='w-36' />
          </Link>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center items-start p-10">
        <div className="w-full min-w-[400px] min-h-[400px] h-full justify-center flex md:mt-10 p-5 ">
          <Image src={SigninImg} alt="Signin_Image" />
        </div>
        <div className="flex flex-col justify-center min-w-[250px] w-full p-5">
          <h1 className="text-3xl font-bold text-center">Set Password</h1>
          <p className='w-full text-normal text-gray-500 text-center py-3'>
            Please set the password that you will remember!
          </p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-3 ">
            <div className="flex flex-col w-full gap-3">
              <FormControl variant="outlined" className="w-full min-w-[250px] border bg-gray-100 rounded">
                <InputLabel htmlFor="outlined-adornment-password">New Password *</InputLabel>
                <OutlinedInput
                  error={error && error.message ? true : false}
                  id="standard-error-helper-text"
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setNewPassword(e.target.value)}
                  placeholder="********"
                  required
                  helperText={error && error.message ? 'Please write new password' : ''}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility"
                        onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} onMouseUp={handleMouseUpPassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="New Password *"
                />
              </FormControl>
              <FormControl variant="outlined" className="w-full min-w-[250px] border bg-gray-100 rounded">
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password *</InputLabel>
                <OutlinedInput
                  error={error && error.message ? true : false}
                  id="standard-error-helper-text"
                  type={showConfirmPassword ? 'text' : 'password'}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="********"
                  required
                  helperText={error && error.message ? 'Please write new password' : ''}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end">
                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password *"
                />
              </FormControl>
            </div>
            <button
              type="submit"
              className="bg-teal-500 w-full min-w-[250px] hover:bg-teal-700 text-white font-bold py-
            2 px-4 rounded py-3"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
