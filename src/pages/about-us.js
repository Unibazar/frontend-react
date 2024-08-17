
import Enterprises from '@/components/Enterprises/Enterprises.js';
import Footer from '@/components/Footer/Footer.js';
import Joinus from '@/components/JoinUsSection/JoinUs.js';
import MeetFounder from '@/components/MeetFounderSection/MeetFounder.js';
import Aboutus from '@/components/Aboutus/Aboutus.js';
import Ethics from '@/components/Ethics/Ethics.js';
import Story from '@/components/Story/Story.js';
import WhyUnibazar from '@/components/Why-unibazar/WhyUnibazar.js';
import AppContactUs from '@/components/AppContactUs/AppContactUs.js';
import AppNavBar from '@/components/common/AppNavBar';

export default function AboutUs() {
  return (
    <div>
      <AppNavBar/>
      <Aboutus />
      <Enterprises />
      <Story />
      <Ethics />
      <WhyUnibazar/>
      <MeetFounder />
      <Joinus />
      <AppContactUs/>
      <Footer />
    </div>
  );
}
