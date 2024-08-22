import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Hero from '../components/Hero/Hero.js';
import Enterprises from '../components/Enterprises/Enterprises.js';
import OnlineBooking from '../components/OnlineBooking/OnlineBooking.js';
import Features from '../components/Features/Features.js';
import Facilities from '../components/Facilities/Facilities.js';
import Working from '../components/Working/Working.js';
// import Banner from '../components/Banner/Banner.js';
import Pricing from '../components/Pricing/Pricing.js';
import FAQ from '../components/FAQ/FAQ.js';
import Signup from '../components/Signup/Signup.js';
import AppNavBar from '@/components/common/AppNavBar.js';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      {/* <AppNavBar /> */}
      {/* <div className="section"> */}
      {/* <Navbar /> */}
      <Hero />
      <br />
      <br />
      <Enterprises />
      <br />
      <br />
      <OnlineBooking />
      <br />
      <br />
      <Features />
      <br />
      <br />
      <Facilities />
      <br />
      <br />
      <Working />
      <br />
      <br />
      {/* <Banner /> */}
      <Pricing />
      <br />
      <br />
      <FAQ />
      <br />
      <br />
      <Signup />
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}
