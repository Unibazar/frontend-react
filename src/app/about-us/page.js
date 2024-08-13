import Enterprises from '../component/Enterprises/Enterprises.js';
import Navbar from '../component/Navigation/Navbar.js';
import Aboutus from '../components/Aboutus/Aboutus.js';
import AppContactUs from '../components/AppContactUs/AppContactUs.js';
import Ethics from '../components/Ethics/Ethics.js';
import Footer from '../components/Footer/Footer.js';
import JoinUs from '../components/JoinUsSection/JoinUs.js';
import MeetFounder from '../components/MeetFounderSection/MeetFounder.js';
export default function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Aboutus/>
      <Enterprises/>
      <Ethics/>
      <MeetFounder />
      <JoinUs />
      <AppContactUs />
      <Footer />
    </div>
  );
}
