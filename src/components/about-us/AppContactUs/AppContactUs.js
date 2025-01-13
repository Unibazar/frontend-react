import React from 'react';
const AppContactUs = () => {
  return (
    <>
      <div className="bg-teal-700 w-full justify-center flex-col  items-center p-3 text-white">
        <p className=" w-full flex font-bold items-center justify-items-center justify-center">CONTACT US</p>
        <p className="font-normal text-center py-3">We would love to hear from you! If you have any questions or need assistance, feel free to reach out to us:</p>
        <div className=" font-semibold  md:justify-cente">
          <p className=" flex md:justify-center justify-start">Phone: +08069641420</p>
          <p className=" flex md:justify-center justify-start">Email: support@unibazar.in</p>
        </div>
      </div>
    </>
  );
};

export default AppContactUs;
