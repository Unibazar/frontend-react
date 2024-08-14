import AppContactUs from '../components/AppContactUs/AppContactUs.js';
import Enterprises from '../components/Enterprises/Enterprises.js';
import Footer from '../components/Footer/Footer.js';
import Joinus from '../components/JoinUsSection/JoinUs.js';
import MeetFounder from '../components/MeetFounderSection/MeetFounder.js';
import Navbar from '../components/Navigation/Navbar.js';
import Aboutus from '../components/Aboutus/Aboutus.js';
import Ethics from '../components/Ethics/Ethics.js';
import Story from '../components/Story/Story.js';

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
