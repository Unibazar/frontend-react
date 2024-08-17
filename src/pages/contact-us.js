import AppNavBar from "@/components/common/AppNavBar";
import ContactDetails from "@/components/contact-us/ContactDetails/ContactDetails";
import ContactSupport from "@/components/contact-us/ContactSupport/ContactSupport";
import Footer from "@/components/Footer/Footer";

export default function ContactUs() {
  return (
    <div>
      <AppNavBar/>
      <ContactSupport/>
      <ContactDetails/>
      <Footer/>
    </div>
  );
}
