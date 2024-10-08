import React from 'react';
import Image from 'next/image';
import FlipkartLogo from '../../../assets/unibazar-home-images/flipkart-logo.svg';
import AmazoneLogo from '../../../assets/unibazar-home-images/amazon-logo.svg';
import ShopifyLogo from '../../../assets/unibazar-home-images/shopify-logo.svg';
import MyntraLogo from '../../../assets/unibazar-home-images/myntra-logo.svg';
import SnapdealLogo from '../../../assets/unibazar-home-images/snapdeal-logo.svg';
import NykaaLogo from '../../../assets/unibazar-home-images/nykaa-logo.svg';
import LimeRoadLogo from '../../../assets/unibazar-home-images/limeRoad-logo.svg';
import AjioLogo from '../../../assets/unibazar-home-images/ajio-logo.svg';
import styles from './Enterprises.module.css';
const Enterprises = () => {
  return (
    <>
      <div className={styles.enterprise}>
        <div className={styles.enterpriseText}>
          <h2>Trusted by Leading Indian Enterprises</h2>
          <p>We are delighted to share that our resort is now prominently featured in the updated media gallery</p>
        </div>

        <div className={styles.enterpriseImage}>
          <div className={styles.enterpriseImg}>
            <Image src={FlipkartLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className={styles.enterpriseImg}>
            <Image src={AmazoneLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className={styles.enterpriseImg}>
            <Image src={NykaaLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className={styles.enterpriseImg}>
            <Image src={MyntraLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className={styles.enterpriseImg}>
            <Image src={ShopifyLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className={styles.enterpriseImg}>
            <Image src={AjioLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className={styles.enterpriseImg}>
            <Image src={SnapdealLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className={styles.enterpriseImg}>
            <Image src={LimeRoadLogo} alt="enterprise-logo.."></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enterprises;
