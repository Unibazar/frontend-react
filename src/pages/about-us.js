import AppContactUs from '../components/AppContactUs/AppContactUs.js';
import Enterprises from '../components/Enterprises/Enterprises.js';
import Joinus from '../components/JoinUsSection/JoinUs.js';
import MeetFounder from '../components/MeetFounderSection/MeetFounder.js';
import Aboutus from '../components/Aboutus/Aboutus.js';
import Ethics from '../components/Ethics/Ethics.js';
import WhyUnibazar from '@/components/Why-unibazar/WhyUnibazar.js';
import Story from '../components/Story/Story.js';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>About us | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      {/* <Navbar /> */}
      <Aboutus />
      <Enterprises />
      <Story />
      <Ethics />
      <WhyUnibazar />
      <MeetFounder />
      <Joinus />
      <AppContactUs />
      {/* <Footer /> */}
    </div>
  );
}
