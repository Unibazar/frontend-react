import React from 'react';
import Image from 'next/image';
import LogoImage from '../../assets/unibazar_logo.png';
import Link from "next/link"
import './Navbar.css';
import '../ResponsiveStyle/Responsive.css'
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Image src={LogoImage} alt="logo"></Image>
        </div>
        <div className="navigation">
          <ul className="nav-links">
            <li><Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li><Link href="/about-us">
              About</Link>
            </li>
            <li><Link href="/">
              Features</Link>
            </li>
            <li><Link href="/">
              Pricing</Link>
            </li>
            <li><Link href="/">
              Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="nav-buttons">
          <Link href="/login" className="nav-btn white-bg-button">
            Login
          </Link>
          <Link href="/signup" className="main-bg-button">
            Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
