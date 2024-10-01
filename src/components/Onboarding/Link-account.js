const LinkAccount = () => {
  return (
    <div className="w-[480px] max-w-full max-md:mt-10 h-fit gap-0 rounded-tl-[16px] flex flex-col my-32">
      <h1 className="text-[30px] font-bold text-center">Link Account</h1>
      <p className="text-[16px] text-[#8692a6] leading-[34px] font-normal text-center">For the purpose of industry regulation, your details are required.</p>
      <div className="w-full flex justify-between mb-8">
        <div className="flex flex-col items-center w-[144px] h-[130px] py-3  bg-[rgba(255,_255,_255,_1)]">
          <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5]"></div>
          <div className="h-6  mt-2">
            <span className="font-bold text-[16px] leading-[17px] text-[rgba(0,_0,_0,_0.7)]">Myntra</span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[144px] h-[130px] py-3  bg-[rgba(255,_255,_255,_1)]">
          <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5]"></div>
          <div className="h-6  mt-2">
            <span className="font-bold text-[16px] leading-[17px] text-[rgba(0,_0,_0,_0.7)]">Meesso</span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[144px] h-[130px] py-3  bg-[rgba(255,_255,_255,_1)]">
          <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5]"></div>
          <div className="h-6  mt-2">
            <span className="flex text-center font-bold text-[16px] text-[rgba(0,_0,_0,_0.7)]">
              Own other <br /> site
            </span>
          </div>
        </div>
      </div>
      <button className="self-center bg-custom-gradient max-sm:w-full w-[60%] py-6 text-[22px] font-normal leading-[22px] text-white tracking-[0.05rem] rounded-lg mt-7">NEXT</button>
    </div>
  );
};

export default LinkAccount;
