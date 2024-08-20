import React from 'react';
import Image from 'next/image';
import Banner1 from '../../assets/unibazar-home-images/banner1.png';
import Banner2 from '../../assets/unibazar-home-images/banner2.png';
// import '../../styles/components/Banner.css';
// import '../../styles/components/Responsive.css';
const Banner = () => {
  return (
    <>
      <div className="bannar">
        <div className="bannar-img">
          <Image src={Banner1} alt="wait"></Image>
        </div>
        <div className="bannar-img">
          <Image src={Banner2} alt="wait"></Image>
        </div>
      </div>
    </>
  );
};

export default Banner;
