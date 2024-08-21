import React from 'react';
import styles from './OnlineBooking.module.css';
import Link from 'next/link';
const OnlineBooking = () => {
  return (
    <>
      <div className={styles.onlineBooking}>
        <div className={styles.bookingText}>
          <h2>Manage all your e-commerce platforms from one place.</h2>
          <p>
            effortlessly handle their product listings, inventory, and sales across various e-commerce platforms <br />
            from a single interface
          </p>
        </div>

        <div className="flex md:flex-row flex-col gap-1">
          <Link href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
            Signup for free
          </Link>
          <a href="#" className={`${styles.whiteBgButton} px-4 py-2 rounded text-teal-700`}>
            Contact Now
          </a>
        </div>
      </div>
    </>
  );
};

export default OnlineBooking;
