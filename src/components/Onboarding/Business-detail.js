import Link from 'next/link';
const BusinessDetail = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-[480px] h-fit gap-0 rounded-tl-[16px] flex flex-col my-32">
        <h1 className="text-[30px] font-bold text-center">Business Details</h1>
        <p className="text-[16px] text-[#8692a6] leading-[34px] font-normal text-center">For the purpose of industry regulation, your details are required.</p>
        <form className="flex flex-col mt-10">
          <label htmlFor="name" className="text-[rgba(0,_0,_0,_0.8)] text-[18px]">
            Business name:
          </label>
          <input type="text" id="name" name="name" placeholder="Enter Buisness Name" required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
          <label htmlFor="type" className="text-[rgba(0,_0,_0,_0.8)] text-[18px]">
            Business type:
          </label>
          <input type="text" id="type" name="type" placeholder="Enter Business Type" required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
          <label htmlFor="number" className="text-[rgba(0,_0,_0,_0.8)] text-[18px]">
            Contact no:
          </label>
          <input type="number" id="number" name="number" placeholder="Enter Your Number" required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
          <label htmlFor="address" className="text-[rgba(0,_0,_0,_0.8)] text-[18px]">
            Address:
          </label>
          <input type="text" id="address" name="address" placeholder="Enter Buisness Address" required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
          <Link href={'/link-account'} className="w-full flex justify-center">
            <button className="self-center bg-custom-gradient w-[60%] py-6 text-[22px] font-normal leading-[22px] text-white tracking-[0.05rem] rounded-lg mt-7">NEXT</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default BusinessDetail;
