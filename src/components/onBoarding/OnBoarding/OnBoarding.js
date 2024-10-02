import Image from 'next/image';
import logoImage from '../../../../public/unibazar-logo.svg';
import vectorImage5 from '../../../../public/vector5.png';

const Onboarding = ({ nxt }) => {
  return (
    <div className="w-[600px] bg-gray-50 max-w-full max-md:mt-10 h-fit gap-0  flex flex-col items-center my-10 py-10 rounded-xl px-5">
      <Image src={logoImage} alt="logo" className="w-[200px] h-[35px]" />
      <span className="text-[20px] font-bold leading-[30px] tracking-[0.09rem] text-center mt-12">
        MANAGE ALL YOUR E-COMMERCE <br /> PLATFORMS FROM ONE PLACE
      </span>
      <Image src={vectorImage5} alt="vectorImage5" className="w-[300px] h-auto mt-7" />
      <p className="text-[16px] font-normal leading-[20px] text-center text-[#000000b3] mt-3 px-5">
        effortlessly handle their product listings, inventory, and sales across <br /> various e-commerce platforms from a single interface
      </p>
      <button className="bg-teal-600 hover:bg-teal-800 w-full md:px-24 px-12 py-4 text-[22px] font-normal leading-[22px] text-white tracking-[0.05rem] rounded-lg mt-5" onClick={nxt}>
        Get Started
      </button>
    </div>
  );
};

export default Onboarding;