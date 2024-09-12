import Image from 'next/image';
import logoImage from '../../../public/unibazar-logo.png';
import vectorImage5 from '../../../public/vector5.png';
import Link from 'next/link';
const Onboarding = () => {
  console.log(logoImage);

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-[640px] h-fit gap-0 rounded-tl-[16px] flex flex-col items-center my-32">
        <Image src={logoImage} alt="logo" className="w-[215px] h-[35px]" />
        <span className="text-[20px] font-bold leading-[30px] tracking-[0.09rem] text-center mt-12">
          MANAGE ALL YOUR E-COMMERCE <br /> PLATFORMS FROM ONE PLACE
        </span>
        <Image src={vectorImage5} alt="vectorImage5" className="w-[300px] h-auto mt-7" />
        <p className="text-[16px] font-normal leading-[20px] text-center text-[#000000b3] mt-3">
          effortlessly handle their product listings, inventory, and sales across <br /> various e-commerce platforms from a single interface
        </p>
        <Link href={'/personal-information'} className="w-full flex justify-center">
          <button className="bg-custom-gradient w-[60%] py-6 text-[22px] font-normal leading-[22px] text-white tracking-[0.05rem] rounded-lg mt-20">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;
