import React from 'react';
import Image from 'next/image';
import WorkIcon1 from '../../assets/unibazar-home-images/work-icon1.png';
import WorkIcon2 from '../../assets/unibazar-home-images/work-icon2.png';
import WorkIcon3 from '../../assets/unibazar-home-images/work-icon3.png';
import WorkIcon4 from '../../assets/unibazar-home-images/work-icon4.png';
// import '../../styles/components/Working.css';
// import '../../styles/components/Responsive.css';
const Working = () => {
  return (
    <>
      <div className="working">
        <div className="working-text">
          <h1>How It Works ?</h1>
          <p>Easy listing and booking process</p>
        </div>

        <div className="work-part">
          <div className="work">
            <Image src={WorkIcon1} alt="wait.."></Image>
            <p>Register </p>
          </div>

          <div className="work">
            <Image src={WorkIcon2} alt="wait.."></Image>
            <p>Link Your platforms</p>
          </div>

          <div className="work">
            <Image src={WorkIcon3} alt="wait.."></Image>
            <p>Prepare your space</p>
          </div>

          <div className="work">
            <Image src={WorkIcon4} alt="wait.."></Image>
            <p>Manage listing</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
