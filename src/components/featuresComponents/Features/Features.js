import React from 'react';
import Image from 'next/image';
import FeatureIcon1 from '../../../assets/unibazar-features-images/feature-Icon1.svg';
import FeatureIcon2 from '../../../assets/unibazar-features-images/feature-Icon2.svg';
import FeatureIcon3 from '../../../assets/unibazar-features-images/feature-Icon3.svg';
import FeatureIcon4 from '../../../assets/unibazar-features-images/feature-Icon4.svg'
import FeatureIcon5 from '../../../assets/unibazar-features-images/feature-Icon5.svg'
import FeatureIcon6 from '../../../assets/unibazar-features-images/feature-Icon6.svg'
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
            Connect All Your Platforms Effortlessly
            </p>
          </div>

          <div className={styles.feature}>
            <Image src={FeatureIcon2} alt="wait.."></Image>
            <h3>Unified Dashboard</h3>
            <p className={styles.small}>
            Centralized Management Hub
            </p>
          </div>

          <div className={styles.feature}>
            <Image src={FeatureIcon3} alt="wait.."></Image>
            <h3>Real-time Analytics</h3>
            <p className={styles.small}>
            Actionable Insights at Your Fingertips
            </p>
          </div>

          <div className={styles.feature}>
            <Image src={FeatureIcon4} alt="wait.."></Image>
            <h3>Seamless Product Listing</h3>
            <p className={styles.small}>
            List Once, Sell Everywhere
            </p>
          </div>

          <div className={styles.feature}>
            <Image src={FeatureIcon5} alt="wait.."></Image>
            <h3> Inventory Management</h3>
            <p className={styles.small}>
            Keep Your Stock in Sync
            </p>
          </div>

          <div className={styles.feature}>
            <Image src={FeatureIcon6} alt="wait.."></Image>
            <h3>User-friendly Interface</h3>
            <p className={styles.small}>
            Designed for Ease of Use
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
