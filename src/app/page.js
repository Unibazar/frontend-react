import React from 'react'
import Footer from './Components/Footer/Footer.js'
import Navbar from './Components/Navigation/Navbar.js';
import Hero from './Components/Hero/Hero.js';
import Enterprises from './Components/Enterprises/Enterprises.js';
import OnlineBooking from './Components/OnlineBooking/OnlineBooking.js';
import Features from './Components/Features/Features.js';
import Facilities from './Components/Facilities/Facilities.js';
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Enterprises/>
      <OnlineBooking/>
      <Features/>
      <Facilities/>
      <Footer/>
    </div>
  );
}
