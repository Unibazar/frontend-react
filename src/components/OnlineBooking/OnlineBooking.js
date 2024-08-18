import React from 'react';
import './OnlineBooking.css';
import '../ResponsiveStyle/Responsive.css'
import Link from 'next/link';
const OnlineBooking = () => {
  return (
    <>
      <div className="online-booking">
        <div className="booking-text">
          <h2>Manage all your e-commerce platforms from one place.</h2>
          <p>
            effortlessly handle their product listings, inventory, and sales across various e-commerce platforms <br />
            from a single interface
          </p>
        </div>

        <div className="flex md:flex-row flex-col gap-1">
          <Link href="/sign-up" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
            Signup for free
          </Link>
          <a href="#" className="white-bg-button px-4 py-2 text-teal-700">
            Contact Now
          </a>
        </div>
      </div>
    </>
  );
};

export default OnlineBooking;
