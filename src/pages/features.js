
import FrequentlyAskedQuestions from '../components/featuresComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Enterprises from '../components/Enterprises/Enterprises';
import Hero from '../components/featuresComponents/Hero/Hero';
import Features from '../components/featuresComponents/Features/Features';
import Management from '../components/featuresComponents/Management/Management';
const page = () => {
  return (
    <div className="bg-white text-black min-h-screen ">
      <Hero/>
      <Enterprises/>
      <Features/>
      <Management/>
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default page;
