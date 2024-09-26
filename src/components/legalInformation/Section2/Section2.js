import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'

const Section2 = () => {
  return (
    <div className='w-full flex flex-col justify-start text-left items-start gap-5'>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong /> Terms of Service</p>

        <div className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>Our Terms of Service outline the rules and obligations you agree to when using Unibazar’s platform. These terms govern your relationship with Unibazar, including account creation, subscription plans, and limitations of liability.
          For full details, please review our <Link href="/terms&condition" className="text-teal-700 underline">Terms of Service</Link>
        </div>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong /> Privacy Policy</p>

        <div className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>We take your privacy seriously. Our Privacy Policy explains how we collect, store, and protect your personal data. It also outlines your rights regarding data privacy.
          For more information, please refer to our  <Link href="/privacy&policy" className="text-teal-700 underline">Privacy Policy.</Link>
        </div>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong /> Intellectual Property</p>

        <p className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>All intellectual property, including content, trademarks, logos, and designs on Unibazar, is owned by Unibazar Technologies Pvt. Ltd. Any unauthorized use of our intellectual property is prohibited.</p>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong /> Data Protection</p>

        <p className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>Unibazar complies with data protection laws, including the General Data Protection Regulation (GDPR) and relevant Indian data protection laws. We have implemented security measures to protect your data and ensure compliance with legal standards.</p>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong /> Dispute Resolution</p>

        <div className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>Any disputes or legal claims arising from your use of Unibazar will be governed by Indian law and handled through arbitration in [Location], India. You may also have the right to resolve disputes in your local jurisdiction, depending on applicable laws.<br />
          For any legal inquiries, please contact us at <Link className="text-teal-700" href='mailto:legal@unibazar.com'>[legal@unibazar.com].</Link>
        </div>
      </div>
      <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
        <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong />Termination of Service</p>

        <p className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>Unibazar may suspend or terminate your account and access to the platform at any time for violations of these Terms of Service or other legal reasons. You may also terminate your account at any time by contacting support.</p>
      </div>

    </div>
  )
}

export default Section2
