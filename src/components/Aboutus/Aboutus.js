import React from 'react';
import Image from 'next/image';
import AboutusImage from '../../assets/unibazar-aboutus-images/aboutus.png';
import styles from './AboutUs.module.css';
const Aboutus = () => {
  return (
    <>
      <div className=" h-1/2 w-full flex md:flex-row flex-col items-start p-5">
        <div className=" w-full flex md:flex-row flex-col justify-between p-5 ">
          <div className="p-5">
            <h1 className={styles.heading}>ABOUT US</h1>
            <p className="font-light text-1xl pb-4 pt-4">
              Discover how Unibazar can transform your <br /> multi-platform selling experience.
            </p>
            <button className={styles.btn} type="button">
              Get Start for Free
            </button>
          </div>
          <Image src={AboutusImage} alt="wait"></Image>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
