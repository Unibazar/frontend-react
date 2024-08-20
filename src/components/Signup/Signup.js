import React from 'react';
import Image from 'next/image';
import SignupImage from '../../assets/unibazar-home-images/signup-img.png';
// import '../../styles/components/Signup.css';
// import '../../styles/components/Responsive.css';
const Signup = () => {
  return (
    <>
      <div className="signup">
        <div className="signup-img">
          <Image src={SignupImage} alt="wait.."></Image>
        </div>

        <div className="signup-text">
          <h1>
            All-in-one Platform <br /> to manage and grow your Business
          </h1>
          <p>
            Organize your business with 24/7 automated yor products, <br /> reminders, payments, and more.
          </p>
          <div className="nav-buttons">
            <a href="#" className="main-bg-button">
              Signup for Free
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
