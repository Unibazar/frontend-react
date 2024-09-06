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
import { login, loadUser } from '@/redux/slice/userSlice';
import Loader from '@/components/Loader/Loader';
import { toast } from 'react-toastify';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Signin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { user, isLoading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const router = useRouter();
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
  }, []);

  useEffect(() => {
    if (user) {
      toast.success('user login successfully!');
      router.replace('/dashboard');
    }

    if (error && error.message) {
      toast.error(error.message);
    }
  }, [user, error]);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleMouseUpPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      {isLoading && <Loader />}
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
        <div className={`${styles.mainimg} w-full md:ml-20 md:mt-10 p-5 `}>
          <Image src={SigninImg} alt="Signin_Image"></Image>
        </div>
        <div className=" md:mr-10 md:pr-28  w-full p-5">
          <h1 className="text-3xl font-bold text-center">Sign In</h1>
          <p className="w-full text-normal text-gray-500 text-center py-3">Please sign in to continue our app</p>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-1 ">
            <div className="flex flex-col  gap-3">
              <TextField type="email" id="outlined-uncontrolled" label="Email" className="md:w-[500px] w-[380px] border bg-gray-100 rounded " onChange={e => setEmail(e.target.value)} required />
              <FormControl variant="outlined" className="md:w-[500px] w-[380px] border bg-gray-100 rounded">
                <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setPassword(e.target.value)}
                  required
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
            <p className="w-full text-normal text-blue-500 text-right p-1 pb-2">
              <Link href="/forgot-password">Forget Password?</Link>
            </p>
            <button
              type="submit"
              className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-
            2 px-4 rounded-xl py-3"
            >
              Sign In
            </button>
            <p className="w-full text-gray-600 py-5 text-center">
              Don't have an account ?{' '}
              <Link href="/register" className="text-blue-500">
                Sign up
              </Link>
              <br />
              Or connect
            </p>
            <div className="w-full flex md:flex-row items-center justify-center justify-items-center gap-1 py-3">
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
