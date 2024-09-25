import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'

const Section2 = () => {
  return (
    <div className='w-full flex flex-col justify-start text-left items-start gap-5'>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong />Information We Collect</p>

        <p className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>We collect information that you provide when creating an account, such as your name, email address, and payment details. Additionally, we collect usage data, including IP addresses, browser types, and activity logs, to improve our platform and provide better service.</p>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong />How We Use Your Information</p>

        <div className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>Your personal information is used to:
          <ul className='list-disc px-5'>
            <li>Provide and manage your account.</li>
            <li>Process transactions and provide customer support.</li>
            <li>Improve our platform by analyzing usage patterns</li>
            <li>Communicate important updates, promotions, and product features.</li>
          </ul>
          We do not sell or share your data with third parties for marketing purposes.
        </div>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong />Data Sharing</p>

        <p className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>We may share your data with third-party service providers for operational purposes, such as payment processing or cloud storage. These third parties are contractually obligated to protect your data.<br />
          We may also share data if required by law or if we believe in good faith that it is necessary to comply with legal obligations or protect the rights and safety of our users.</p>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong />Data Security</p>

        <p className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>We use industry-standard security measures, including encryption and firewalls, to protect your data from unauthorized access, disclosure, or alteration. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security</p>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong />Your Data Rights</p>

        <div className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>You have the right to:
          <ul className='list-disc px-5'>
            <li>Access the personal data we hold about you.</li>
            <li>Request the correction or deletion of your data.</li>
            <li>Object to the processing of your data in certain circumstances.</li>
            <li>Withdraw consent for data processing at any time.</li>
          </ul>
          {`To exercise any of these rights, please contact us at ${<Link href='mailto:support@unibazar.com'></Link>}[support@unibazar.com]. `}
        </div>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong />Use of Cookies</p>

        <p className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>Unibazar uses cookies to enhance your experience, such as keeping you logged in and analyzing site usage. You can control or disable cookies through your browser settings, but this may affect some functionality.</p>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong />Data Retention</p>

        <p className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>We retain your personal information for as long as your account is active or as needed to provide services. If you close your account, we will retain data only as necessary to comply with legal obligations or for legitimate business purposes.</p>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong />Changes to This Policy</p>

        <p className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>{`Unibazar may update this Privacy Policy from time to time. We will notify you of any significant changes via email or a prominent notice on our platform.
        For any privacy-related concerns, please contact us at ${<Link href='mailto:privacy@unibazar.com'>[privacy@unibazar.com].</Link>}`}</p>
      </div>
    </div>
  )
}

export default Section2
