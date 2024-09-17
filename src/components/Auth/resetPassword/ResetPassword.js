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

const ResetPassword = ({ userToken }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
                <div className="w-full md:ml-20 md:mt-10 p-5">
                    <Image src={SigninImg} alt="Signin_Image" />
                </div>
                <div className="md:mr-10 md:pr-28 w-full p-5">
                    <h1 className="text-3xl font-bold text-center">Set Password</h1>
                    <p className='w-full text-normal text-gray-500 text-center py-3'>
                        Please set the password that you will remember!
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
                        <TextField
                            type="password"
                            id="new-password"
                            label="New Password"
                            variant="outlined"
                            className="md:w-[500px] w-[380px] border bg-gray-100 rounded"
                            onChange={e => setNewPassword(e.target.value)}
                            required
                        />
                        <FormControl variant="outlined" className="md:w-[500px] w-[380px] border bg-gray-100 rounded">
                            <InputLabel htmlFor="confirm-password">Confirm Password *</InputLabel>
                            <OutlinedInput
                                id="confirm-password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={e => e.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password *"
                            />
                        </FormControl>
                        <button
                            type="submit"
                            className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-2xl"
                        >
                            Change
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
