import React from 'react';
import Image from 'next/image';
import WorkIcon1 from '../../../assets/unibazar-home-images/work-icon1.png';
import WorkIcon2 from '../../../assets/unibazar-home-images/work-icon2.png';
import WorkIcon3 from '../../../assets/unibazar-home-images/work-icon3.png';
import WorkIcon4 from '../../../assets/unibazar-home-images/work-icon4.png';
import styles from './Working.module.css';
const Working = () => {
  return (
    <>
      <div className={styles.working}>
        <div className={styles.workingText}>
          <h1>How It Works ?</h1>
          <p>Easy listing and booking process</p>
        </div>

        <div className={styles.workPart}>
          <div className={styles.work}>
            <Image className={styles.workIcon} src={WorkIcon1} alt="wait.."></Image>
            <p>Register </p>
          </div>

          <div className={styles.work}>
            <Image className={styles.workIcon} src={WorkIcon2} alt="wait.."></Image>
            <p>Link Your platforms</p>
          </div>

          <div className={styles.work}>
            <Image className={styles.workIcon} src={WorkIcon3} alt="wait.."></Image>
            <p>Prepare your space</p>
          </div>

          <div className={styles.work}>
            <Image className={styles.workIcon} src={WorkIcon4} alt="wait.."></Image>
            <p>Manage listing</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
