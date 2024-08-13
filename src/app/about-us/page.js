import ContactUs from '../components/AppContactUs/ContactUs.js';
import Footer from '../components/Footer/Footer.js';
import JoinUs from '../components/JoinUsSection/JoinUs.js';
import MeetFounder from '../components/MeetFounderSection/MeetFounder.js';
export default function AboutUs() {
  return (
    <div>
      <h1 className="flex items-center justify-items-center">About us</h1>
      <MeetFounder />
      <JoinUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
