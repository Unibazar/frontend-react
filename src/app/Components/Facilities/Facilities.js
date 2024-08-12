import React from 'react'
import Image from 'next/image'
import FacilityImg1 from '../../../Assets/unibazar-home images/feature-img1.png'
import FacilityImg2 from '../../../Assets/unibazar-home images/feature-img2.png'
import FacilityImg3 from '../../../Assets/unibazar-home images/feature-img3.png'
import FacilityImg4 from '../../../Assets/unibazar-home images/feature-img4.png'
import './Facilities.css'
const Facilities = () => {
  return (
    <>
      <div class="facility">
        <div class="facilities">
            <div class="facilities-img">
                <Image src={FacilityImg1} alt="wait.."></Image>
            </div>

            <div class="info">
                <p class="info-color">List Once, Sell Everywhere</p>
                <h2>Seamless Product Listing</h2>
                <p>Create and manage product listings from a unified interface. Save <br/> time and effort by listing
                    your
                    products across multiple platforms <br/> simultaneously</p>
            </div>
        </div>

        <div class=" wrap facilities">
            <div class="info">
                <p class="info-color">Keep Your Stock in Sync</p>
                <h2>Inventory Management</h2>
                <p>Automatically synchronize inventory levels across all your sales channels. Receive notifications for
                    low
                    stock and out-of-stock items <br/> to ensure you never miss a sale</p>
            </div>

            <div class="facilities-img">
             <Image src={FacilityImg2} alt="wait.."></Image>
            </div>
        </div>

        <div class="facilities">
            <div class="facilities-img">
             <Image src={FacilityImg3} alt="wait.."></Image>
            </div>

            <div class="info">
                <p class="info-color">Designed for Ease of Use</p>
                <h2>User-friendly Interface</h2>
                <p>Unibazar features an intuitive interface designed for users of all skill <br/> levels. Navigate
                    through
                    the platform with ease and efficiency</p>
            </div>
        </div>

        <div class=" wrap facilities">
            <div class="info">
                <p class="info-color">Operations</p>
                <h2>Optimize your day-to-day operations</h2>
                <p>Make your business more efficient by optimizing your <br/> workflow and automating daily tasks,
                    customer
                    emails,<br/> invoices and vouchers</p>
            </div>

            <div class="facilities-img">
             <Image src={FacilityImg4} alt="wait.."></Image>
            </div>
        </div>
    </div>

    </>
  )
}

export default Facilities