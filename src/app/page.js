import React from 'react';
import Footer from './component/Footer/Footer.js';
import Navbar from './component/Navigation/Navbar.js';
import Hero from './component/Hero/Hero.js';
import Enterprises from './component/Enterprises/Enterprises.js';
import OnlineBooking from './component/OnlineBooking/OnlineBooking.js';
import Features from './component/Features/Features.js';
import Facilities from './component/Facilities/Facilities.js';
import Working from './component/Working/Working.js';
import Banner from './component/Banner/Banner.js';
import Pricing from './component/Pricing/Pricing.js';
import FAQ from './component/FAQ/FAQ.js';
import Signup from './component/Signup/Signup.js';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Enterprises />
      <OnlineBooking />
      <Features />
      <Facilities />
      <Working />
      <Banner />
      <Pricing />
      <FAQ />
      <Signup />
      <Footer />
    </div>
  );
}
