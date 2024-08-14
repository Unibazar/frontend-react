import Image from "next/image"
const page = () => {
  return (
    <div className='bg-white text-black min-h-screen py-20 px-9 max-sm::px-7'>
      <section className="flex flex-col gap-8 max-md:items-center max-md:text-center">
        <span className="text-[45px] leading-[45px] font-medium max-lg:text-[40px] leading-9]">Unlock the Power of Seamless<br/> E-commerce Management</span>
        <p className="text-[19px] leading-6 max-lg:text-[17px]">Discover how Unibazar can transform your multi-platform <br/> selling experience.</p>
        <button className="text-[16px] w-fit bg-[#08A9A0] py-4 px-10 rounded-lg text-white max-lg:text-[14px] max-md:text-[12px]">Get Start for Free</button>
      </section>
      <section className="flex flex-col items-center mt-16 gap-6 bg-[#F5FDFD] py-5">
        <div className="text-center">
          <span className="font-medium text-[18px]">Trusted by Leading Indian Enterprises</span>
          <p className="text-[10px] font-medium">We are delighted to share that our resort is now prominently featured in the updated media gallery</p>
        </div>
        <div className="grid grid-cols-8 gap-x-10 items-center max-lg:gap-x-5 max-md:grid-cols-3 max-md:gap-x-12">
          <Image src={'/image20.png'} alt='flipkart' width={70} height={70}/>
          <Image src={'/image22.png'} alt='flipkart' width={70} height={70}/>
          <Image src={'/image18.png'} alt='flipkart' width={70} height={70}/>
          <Image src={'/image15.png'} alt='flipkart' width={70} height={70}/>
          <Image src={'/image16.png'} alt='flipkart' width={70} height={70}/>
          <Image src={'/image17.png'} alt='flipkart' width={70} height={70}/>
          <Image src={'/image19.png'} alt='flipkart' width={70} height={70}/>
          <Image src={'/image21.png'} alt='flipkart' width={70} height={70}/>
        </div>
      </section>
    </div>
  )
}

export default page