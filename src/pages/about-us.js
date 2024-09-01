import AppContactUs from '../components/aboutUs/AppContactUs/AppContactUs.js';
import Enterprises from '../components/common/Enterprises/Enterprises.js';
import Joinus from '../components/aboutUs/JoinUsSection/JoinUs.js';
import MeetFounder from '../components/aboutUs/MeetFounderSection/MeetFounder.js';
import Ethics from '../components/aboutUs/Ethics/Ethics.js';
import WhyUnibazar from '@/components/aboutUs/Why-unibazar/WhyUnibazar.js';
import Story from '../components/aboutUs/Story/Story.js';
import Head from 'next/head';
import Hero from '../components/widgets/common/Hero.js';
import HeroImage from '../assets/unibazar-aboutus-images/aboutus.svg';

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>About us | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      {/* <Navbar /> */}
      <Hero 
        img={HeroImage} 
        title='ABOUT US' 
        detail={<div>
            Discover how Unibazar can transform your
            <br />
            multi-platform selling experience.
          </div>} 
        buttonText='Get Start for Free'
      />
      <Enterprises />
      <Story />
      <Ethics />
      <WhyUnibazar/>
      <MeetFounder />
      <Joinus />
      <AppContactUs />
      {/* <Footer /> */}
    </div>
  );
}
