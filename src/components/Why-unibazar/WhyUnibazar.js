import React from 'react';
// import '../../styles/components/WhyUnibazar.css';
const WhyUnibazar = () => {
  return (
    <>
      <div className="w-full flex md:flex-col justify-center items-center text-center p-5">
        <p className="font-bold text-3xl p-3">WHY UNIBAZAR?</p>
        <p className="text-lg">
          Managing multiple e-commerce platforms can be overwhelming and time-consuming.
          <br /> Unibazar offers a streamlined solution, allowing you to
        </p>
        <div className="w-4/5 flex md:flex-row flex-col gap-5  justify-around py-5">
          <div className=" rounded-xl border border-gray-200 p-1.5">
            <p className="text-lg font-bold p-3">
              SIMPLIFY
              <br />
              LISTING
            </p>
            <p className="text-lg">List your products across various platforms with a single click.</p>
          </div>
          <div className=" rounded-xl border border-gray-200 p-1.5">
            <p className="text-lg font-bold p-3">
              CENTRALIZE
              <br />
              MANAGEMENT
            </p>
            <p className="text-lg">Monitor sales, inventory, and orders from one comprehensive dashboard.</p>
          </div>
          <div className=" rounded-xl border border-gray-200 p-1.5">
            <p className="text-lg font-bold p-3">
              GAIN
              <br />
              INSIGHT
            </p>
            <p className="text-lg">Leverage real-time analytics to make informed business decisions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUnibazar;
