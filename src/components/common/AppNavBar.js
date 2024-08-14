import React from 'react';
import Image from 'next/image';
import LogoImage from '../../../public/unibazar-logo.png';
import Link from 'next/link';
import './AppNavBar.css';
function AppNavBar() {
  return (
    <nav className="navbar-container">
      <div className="logo-wrap">
        <Image src={LogoImage} alt="logo" className="navbar-logo"></Image>
      </div>
      <div className="nav-links-container">
        <ul className="nav-links-ul">
          <li className="nav-link-item">
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-link-item">
            <Link href="/about-us">About</Link>
          </li>
          <li className="nav-link-item">
            <Link href="/">Features</Link>
          </li>
          <li className="nav-link-item">
            <Link href="/">Pricing</Link>
          </li>
          <li className="nav-link-item">
            <Link href="/">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="nav-buttons">
        <Link href="/login" className="login-button">
          Login
        </Link>
        <Link href="/signup" className="register-button">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default AppNavBar;
