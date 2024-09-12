const LinkAccount = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-[480px] h-fit gap-0 rounded-tl-[16px] flex flex-col my-32">
        <h1 className="text-[30px] font-bold text-center">Link Account</h1>
        <p className="text-[16px] text-[#8692a6] leading-[34px] font-normal text-center">For the purpose of industry regulation, your details are required.</p>
        <div className="w-full flex items-center justify-between mb-8">
          <div className="w-[124px] h-[92px] py-3  bg-[rgba(255,_255,_255,_1)]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5]"></div>
            <span className="font-bold text-[16px] leading-[17px] text-[rgba(0,_0,_0,_0.7)] mt-2">Myntra</span>
          </div>
          <div className="w-[124px] h-[92px] py-3  bg-[rgba(255,_255,_255,_1)]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5]"></div>
            <span className="font-bold text-[16px] leading-[17px] text-[rgba(0,_0,_0,_0.7)] mt-2">Myntra</span>
          </div>
          <div className="w-[124px] h-[92px] py-3  bg-[rgba(255,_255,_255,_1)]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5]"></div>
            <span className="font-bold text-[16px] leading-[17px] text-[rgba(0,_0,_0,_0.7)] mt-2">Myntra</span>
          </div>
        </div>
        <button className="self-center bg-custom-gradient w-[60%] py-6 text-[22px] font-normal leading-[22px] text-white tracking-[0.05rem] rounded-lg mt-7">NEXT</button>
      </div>
    </div>
  );
};

export default LinkAccount;
