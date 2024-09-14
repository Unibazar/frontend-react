import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SigninImg from '../../../assets/signin-image.svg';
import LogoImage from '../../../assets/unibazar-home-images/unibazarlogo.png';
import { IoMdEyeOff } from 'react-icons/io';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, resetPassword } from '@/redux/slice/userSlice';
import Loader from '@/components/Loader/Loader';
import { toast } from 'react-toastify';

const ResetPassword = ({ userToken }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
      toast.error(error.message);
    }
  }, [user, error, router]);

  const handleSubmit = e => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    dispatch(resetPassword({ newPassword, confirmPassword, userToken }));
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <div className="md:hidden pt-12 pl-10 w-full flex">
          <IoChevronBackOutline className="bg-gray-50 rounded-full w-8 h-8 p-2 justify-center items-center cursor-pointer" onClick={handleBackClick} />
        </div>
        <div className={`${styles.logo} pt-12 pl-12`}>
          <Link href="/">
            <Image src={LogoImage} alt="Logo" className="w-36" />
          </Link>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center items-start p-10">
        <div className={`${styles.mainimg} w-full md:ml-20 md:mt-10 p-5`}>
          <Image src={SigninImg} alt="Signin_Image" />
        </div>
        <div className="md:mr-10 md:pr-28 w-full p-5">
          <h1 className="text-3xl font-bold text-center">Set Password</h1>
          <p className="w-full text-normal text-gray-500 text-center py-3">Please set a password that you will remember!</p>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
            <input type="password" placeholder="New Password" name="newPassword" className="w-full p-2 mb-5 border bg-gray-100 rounded-2xl" onChange={e => setNewPassword(e.target.value)} />
            <div className="relative w-full flex flex-row justify-between p-2 border bg-gray-100 rounded-2xl">
              <input type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" name="confirmPassword" className="w-full outline-none border-0 bg-gray-100" onChange={e => setConfirmPassword(e.target.value)} />
              <IoMdEyeOff className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" style={{ color: 'gray' }} onClick={() => setShowPassword(!showPassword)} />
            </div>
            <button type="submit" className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-2xl mt-4">
              Change
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
