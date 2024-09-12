import Link from 'next/link';

const PersonalInformation = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-[480px] h-fit gap-0 rounded-tl-[16px] flex flex-col my-32">
        <h1 className="text-[30px] font-bold text-center">Personal Information</h1>
        <p className="text-[16px] text-[#8692a6] leading-[34px] font-normal text-center">For the purpose of industry regulation, your details are required.</p>
        <form className="flex flex-col mt-10">
          <label htmlFor="name" className="text-[rgba(0,_0,_0,_0.8)] text-[18px]">
            Name:
          </label>
          <input type="text" id="name" name="name" placeholder="Enter Your Name" required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
          <label htmlFor="email" className="text-[rgba(0,_0,_0,_0.8)] text-[18px]">
            Email:
          </label>
          <input type="email" id="email" name="email" placeholder="Enter Your Email" required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
          <label htmlFor="logo" className="text-[rgba(0,_0,_0,_0.8)] text-[18px]">
            Logo:
            <div className="mb-4 w-full flex items-center justify-between border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 bg-[#f5f5f5]">
              <input type="file" id="logo" name="logo" required className="hidden" />
              <p className="text-[#8692a6] font-thin  text-[17px]">Add Logo</p>
              <svg className="w-6 h-6" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 9.24999C7.11603 9.24999 7.22731 9.2039 7.30936 9.12185C7.39141 9.0398 7.4375 8.92852 7.4375 8.81249V3.74361L9.31525 5.62224C9.35593 5.66292 9.40422 5.69518 9.45736 5.7172C9.51051 5.73921 9.56747 5.75054 9.625 5.75054C9.68253 5.75054 9.73949 5.73921 9.79264 5.7172C9.84578 5.69518 9.89407 5.66292 9.93475 5.62224C9.97543 5.58156 10.0077 5.53327 10.0297 5.48012C10.0517 5.42698 10.0631 5.37001 10.0631 5.31249C10.0631 5.25496 10.0517 5.198 10.0297 5.14485C10.0077 5.09171 9.97543 5.04342 9.93475 5.00274L7.30975 2.37774C7.26911 2.337 7.22083 2.30467 7.16768 2.28262C7.11453 2.26056 7.05755 2.24921 7 2.24921C6.94245 2.24921 6.88547 2.26056 6.83232 2.28262C6.77917 2.30467 6.73089 2.337 6.69025 2.37774L4.06525 5.00274C3.9831 5.08489 3.93695 5.19631 3.93695 5.31249C3.93695 5.42867 3.9831 5.54009 4.06525 5.62224C4.1474 5.70439 4.25882 5.75054 4.375 5.75054C4.49118 5.75054 4.6026 5.70439 4.68475 5.62224L6.5625 3.74361V8.81249C6.5625 8.92852 6.60859 9.0398 6.69064 9.12185C6.77269 9.2039 6.88397 9.24999 7 9.24999ZM0.875 11.4375C0.875 11.3215 0.921094 11.2102 1.00314 11.1281C1.08519 11.0461 1.19647 11 1.3125 11H12.6875C12.8035 11 12.9148 11.0461 12.9969 11.1281C13.0789 11.2102 13.125 11.3215 13.125 11.4375C13.125 11.5535 13.0789 11.6648 12.9969 11.7468C12.9148 11.8289 12.8035 11.875 12.6875 11.875H1.3125C1.19647 11.875 1.08519 11.8289 1.00314 11.7468C0.921094 11.6648 0.875 11.5535 0.875 11.4375Z"
                  fill="black"
                  fill-opacity="0.2"
                />
              </svg>
            </div>
          </label>
          <label htmlFor="description" className="mt-4 text-[rgba(0,_0,_0,_0.8)] text-[18px]">
            Description:
          </label>
          <input type="text" id="description" name="description" placeholder="Description.........." required className="mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5]" />
          <Link href={'/business-detail'} className="w-full flex justify-center">
            <button className="self-center bg-custom-gradient w-[60%] py-6 text-[22px] font-normal leading-[22px] text-white tracking-[0.05rem] rounded-lg mt-7">NEXT</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
