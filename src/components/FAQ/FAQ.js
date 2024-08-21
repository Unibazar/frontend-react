import React from 'react';
import Image from 'next/image';
import Add from '../../assets/unibazar-home-images/add.png';
import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <>
      <div className={styles.faqs}>
        <div className={styles.faqsText}>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqsPart}>
          <div className={styles.faqSides}>
            <div className={styles.faqsItem}>
              <p>How is Evergreen priced?</p>
              <Image src={Add} alt="add.."></Image>
            </div>

            <div className={styles.faqsItem}>
              <p>Is there a trail period?</p>
              <Image src={Add} alt="add.."></Image>
            </div>

            <div className={styles.faqsItem}>
              <p>Does it work offline?</p>
              <Image src={Add} alt="add.."></Image>
            </div>

            <div className={styles.faqsItem}>
              <p>Is my data secure?</p>
              <Image src={Add} alt="add.."></Image>
            </div>
          </div>

          <div className={styles.faqSides}>
            <div className={styles.faqsItem}>
              <p>Is there a mobile app</p>
              <Image src={Add} alt="add.."></Image>
            </div>
            <div className={styles.faqsItem}>
              <p>Is there a mobile app</p>
              <Image src={Add} alt="add.."></Image>
            </div>
            <div className={styles.faqsItem}>
              <p>Is there a mobile app</p>
              <Image src={Add} alt="add.."></Image>
            </div>
            <div className={styles.faqsItem}>
              <p>Is there a mobile app</p>
              <Image src={Add} alt="add.."></Image>
            </div>
          </div>

          <div className="faqs-item">
            <p>Does it work offline?</p>
            <Image src={Add} alt="add.."></Image>
          </div>

          <div className="faqs-item">
            <p>Is my data secure?</p>
            <Image src={Add} alt="add.."></Image>
          </div>
        </div>

        <div className="faq-sides">
          <div className="faqs-item">
            <p>Is there a mobile app</p>
            <Image src={Add} alt="add.."></Image>
          </div>
          <div className="faqs-item">
            <p>Is there a mobile app</p>
            <Image src={Add} alt="add.."></Image>
          </div>
          <div className="faqs-item">
            <p>Is there a mobile app</p>
            <Image src={Add} alt="add.."></Image>
          </div>
          <div className="faqs-item">
            <p>Is there a mobile app</p>
            <Image src={Add} alt="add.."></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
