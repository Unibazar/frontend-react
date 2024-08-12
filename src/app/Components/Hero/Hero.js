import React from 'react'
import Image from 'next/image'
import HeroImage from '../../../Assets/unibazar-home images/hero-img.png'
import './Hero.css'
const Hero = () => {
  return (
    <>
      <div class="hero">
        <div class="hero-text">
          <h1>Simplify Your E-commerce <br/> Management with <br/><span>Unibazar</span></h1> 
            <p>Discover how Unibazar can transform your <br/> multi-platform selling experience.</p>
            <div class="nav-buttons">
                <a href="#" class="hero-button">Get Start for Free</a>
            </div>
        </div>

        <div class="hero-img">
          <Image src={HeroImage} alt="hero-image.."></Image>
        </div>
      </div>
    </>
  )
}

export default Hero