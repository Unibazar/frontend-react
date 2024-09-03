'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

export default function Personalinformation() {

  const [userPhotoSrc, setUserPhotoSrc] = useState("");
  const [userPhoto, setUserPhoto] = useState();
  const userPhotoRef = useRef();
  
  const [userData, setUserData] = useState({
    userName: "",
    phoneNumber: "",
    location: "",
    email: "",
    bio: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(userData);
      console.log(userPhoto);
      
  }


  return (
    <div>
      <form className="w-full p-7" onSubmit={(e)=>handleSubmit(e)}>
        
          <div className="flex p-4 mt-2 gap-7 flex-wrap items-center">
            <div className="relative w-[10rem] h-[10rem] border-2 rounded-full overflow-hidden bg-[#F5F7FA] flex items-center justify-center">
              {userPhotoSrc && <Image src={userPhotoSrc} height={50} width={50} alt="p1" className="w-full h-full object-cover" />}
              {!userPhotoSrc && <FiPlusCircle className="text-2xl opacity-70" onClick={() => userPhotoRef.current.click()} />}
              <input type="file" className="hidden" name="userPhoto" ref={userPhotoRef} onChange={(e) => { setUserPhoto(e.target.files[0]); setUserPhotoSrc(URL.createObjectURL(e.target.files[0])) }} />
            </div>
              <button onClick={() => userPhotoRef.current.click()} className="bg-[#E8F7FF] text-[#08A9A0] px-10 py-4 font-bold rounded-md">Choose Image</button>
          </div>

          <div className="flex gap-7 flex-wrap">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="userName">Full Name:</label>
              <input id="userName" type="text" placeholder="Add Product Name" name="userName" value={userData.userName} onChange={(e) => handleChange(e)} className="border-2 text-sm md:text-lg p-2 rounded-lg" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input id="phoneNumber" type="number" placeholder="Phone" name="phoneNumber" value={userData.phoneNumber} onChange={(e) => handleChange(e)}  className="border-2 text-sm md:text-lg p-2 rounded-lg" />
            </div>
          </div>
          <div className="flex gap-7 flex-wrap mt-5">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="location">Location:</label>
              <input id="location" type="text" placeholder="Enter Address" name="location" value={userData.location} onChange={(e) => handleChange(e)} className="border-2 text-sm md:text-lg p-2 rounded-lg" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" placeholder="Enter Your Email" name="email" value={userData.email} onChange={(e) => handleChange(e)} className="border-2 text-sm md:text-lg p-2 rounded-lg" />
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 w-full mt-7">
            <label htmlFor="bio">Biography:</label>
            <textarea id="bio" placeholder="Write Something About Yourself" name="bio" rows={6} value={userData.bio} onChange={(e) => handleChange(e)} className="border-2 text-sm md:text-lg p-2 rounded-lg"></textarea>
          </div>


          <div className="submitBtn mt-4 flex">
            <button className="p-2 px-4 bg-[#08A9A0] text-white rounded-lg flex gap-2 items-center">Save Changes </button>
          </div>
      </form>
    </div>
  )
}
