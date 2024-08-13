import React from 'react';
import './OnlineBooking.css';
import '../ResponsiveStyle/Responsive.css'
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

        <div className="nav-buttons online-booking-btn">
          <a href="#" className="main-bg-button">
            Signup for free
          </a>
          <a href="#" className="white-bg-button">
            Contact Now
          </a>
        </div>
      </div>
    </>
  );
};

export default OnlineBooking;
