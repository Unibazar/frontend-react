import AppContactUs from '../component/AppContactUs/AppContactUs.js';
import Enterprises from '../component/Enterprises/Enterprises.js';
import Footer from '../component/Footer/Footer.js';
import Joinus from '../component/JoinUsSection/JoinUs.js';
import MeetFounder from '../component/MeetFounderSection/MeetFounder.js';
import Navbar from '../component/Navigation/Navbar.js';
import Aboutus from '../component/Aboutus/Aboutus.js';
import Ethics from '../component/Ethics/Ethics.js';
import Story from '../component/Story/Story.js';

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <Aboutus />
      <Enterprises />
      <Story />
      <Ethics />
      <MeetFounder />
      <Joinus />
      <AppContactUs />
      <Footer />
    </div>
  );
}
