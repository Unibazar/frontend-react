import React from 'react';
import Image from 'next/image';
import FeatureIcon1 from '../../../assets/unibazar-home-images/feature-Icon1.png';
import FeatureIcon2 from '../../../assets/unibazar-home-images/feature-Icon2.png';
import FeatureIcon3 from '../../../assets/unibazar-home-images/feature-Icon3.png';
import styles from './Features.module.css';

const Features = () => {
  return (
    <>
      <div className={styles.features}>
        <div className={styles.featuresText}>
          <h1>Our Features</h1>
          <p>
            Unibazar offers a suite of powerful features designed to simplify and streamline your e-commerce <br />
            operations. Here’s what you can expect
          </p>
        </div>

        <div className={styles.featuresPart}>
          <div className={styles.feature}>
            <Image src={FeatureIcon1} alt="wait.."></Image>
            <h3>Easy Integration</h3>
            <p className={styles.small}>
              Manage all your listings from a single <br /> interface, saving you time and effort
            </p>
          </div>

          <div className={`${styles.feature}, ${styles.outline}`}>
            <Image src={FeatureIcon2} alt="wait.."></Image>
            <h3>Unified Dashboard</h3>
            <p className={styles.small}>
              Stay informed and in control of your e- <br />
              commerce operations from one central location
            </p>
          </div>

          <div className={styles.feature}>
            <Image src={FeatureIcon3} alt="wait.."></Image>
            <h3>Real-time Analytics</h3>
            <p className={styles.small}>
              Optimize your operations with data-driven <br />insights to drive  growth and profitability
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
