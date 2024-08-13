import ContactUs from '../components/AppContactUs/ContactUs.js';
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
      <ContactUs />
      <Footer />
    </div>
  );
}
