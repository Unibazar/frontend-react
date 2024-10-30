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
import styles from './SignUp.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { register, loadUser, clearUser } from '@/redux/slice/userSlice';
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
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const router = useRouter();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');


  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleMouseUpPassword = event => {
    event.preventDefault();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const { user, isLoading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  // password validation
  const validatePassword = (password) => {
    const errors = [];

    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }

    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one capital letter');
    }

    if (!/[^a-zA-Z0-9]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }

    if (!/[0-9]/.test(password)) {
      errors.push('Password must contain at least one number');
    }

    return errors;
  };



  const onchangeData = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'password') {
      const passwordErrors = validatePassword(value);
      if (passwordErrors.length > 0) {
        setSnackbarMessage(passwordErrors.join(', '));
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    }

    setUser({ ...data, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const passwordErrors = validatePassword(data.password);
    if (passwordErrors.length > 0) {
      setSnackbarMessage(passwordErrors.join(', '));
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } else {
      dispatch(register(data));
    }
  };

  // password strength
  const passwordStrength = () => {
    const password = data.password;
    let strength = 0;

    if (password.length >= 8) {
      strength += 1;
    }

    if (/[A-Z]/.test(password)) {
      strength += 1;
    }

    if (/[a-z]/.test(password)) {
      strength += 1;
    }

    if (/[0-9]/.test(password)) {
      strength += 1;
    }

    if (/[!@#$%^&*()_+=[\]{};':"\\|,.<>?]/.test(password)) {
      strength += 1;
    }

    return strength;
  };

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      dispatch(loadUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (user && user.success) {
      setSnackbarMessage('Otp send successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      router.replace('/otp');
    }

    if (error && error.message) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      dispatch(clearUser());
    }
  }, [user, error, router, dispatch]);

  const handleBackClick = () => {
    router.back();
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
      <div className="w-full flex md:flex-row flex-col justify-around p-10">
        <div className={`${styles.mainimg} w-full min-w-[400px] min-h-[400px] h-full justify-center flex md:mt-10 p-5 `}>
          <Image src={SigninImg} alt="Signin_Image"></Image>
        </div>
        <div className=" flex flex-col justify-center w-full min-w-[250px] p-5 ">
          <h1 className="text-3xl font-bold text-center">Sign up</h1>
          <p className="w-full min-w-[200px] justify-center text-gray-500 text-center py-3 ">Please fill the details and create account</p>
          <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full min-w-[250px] justify-center gap-3">
              <FormControl variant="outlined" className="w-full min-w-[250px] border bg-gray-100 rounded">
                <InputLabel htmlFor="outlined-adornment-name">Name *</InputLabel>
                <OutlinedInput
                  id="standard"
                  type="text"
                  name='name'
                  onChange={onchangeData}
                  placeholder="jhon steeves"
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                  label="name"
                />
              </FormControl>
              <FormControl variant="outlined" className="w-full min-w-[250px] border bg-gray-100 rounded">
                <InputLabel htmlFor="outlined-adornment-email">Email *</InputLabel>
                <OutlinedInput
                  error={error && error.message ? true : false}
                  id="standard-error-helper-text"
                  type="email"
                  name='email'
                  onChange={onchangeData}
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
                  name='password'
                  onChange={onchangeData}
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

            {/*<p className="w-full min-w-[250px] text-normal text-gray-500 text-left ">Password strength: {passwordStrength()}/5</p>*/}

            {/* <VisibilityOffIcon className='absolute z-20'></VisibilityOffIcon>*/}
            <p className="w-full min-w-[250px] text-normal text-gray-500 text-left p-1  pb-2">Password must be 8 character</p>
            <button
              type="submit"
              className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-
            2 px-4 rounded-xl py-3 min-w-[250px]"
            >
              Sign Up
            </button>
            <p className="w-full min-w-[250px] text-gray-600 py-5 text-center">
              Already have an account ?{' '}
              <Link href="/login" className="text-blue-500">
                Sign in
              </Link>
              <br />
              Or connect
            </p>
            <div className="w-full min-w-[250px] flex md:flex-row items-center justify-center justify-items-center gap-1 py-2">
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

export default Signup;
