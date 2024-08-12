import Contactus from './Components/Contact us/Contactus.js';
import Footer from './Components/Footer.js'
import Joinus from './Components/Join us/Joinus.js';
import MeetFounder from './Components/Meet founder/MeetFounder.js';
export default function Home() {
  return (
    <div>
      <MeetFounder/>
      <Joinus/>
      <Contactus/>
      <Footer/>
    </div>
  );
}
