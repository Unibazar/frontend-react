
import Signup from "../components/Signup/Signup";
import ContactDetails from "../components/contact-us/ContactDetails/ContactDetails";
import ContactSupport from "../components/contact-us/ContactSupport/ContactSupport";
import FAQ from "../components/FAQ/FAQ";
import Head from 'next/head';

export default function ContactUs() {
  return (
    <div>
      <Head>
        <title>Contact us | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <ContactSupport/>
      <ContactDetails/>
      <FAQ/>
      <Signup/>
    </div>
  );
}
