import AppContactUs from '../component/AppContactUs/AppContactUs.js';
import Enterprises from '../component/Enterprises/Enterprises.js';
import Footer from '../component/Footer/Footer.js';
import Joinus from '../component/JoinUsSection/JoinUs.js';
import MeetFounder from '../component/MeetFounderSection/MeetFounder.js';
import Navbar from '../component/Navigation/Navbar.js';
import Aboutus from '../components/Aboutus/Aboutus.js';
import Ethics from '../components/Ethics/Ethics.js';
import Story from '../components/Story/Story.js';
import WhyUnibazar from '../components/Why-unibazar/WhyUnibazar.js';

export default function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Aboutus/>
      <Enterprises/>
      <Story/>
      <Ethics/>
      <WhyUnibazar/>
      <MeetFounder/>
      <Joinus/>
      <AppContactUs/>
      <Footer/>
    </div>
  );
}
