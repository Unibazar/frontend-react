import React from 'react';
import Image from 'next/image';
import LogoImage from '../../assets/unibazar_logo.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Image src={LogoImage} alt="logo"></Image>
        </div>
        <div className="navigation">
          <ul className="nav-links">
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="nav-buttons">
          <a href="#" className="nav-btn white-bg-button">
            Login
          </a>
          <a href="#" className="main-bg-button">
            Register
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
