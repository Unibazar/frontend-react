import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import SigninImg from '../../../assets/signin-image.svg';
import ForgotPassImg from '../../../assets/forgotPass.png';
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import styles from './ForgotPassword.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword, clearUser } from '@/redux/slice/userSlice';
import Loader from '@/components/Loader/Loader';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PropTypes from 'prop-types';

function Popup({ onClose }) {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <div className="w-full flex items-center justify-center">
          <Image src={ForgotPassImg} alt="forgot password image" />
        </div>
        <p className="text-bold text-xl text-center py-2 pt-1">Check your email</p>
        <p className="text-normal text-gray-500 text-center">
          We have sent password recovery <br /> instructions to your email.
        </p>
        <button onClick={onClose} className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
}

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

function ForgotPassword() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [email, setEmail] = useState('');
  const { user, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleSnackbarClose = () => {
    setSnackbarState((prev) => ({ ...prev, open: false }));
  };

  const togglePopup = useCallback(() => {
    setIsPopupVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    if (user && user.success) {
      togglePopup();
    }

    if (error && error.message) {
      setSnackbarState({
        open: true,
        message: error.message,
        severity: 'error',
      });
      dispatch(clearUser());
    }
  }, [user, error, dispatch, togglePopup]);

  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(forgetPassword(email));
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarState.severity} sx={{ width: '100%' }}>
          {snackbarState.message}
        </MuiAlert>
      </Snackbar>
      <div>
        <div className="md:hidden pt-12 pl-10 w-full flex">
          <IoChevronBackOutline
            className="bg-gray-50 rounded-full w-8 h-8 p-2 cursor-pointer"
            onClick={handleBackClick}
          />
        </div>
        <div className={`${styles.logo} pt-12 pl-12`}>
          <Link href="/">
            <Image src={LogoImage} alt="Logo" className="w-36" />
          </Link>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center items-start p-10">
        <div className={`${styles.mainImg} w-full md:ml-20 md:mt-10 p-5`}>
          <Image src={SigninImg} alt="Signin Image" />
        </div>
        <div className="md:mr-10 md:pr-28 md:mt-20 flex flex-col justify-center items-center w-full p-5">
          <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
          <p className="text-normal text-gray-500 text-center py-3 pb-10">
            Enter your email account to reset your password.
          </p>
          <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>
            <TextField
              type="email"
              label="Email"
              className="md:w-[500px] w-[380px] border bg-gray-100 rounded"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold px-4 rounded-xl py-3"
              disabled={!email || isLoading}
            >
              {isLoading ? 'Processing...' : 'Reset Password'}
            </button>
          </form>
        </div>
        {isPopupVisible && <Popup onClose={togglePopup} />}
      </div>
    </>
  );
}

export default ForgotPassword;
