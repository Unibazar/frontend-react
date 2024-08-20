import React from 'react';
import Image from 'next/image';
import Add from '../../assets/unibazar-home-images/add.png';
// import '../../styles/components/FAQ.css';
// import '../../styles/components/Responsive.css';
const FAQ = () => {
  return (
    <>
      <div className="faqs">
        <div className="faqs-text">
          <h2>Fairly asked questions</h2>
        </div>

        <div className="faqs-part">
          <div className="faq-sides">
            <div className="faqs-item">
              <p>How is Evergreen priced?</p>
              <Image src={Add} alt="add.."></Image>
            </div>

            <div className="faqs-item">
              <p>Is there a trail period?</p>
              <Image src={Add} alt="add.."></Image>
            </div>

            <div className="faqs-item">
              <p>Does it work offline?</p>
              <Image src={Add} alt="add.."></Image>
            </div>

            <div className="faqs-item">
              <p>Is my data secure?</p>
              <Image src={Add} alt="add.."></Image>
            </div>
          </div>

          <div className="faq-sides">
            <div className="faqs-item">
              <p>Is there a mobile app</p>
              <Image src={Add} alt="add.."></Image>
            </div>
            <div className="faqs-item">
              <p>Is there a mobile app</p>
              <Image src={Add} alt="add.."></Image>
            </div>
            <div className="faqs-item">
              <p>Is there a mobile app</p>
              <Image src={Add} alt="add.."></Image>
            </div>
            <div className="faqs-item">
              <p>Is there a mobile app</p>
              <Image src={Add} alt="add.."></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
