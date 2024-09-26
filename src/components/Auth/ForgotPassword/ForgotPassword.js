import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import SigninImg from '../../../assets/signin-image.svg';
import ForgotPassImg from '../../../assets/forgotPass.png';
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EmailIcon from '@mui/icons-material/Email';
import styles from './ForgotPassword.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword, clearUser } from '@/redux/slice/userSlice';
import Loader from '@/components/Loader/Loader';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Popup({ onClose }) {
  const styles = {
    popupOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    popupcontent: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    },
  };

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupcontent}>
        <div className="w-full items-center justify-center justify-items-center flex">
          <Image src={ForgotPassImg} alt="forgot password image"></Image>
        </div>
        <p className="text-bold text-xl text-center py-2 pt-1">Check your email</p>
        <p className="text-normal text-gray-500 text-center">
          We have send password recovery <br /> instruction to your email
        </p>
        <button onClick={onClose}></button>
      </div>
    </div>
  );
}

function ForgotPassword() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [email, setEmail] = useState('');

  const { user, isLoading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const togglePopup = useCallback(() => {
    setIsPopupVisible(prevIsPopupVisible => !prevIsPopupVisible);
  }, [setIsPopupVisible]);

  useEffect(() => {
    const handleSuccess = () => {
      togglePopup();
    }

    if (user && user.success) {
      handleSuccess();
    }

    if (error && error.message) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      dispatch(clearUser());
    }
  }, [user, error, dispatch, togglePopup])

  const router = useRouter();
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
      <div className="w-full flex md:flex-row flex-col justify-center justify-items-center items-start p-10">
        <div className={`${styles.mainimg} w-full min-w-[400px] min-h-[400px] h-full justify-center flex md:mt-10 p-5 `}>
          <Image src={SigninImg} alt="Signin_Image" />
        </div>
        <div className=" flex flex-col justify-center min-w-[250px] w-full p-5">
          <h1 className="text-3xl font-bold text-center">Forgot password</h1>
          <p className="w-full text-normal text-gray-500 text-center py-3 pb-10">
            Enter your email account to reset <br />
            your password
          </p>
          <form className="flex flex-col justify-center items-center gap-5">
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
            {/* <VisibilityOffIcon className='absolute z-20'></VisibilityOffIcon>*/}
            <button
              type="button"
              onClick={e => {
                e.preventDefault();
                dispatch(forgetPassword(email));
              }}
              className="bg-teal-500 w-full min-w-[250px] hover:bg-teal-700 text-white font-bold px-4 rounded-xl py-3" >
              Reset Password
            </button>
          </form>
        </div>
        {isPopupVisible && <Popup onClose={togglePopup} />}
      </div>
    </>
  );
}

export default ForgotPassword;
