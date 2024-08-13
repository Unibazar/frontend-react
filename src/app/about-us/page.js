import Aboutus from '../components/Aboutus/Aboutus.js';
import ContactUs from '../components/AppContactUs/ContactUs.js';
import Enterprises from '../components/Enterprises/Enterprises.js';
import Ethics from '../components/Ethics/Ethics.js';
import Footer from '../components/Footer/Footer.js';
import JoinUs from '../components/JoinUsSection/JoinUs.js';
import MeetFounder from '../components/MeetFounderSection/MeetFounder.js';
import Navbar from '../components/Navigation/Navbar.js';
export default function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Aboutus/>
      <Enterprises/>
      <Ethics/>
      <MeetFounder />
      <JoinUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
