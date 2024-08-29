import React from 'react';
import Image from 'next/image';
import FacilityImg1 from '../../assets/unibazar-home-images/feature-img1.svg';
import FacilityImg2 from '../../assets/unibazar-home-images/feature-img2.svg';
import FacilityImg3 from '../../assets/unibazar-home-images/feature-img3.svg';
import FacilityImg4 from '../../assets/unibazar-home-images/feature-img4.svg';
import styles from './Facilities.module.css';

const Facilities = () => {
  return (
    <>
      <div className={styles.facility}>
        <div className={`${styles.facilities} ${styles.wrap}`}>
          <div className={styles.facilitiesImg}>
            <Image src={FacilityImg1} alt="wait.."></Image>
          </div>

          <div className={styles.info}>
            <p className={styles.infoColor}>List Once, Sell Everywhere</p>
            <h2>Seamless Product Listing</h2>
            <p>
              Create and manage product listings from a unified interface. Save <br /> time and effort by listing your products across multiple platforms <br /> simultaneously
            </p>
          </div>
        </div>

        <div className={`${styles.facilities} ${styles.down}`}>
          <div className={styles.info}>
            <p className={styles.infoColor}>Keep Your Stock in Sync</p>
            <h2>Inventory Management</h2>
            <p>
              Automatically synchronize inventory levels across all your sales <br />channels.
               Receive notifications for low stock and out-of-stock items <br /> to ensure you never miss a sale
            </p>
          </div>

          <div className={styles.facilitiesImg}>
            <Image src={FacilityImg2} alt="wait.."></Image>
          </div>
        </div>

        <div className={`${styles.facilities} ${styles.wrap}`}>
          <div className={styles.facilitiesImg}>
            <Image src={FacilityImg3} alt="wait.."></Image>
          </div>
          <div className={styles.info}>
            <p className={styles.infoColor}>Designed for Ease of Use</p>
            <h2>User-friendly Interface</h2>
            <p>
              Unibazar features an intuitive interface designed for users of all skill <br /> levels. Navigate through the platform with ease and efficiency
            </p>
          </div>
        </div>

        <div className={`${styles.facilities} ${styles.down}`}>
          <div className={styles.info}>
            <p className={styles.infoColor}>Operations</p>
            <h2>Optimize your day-to-day operations</h2>
            <p>
              Make your business more efficient by optimizing your <br /> workflow and automating daily tasks, customer emails,
              <br /> invoices and vouchers
            </p>
          </div>
          <div className={styles.facilitiesImg}>
            <Image src={FacilityImg4} alt="wait.."></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
