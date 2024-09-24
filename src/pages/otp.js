import React from 'react';
import Head from 'next/head';
import Otp from '@/components/Auth/OTP/OTP';

const otp = () => {
  return (
    <div>
      <Head>
        <title>Otp | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <Otp />
    </div>
  );
};

export default otp;
