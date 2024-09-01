// src/pages/dashboard/layout.js
import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
        {/* Add your dashboard navigation here */}
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;