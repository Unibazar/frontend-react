import React, { useEffect } from 'react';
import Enterprises from '../components/common/Enterprises/Enterprises.js';
import OnlineBooking from '../components/home/OnlineBooking/OnlineBooking.js';
import Features from '../components/home/Features/Features.js';
import Facilities from '../components/home/Facilities/Facilities.js';
import Working from '../components/home/Working/Working.js';
// import Banner from '../components/Banner/Banner.js';
import Pricing from '../components/home/Pricing/Pricing.js';
import FAQ from '../components/common/FAQ/FAQ.js';
import Signup from '../components/home/Signup/Signup.js';
import HeroImage from '../assets/unibazar-home-images/heroImage.svg';
import Head from 'next/head';
import Hero from '../components/widgets/common/Hero.js';


export default function Home() {
  const breakLine = <br />;
  return (
    <div>
      <Head>
        <title>Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      {/* <AppNavBar /> */}
      {/* <div className="section"> */}
      {/* <Navbar /> */}
      <Hero
        img={HeroImage}
        title={<div>
          Simplify Your E-commerce
          <br />
          Management with
          <br />
          <span className="text-teal-400 pt-4">Unibazar</span>
        </div>}
        detail={
          <div>
            Discover how Unibazar can transform your
            <br />
            multi-platform selling experience.
          </div>}
        buttonText='Get Start for Free'
      />
      <br />
      <br />
      <Features />
      <Enterprises />
      <br />
      <br />
      <OnlineBooking />
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
