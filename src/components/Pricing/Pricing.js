import React from 'react';
import styles from './Pring.module.css';
const Pricing = () => {
  return (
    <>
      <div className={styles.pricing}>
        <div className={styles.pricingText}>
          <h1>Our Pricing</h1>
        </div>

        <div className={styles.pricingPart}>
          <div className={styles.temp}>
            <p>FREE</p>
            <p>$0</p>
            <p className={`${styles.verySmall} ${styles.small}`}>
              Number of Linked Platforms <b>- 3</b> <br />
              Product Management Limit  <b>- 50</b> <br />
              Dashboard Access  <b>- basic</b> <br />
              Real-time Analytics  <b>- No </b>
              <br />
              Inventory Management  <b>- No</b> <br />
              Customer Support Level  <b> basic</b> <br />
            </p>
            <div className={`${styles.btn} ${styles.navButtons}`}>
              <a href="#" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
                Get started
              </a>
            </div>
          </div>
          <div className={styles.temp}>
            <p>PRO</p>
            <p>$10</p>
            <p className={`${styles.verySmall} ${styles.small}`}>
              Number of Linked Platforms <b>- 5</b> <br />
              Product Management Limit <b>- 500</b>  <br />
              Dashboard Access  <b>- Advance</b> <br />
              Real-time Analytics <b>- Yes</b> <br />
              Inventory Management <b>- Yes</b>  <br />
              Customer Support Level-  <b>Priority</b>
              <br />
            </p>
            <div className={`${styles.btn} ${styles.navButtons}`}>
              <a href="#" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
                Subscription
              </a>
            </div>
          </div>
          <div className={styles.temp}>
            <p>ENTERPRISE</p>
            <p>Custom Pricing</p>
            <p className={`${styles.verySmall} ${styles.small}`}>
              Number of Linked Platforms <b>- Unlimited</b>  <br />
              Product Management Limit <b>- Unlimited</b> <br />
              Dashboard Access  <b>- Full</b> <br />
              Real-time Analytics <b>- Yes</b> <br />
              Inventory Management  <b>- Yes</b> <br />
              Customer Support Level <b>- Premium </b> <br />
            </p>
            <div className={`${styles.btn} ${styles.navButtons}`}>
              <a href="#" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
