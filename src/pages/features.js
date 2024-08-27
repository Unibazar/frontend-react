import FrequentlyAskedQuestions from '../components/featuresComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Enterprises from '../components/Enterprises/Enterprises';
import Hero from '../components/featuresComponents/Hero/Hero';
import Features from '../components/featuresComponents/Features/Features';
import Management from '../components/featuresComponents/Management/Management';
import Head from 'next/head';

const page = () => {
  return (
    <div className="bg-white text-black min-h-screen ">
      <Head>
        <title>Features | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <Hero />
      <Enterprises />
      <Features />
      <Management />
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default page;
