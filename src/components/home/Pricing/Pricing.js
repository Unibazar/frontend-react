import React, { useEffect } from 'react';
import styles from './Pricing.module.css';
import Link from 'next/link';
import { loadUser } from '@/redux/slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Pricing = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
 
 
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <div className={styles.pricing}>
        <div className={styles.pricingText}>
          <h1>Our Pricing</h1>
        </div>

        <div className={styles.pricingPart}>
          <div className={styles.temp}>
            <h1>FREE</h1>
            <p className="text-xl font-bold">$0</p>
            <div className={styles.seperator}></div>
            <p className={`${styles.verySmall} ${styles.small}`}>
              Number of Linked Platforms <b>- 3</b> <br />
              Product Management Limit  <b>- 50</b> <br />
              Dashboard Access  <b>- basic</b> <br />
              Real-time Analytics  <b>- No </b>
              <br />
              Inventory Management  <b>- No</b> <br />
              Customer Support Level  <b> basic</b> <br />
            </p>
            {!user?.user.verified &&
            <div className={`${styles.btn} ${styles.navButtons} md:w-full md:h-full items-end flex justify-center`}>
              <Link href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
                Get started
              </Link>
            </div>
            }
          </div>
          <div className={styles.temp}>
            <h1>PRO</h1>
            <p className="text-xl font-bold">$10</p>
            <div className={styles.seperator}></div>
            <p className={`${styles.verySmall} ${styles.small}`}>
              Number of Linked Platforms <b>- 5</b> <br />
              Product Management Limit <b>- 500</b>  <br />
              Dashboard Access  <b>- Advance</b> <br />
              Real-time Analytics <b>- Yes</b> <br />
              Inventory Management <b>- Yes</b>  <br />
              Customer Support Level-  <b>Priority</b>
              <br />
            </p>
            <div className={`${styles.btn} ${styles.navButtons}md:w-full md:h-full items-end flex justify-center`}>
              <a href="#" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
                Subscription
              </a>
            </div>
          </div>
          <div className={styles.temp}>
            <h1>ENTERPRISE</h1>
            <p className="text-xl font-bold">Custom Pricing</p>
            <div className={styles.seperator}></div>
            <p className={`${styles.verySmall} ${styles.small}`}>
              Number of Linked Platforms <b>- Unlimited</b>  <br />
              Product Management Limit <b>- Unlimited</b> <br />
              Dashboard Access  <b>- Full</b> <br />
              Real-time Analytics <b>- Yes</b> <br />
              Inventory Management  <b>- Yes</b> <br />
              Customer Support Level <b>- Premium </b> <br />
            </p>
            <div className={`${styles.btn} ${styles.navButtons} md:w-full md:h-full items-end flex justify-center`}>
              <Link href="/contact-us" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
