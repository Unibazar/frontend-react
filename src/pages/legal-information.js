import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'
import Head from "next/head";

const legalInformation = () => {
  const docUpdatedDate = new Date("2024-09-27").toDateString();

  return (
    <div className="p-10">
      <Head>
        <title>Legal Information | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <br />
      <br />
      <br />

      <div className='w-full flex  flex-col justify-start items-center text-left'>
        <p className='w-full font-bold text-4xl uppercase'>legal and Information</p>
        <br />
        <p className='w-full text-xl font-light'>{`Effective Date: ${docUpdatedDate}`}</p>
      </div>

      <br />
      <br />
      <br />
      <div className='w-full flex flex-col justify-center text-center items-center'>
        <p className='w-full font-bold text-2xl '>Legal Overview</p>
        <br />
        <p className='w-full text-[18px] opacity-70 px-0 md:px-36'>This page provides legal information and policies that govern your use of Unibazar Technologies Pvt. Ltd. We are committed to transparency and protecting your rights while using our platform</p>
      </div>

      <br />
      <br />


      <div className='w-full flex flex-col justify-start text-left items-start gap-5'>
        <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
          <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong /> Terms of Service</p>

          <div className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>Our Terms of Service outline the rules and obligations you agree to when using Unibazar’s platform. These terms govern your relationship with Unibazar, including account creation, subscription plans, and limitations of liability.
            For full details, please review our <Link href="/term-and-conditions" className="text-teal-700 underline">Terms of Service</Link>
          </div>
        </div>
        <div className='w-full flex flex-col justify-start text-left outline outline-1 outline-gray-300 rounded-xl p-5'>
          <p className='w-full font-bold text-xl flex flex-row gap-2 items-center'><FaArrowRightLong /> Privacy Policy</p>

          <div className='w-full text-[14px] opacity-70 pt-2 pr-0 md:pr-32'>We take your privacy seriously. Our Privacy Policy explains how we collect, store, and protect your personal data. It also outlines your rights regarding data privacy.
            For more information, please refer to our  <Link href="/privacy-and-policy" className="text-teal-700 underline">Privacy Policy.</Link>
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



    </div>
  );
};

export default legalInformation;
