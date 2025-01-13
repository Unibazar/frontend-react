import React, { useEffect } from 'react';
import Image from 'next/image';
import AppButton from './AppButton';
import { loadUser } from '@/redux/slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Hero = ({ img, title, detail, buttonText }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
 
 
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  
  console.log(user,"user")
  return (
    <>
      <div className=" w-full md:h-1/2 flex md:flex-row flex-col justify-between ">
        <div className=" w-full md:h-full md:w-1/2 md:pt-10 items-end ">
          <h1 className="w-full font-bold uppercase text-4xl p-3">
            {title}
          </h1>
          <div className="w-full capitalize text-base font-thin mb-4 p-3">
            {detail}
          </div>
          {!user?.user.verified &&
          
          <AppButton btnText={buttonText} />
          }
        </div>

        <div className=" md:w-1/2 w-full md:pt-5 flex justify-end items-start">
          <Image src={img} alt="hero-image.."></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
