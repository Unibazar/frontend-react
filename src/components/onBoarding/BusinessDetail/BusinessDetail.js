import Link from 'next/link';
const BusinessDetail = ({ nxt }) => {
  return (
    <div className="max-w-[600px] bg-gray-50 w-full max-md:mt-10 h-fit gap-0  flex flex-col items-center my-10 py-10 rounded-xl">
      <h1 className="text-[30px] font-bold text-center">Business Details</h1>
      <p className="text-[16px] text-[#8692a6] leading-[34px] font-normal text-center">For the purpose of industry regulation, your details are required.</p>
      <form className="flex flex-col mt-10 px-5 w-full max-w-[440px]">
        <label htmlFor="name" className="text-[rgba(0,_0,_0,_0.8)] text-[18px] font-semibold">
          Business name:
        </label>
        <input type="text" id="name" name="name" placeholder="Enter Buisness Name" required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
        <label htmlFor="type" className="text-[rgba(0,_0,_0,_0.8)] text-[18px] font-semibold">
          Business type:
        </label>
        <input type="text" id="type" name="type" placeholder="Enter Business Type" required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
        <label htmlFor="number" className="text-[rgba(0,_0,_0,_0.8)] text-[18px] font-semibold">
          Contact no:
        </label>
        <input type="text" id="number" name="number" placeholder="Enter Your Number" required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
        <label htmlFor="address" className="text-[rgba(0,_0,_0,_0.8)] text-[18px] font-semibold">
          Address:
        </label>
        <input type="text" id="address" name="address" placeholder="Enter Buisness Address" required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
        <button className="bg-teal-600 hover:bg-teal-800 w-full md:px-24 px-12 py-4 text-[22px] font-normal text-white tracking-[0.05rem] rounded-lg mt-5" onClick={nxt}>
          NEXT
        </button>
      </form>
    </div>
  );
};

export default BusinessDetail;