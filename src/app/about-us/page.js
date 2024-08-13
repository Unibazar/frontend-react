import ContactUs from '../component/AppContactUs/ContactUs.js';
import Footer from '../component/Footer/Footer.js';
import JoinUs from '../component/JoinUsSection/JoinUs.js';
import MeetFounder from '../component/MeetFounderSection/MeetFounder.js';
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
