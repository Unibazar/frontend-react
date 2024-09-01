
import Signup from "../components/home/Signup/Signup";
import ContactDetails from "../components/contact-us/ContactDetails/ContactDetails";
import FAQ from "../components/common/FAQ/FAQ";
import Head from 'next/head';
import Hero from '../components/widgets/common/Hero.js';
import HeroImage from '../assets/unibazar-contactus-images/contactSupport.svg';

export default function ContactUs() {
  return (
    <div>
      <Head>
        <title>Contact us | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <Hero 
        img={HeroImage} 
        title='GET IN TOUCH WITH US' 
        detail={<div>We&apos;re Here To Help You With Any Questions Or <br />
          Support You Need</div>} 
        buttonText='Contact Support'
      />
      <ContactDetails/>
      <FAQ/>
      <Signup/>
    </div>
  );
}
