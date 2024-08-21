import React from 'react'
import Image from 'next/image';
import Banner1 from '../../assets/unibazar-home-images/banner1.png'
import Banner2 from '../../assets/unibazar-home-images/banner2.png'
import styles from './Banner.module.css'
const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerImg}>
          <Image src={Banner1} alt="wait"></Image>
        </div>
        <div className={styles.bannerImg}>
          <Image src={Banner2} alt="wait"></Image>
        </div>
    </div>
    </>
  )
}

export default Banner