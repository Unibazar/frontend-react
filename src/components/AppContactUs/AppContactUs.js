import React from 'react';
// import '../../styles/components/AppContactus.css';
const AppContactUs = () => {
  return (
    <>
      <div className="bg-teal-700 w-full justify-center flex md:flex-col items-center p-3 text-white">
        <p className="font-bold items-center justify-center">CONTACT US</p>
        <p className="font-normal text-center py-3">We would love to hear from you! If you have any questions or need assistance, feel free to reach out to us:</p>
        <div className="font-semibold">
          <p>Phone: 1234567890</p>
          <p>Email: company@email.com</p>
        </div>
      </div>
    </>
  );
};

export default AppContactUs;
