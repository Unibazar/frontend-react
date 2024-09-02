import React from 'react';
import Head from 'next/head';
import OtpComponent from '../components/Auth/opt/OtpComponent';

const otp = () => {
  return (
    <div>
      <Head>
        <title>Otp | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <OtpComponent/>
    </div>
  );
};

export default otp;
