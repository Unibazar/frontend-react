import Testimonials from "../components/Testimonials/Testimonials"
import Signup from "../components/Signup/Signup";
import FAQ from "../components/FAQ/FAQ";
import Head from 'next/head';
import Plan from "../components/Plan/Plan";
import ChoosePlan from "../components/ChoosePlan/ChoosePlan";
import ComparePlan from "../components/ComparePlan/ComparePlan";

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Pricing | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <Plan/>
      <ChoosePlan/>
      <ComparePlan/>
      <Testimonials/>
      <FAQ/>
      <Signup/>
    </div>
  );
}
