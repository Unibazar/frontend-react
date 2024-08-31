import FrequentlyAskedQuestions from '../components/featuresComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Enterprises from '../components/Enterprises/Enterprises';
import Features from '../components/featuresComponents/Features/Features';
import Management from '../components/featuresComponents/Management/Management';
import Head from 'next/head';
import Hero from '../components/widgets/common/Hero.js';
import HeroImage from '../assets/unibazar-features-images/FeaturesHeroImg.svg';

const page = () => {
  return (
    <div className="bg-white text-black min-h-screen ">
      <Head>
        <title>Features | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <Hero 
        img={HeroImage} 
        title={<div>
          Unlock the Power of <br /> Seamless E-commerce <br/>Management
        </div>}
        detail={
          <div>
            Discover how Unibazar can transform your
            <br />
            multi-platform selling experience.
          </div>} 
        buttonText='Get Start for Free'
      />
      <Enterprises />
      <Features />
      <Management />
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default page;
