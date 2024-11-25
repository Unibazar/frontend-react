import Testimonials from "../components/pricing/Testimonials/Testimonials"
import Signup from "../components/home/Signup/Signup";
import Head from 'next/head';
import ChoosePlan from "../components/pricing/ChoosePlan/ChoosePlan";
import ComparePlan from "../components/pricing/ComparePlan/ComparePlan";
import Hero from '../components/widgets/common/Hero.js';
import HeroImage from '../assets/unibazar-pricing-images/pricing.svg';
import FAQpricing from "../components/pricing/FAQpricing/FAQpricing";

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Pricing | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <Hero
        img={HeroImage}
        title={<div>
          Choose the Right Plan <br />for Your Business
        </div>}
        detail={
          <div>
            Flexible pricing plans to suit your needs. Start with our<br /> Free plan or unlock more features with our Pro and<br /> Enterprise plans.
          </div>}
        buttonText='Get Start for Free'
      />
      <ChoosePlan />
      <br />
      <ComparePlan />
      <br />
      <Testimonials />
      <br />
      <FAQpricing />
      <br />
      <Signup />
    </div>
  );
}
