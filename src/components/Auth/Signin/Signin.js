import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SigninImg from '../../../assets/signin-image.svg';
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png';
import FbImg from '../../../assets/fb.png';
import AppleImg from '../../../assets/apple.png';
import GoogleImg from '../../../assets/google.png';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';

import styles from './SignIn.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, loadUser, clearUser } from '@/redux/slice/userSlice';
import Loader from '@/components/Loader/Loader';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Signin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { user, isLoading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const router = useRouter();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');


  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };


  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      dispatch(loadUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      // console.log('hii');
      setSnackbarMessage('User logged in successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      router.replace('/dashboard');
    }

    if (error && error.message) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      dispatch(clearUser());
    }
  }, [user, error, router, dispatch]);

  const [showPassword, setShowPassword] = React.useState(false);


  const handleMouseUpPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <div>
        <div className="md:hidden pt-12 pl-10  w-full flex">
          <IoChevronBackOutline className="bg-gray-50 rounded-full w-8 h-8 p-2 justify-center justify-items-center items-center" onClick={handleBackClick} />
        </div>
        <div className={`${styles.logo} pt-12 pl-12`}>
          <Link href="/">
            <Image src={LogoImage} alt="Logo" className="w-36" />
          </Link>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center justify-items-center items-start p-10">
        <div className={`${styles.mainimg} w-full min-w-[400px] min-h-[400px] h-full justify-center flex md:mt-10 p-5  `}>
          <Image src={SigninImg} alt="Signin_Image"></Image>
        </div>
        <div className=" flex flex-col justify-center min-w-[250px] w-full p-5">
          <h1 className="text-3xl font-bold text-center">Sign In</h1>
          <p className="w-full text-normal text-gray-500 text-center py-3">Please sign in to continue our app</p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-1 ">
            <div className="flex flex-col w-full gap-3">
              <FormControl variant="outlined" className="w-full min-w-[250px] border bg-gray-100 rounded">
                <InputLabel htmlFor="outlined-adornment-email">Email *</InputLabel>
                <OutlinedInput
                  error={error && error.message ? true : false}
                  id="standard-error-helper-text"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  placeholder="jhon@gmail.com"
                  required
                  helperText={error && error.message ? 'incorrect email' : ''}
                  startAdornment={
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  }
                  label="email"
                />
              </FormControl>
              <FormControl variant="outlined" className="w-full min-w-[250px] border bg-gray-100 rounded">
                <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
                <OutlinedInput
                  error={error && error.message ? true : false}
                  id="standard-error-helper-text"
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  helperText={error && error.message ? 'incorrect password' : ''}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} onMouseUp={handleMouseUpPassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password *"
                />
              </FormControl>
            </div>
            {/* <VisibilityOffIcon className='absolute z-20'></VisibilityOffIcon>*/}
            <p className="w-full min-w-[250px] text-normal text-blue-500 text-right p-1 pb-2">
              <Link href="/forgot-password">Forget Password?</Link>
            </p>
            <button
              type="submit"
              className="bg-teal-500 w-full min-w-[250px] hover:bg-teal-700 text-white font-bold py-
            2 px-4 rounded-xl py-3"
            >
              Sign In
            </button>
            <p className="w-full min-w-[250px] text-gray-600 py-5 text-center">
              Don't have an account ?{' '}
              <Link href="/register" className="text-blue-500">
                Sign up
              </Link>
              <br />
              Or connect
            </p>
            <div className="w-full min-w-[250px] flex md:flex-row items-center justify-center justify-items-center gap-1 py-3">
              <Image src={FbImg} alt="facbook-image"></Image>
              <Image src={AppleImg} alt="facbook-image"></Image>
              <Image src={GoogleImg} alt="facbook-image"></Image>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
