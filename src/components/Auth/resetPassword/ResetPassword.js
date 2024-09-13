import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SigninImg from '../../../assets/signin-image.svg'
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png'
import FbImg from '../../../assets/fb.png'
import AppleImg from '../../../assets/apple.png'
import GoogleImg from '../../../assets/google.png'
import { IoMdEyeOff } from 'react-icons/io'
import Link from 'next/link'
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from 'next/router';

import styles from './ResetPassword.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { login, loadUser, resetPassword } from '@/redux/slice/userSlice'
import Loader from '@/components/Loader/Loader'
import { toast } from 'react-toastify';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const ResetPassword = ({ userToken }) => {

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { user, isLoading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(resetPassword({ newPassword, confirmPassword, userToken }));

    }

    useEffect(() => {
        if (localStorage.getItem('jwtToken')) {
            dispatch(loadUser());
        }
    }, []);

    useEffect(() => {

        if (user) {
            router.replace('/dashboard');
        }

        if (error && error.message) {
            toast.error(error.message);
        }

    }, [user, error])

    return (
        <>
            {isLoading && <Loader />}
            <div >
                <div className='md:hidden pt-12 pl-10  w-full flex'>
                    <IoChevronBackOutline className='bg-gray-50 rounded-full w-8 h-8 p-2 justify-center justify-items-center items-center' onClick={handleBackClick} />
                </div>
                <div className={`${styles.logo} pt-12 pl-12`}>
                    <Link href='/'><Image src={LogoImage} alt="Logo" className='w-36' /></Link>
                </div>
            </div>
            <div className="w-full flex md:flex-row flex-col justify-center justify-items-center items-start p-10">
                <div className={`${styles.mainimg} w-full md:ml-20 md:mt-10 p-5 `}>

                    <Image src={SigninImg} alt="Signin_Image" ></Image>
                </div>
                <div className=" md:mr-10 md:pr-28  w-full p-5">
                    <h1 className="text-3xl font-bold text-center">Set Password</h1>
                    <p className='w-full text-normal text-gray-500 text-center py-3'>Please set the password that you will be remember!</p>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
                        <FormControl variant="outlined" className="md:w-[500px] w-[380px] border bg-gray-100 rounded">
                            <InputLabel htmlFor="outlined-adornment-password">newPassword *</InputLabel>
                            <OutlinedInput
                                error={error && error.message ? true : false}
                                id="standard-error-helper-text"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="newPassword"
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
                                label="newPassword *"
                            />
                        </FormControl>
                        <FormControl variant="outlined" className="md:w-[500px] w-[380px] border bg-gray-100 rounded">
                        <InputLabel htmlFor="outlined-adornment-password">confirmPassword *</InputLabel>
                        <OutlinedInput
                            error={error && error.message ? true : false}
                            id="standard-error-helper-text"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="confirmPassword"
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
                            label="confirmPassword *"
                        />
                    </FormControl>

                        {/* <VisibilityOffIcon className='absolute z-20'></VisibilityOffIcon>*/}
                        <button type='submit' className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-
            2 px-4 rounded-2xl py-3">Change</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetPassword