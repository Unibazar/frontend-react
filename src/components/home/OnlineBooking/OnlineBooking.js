import React,{useEffect} from 'react';
import styles from './OnlineBooking.module.css';
import Link from 'next/link';
import { loadUser } from '@/redux/slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
const OnlineBooking = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
 
 
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <div className={styles.onlineBooking}>
        <div className={styles.bookingText}>
          <h2>Manage all your e-commerce platforms from one place.</h2>
          <p>
            Effortlessly handle their product listings, inventory, and sales across various e-commerce platforms <br />
            from a single interface
          </p>
        </div>
        {!user?.user.verified &&
        <div className="flex md:flex-row flex-col gap-4">
          <Link href="/register" className=" px-16 py-4 text-white bg-teal-700 rounded-xl hover:bg-teal-800 ">
            Signup for free
          </Link>
          <Link href="/contact-us" className={`${styles.whiteBgButton} px-16 py-4 rounded-xl text-teal-700 hover:text-teal-900`}>
            Contact Now
          </Link>
        </div>
        }
      </div>
    </>
  );
};

export default OnlineBooking;
