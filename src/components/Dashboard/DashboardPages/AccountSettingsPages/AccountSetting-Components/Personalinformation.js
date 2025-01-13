'use client'

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { savePersonalInformation } from '../../../../../redux/slice/personalInfoSlice';
import { IoIosCloseCircle } from "react-icons/io";
import { loadUser } from "@/redux/slice/userSlice";
import { saveCredentials } from "@/redux/slice/credentialSlice";

export default function PersonalInformation() {
  const dispatch = useDispatch();
  const personalInfoFromStore = useSelector((state) => state.personalInfo.info); // Get personal info from Redux store

  const [userPhotoSrc, setUserPhotoSrc] = useState("");
  const [userPhoto, setUserPhoto] = useState();
  const userPhotoRef = useRef();

  

  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    number: "",
    logo: null,
    description: ""
  });

  useEffect(() => {
    dispatch(loadUser()).then(data => {
      const businessInformation = data?.payload?.user?.businessInformation
      setPersonalData({
        name: businessInformation?.name,
        email: businessInformation?.email,
        number: businessInformation?.number,
        address:businessInformation?.address,
        logo: null,
        description: businessInformation?.description
      })
    });
  }, [dispatch])

  // Set initial personal data from Redux store
  useEffect(() => {
    if (personalInfoFromStore) {
      setPersonalData(personalInfoFromStore);
    }
  }, [personalInfoFromStore]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the data to dispatch
    const dataToSubmit = {
      ...personalData,
      logo: userPhoto // Include the logo file
    };

    // Dispatch the personal information to the Redux store
    dispatch(saveCredentials(dataToSubmit));
  };

  return (
    <div>
      <form className="w-full p-7" onSubmit={handleSubmit}>
        <div className="flex p-4 mt-2 gap-7 flex-wrap items-center">
          <div className="relative w-[10rem] h-[10rem] border-2 rounded-full overflow-hidden bg-[#F5F7FA] flex items-center justify-center">
            {userPhotoSrc && <Image src={userPhotoSrc} height={50} width={50} alt="Profile" className="w-full h-full object-cover" />}
            {!userPhotoSrc && <FiPlusCircle className="text-2xl opacity-70" onClick={() => userPhotoRef.current.click()} />}
            <input
              type="file"
              className="hidden"
              name="logo"
              ref={userPhotoRef}
              onChange={(e) => {
                setUserPhoto(e.target.files[0]);
                setUserPhotoSrc(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </div>
          <button onClick={() => userPhotoRef.current.click()} className="bg-[#E8F7FF] text-[#08A9A0] px-10 py-4 font-bold rounded-md">Choose Image</button>
        </div>

        <div className="flex gap-7 flex-wrap">
          {/* <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="name">Full Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Add Your Name"
              name="name"
              value={personalData.name}
              onChange={handleChange}
              className="border-2 text-sm md:text-lg p-2 rounded-lg"
            />
          </div> */}
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="number">Phone Number:</label>
            <input
              id="number"
              type="tel"
              placeholder="Phone"
              name="number" // This should be updated to match the slice if necessary
              value={personalData.number} // This should be updated to match the slice if necessary
              onChange={handleChange}
              className="border-2 text-sm md:text-lg p-2 rounded-lg"
            />
          </div>
        </div>

        <div className="flex gap-7 flex-wrap mt-5">
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="address">Location:</label>
            <input
              id="address"
              type="text"
              placeholder="Enter Address"
              name="address" // This should be updated to match the slice if necessary
              value={personalData.address} // This should be updated to match the slice if necessary
              onChange={handleChange}
              className="border-2 text-sm md:text-lg p-2 rounded-lg"
            />
          </div>
          {/* <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={personalData.email}
              onChange={handleChange}
              className="border-2 text-sm md:text-lg p-2 rounded-lg"
            />
          </div> */}
        </div>

        <div className="flex flex-col gap-2 flex-1 w-full mt-7">
          <label htmlFor="description">Biography:</label>
          <textarea
            id="description"
            placeholder="Write Something About Yourself"
            name="description"
            rows={6}
            value={personalData.description}
            onChange={handleChange}
            className="border-2 text-sm md:text-lg p-2 rounded-lg"
          ></textarea>
        </div>

        <div className="submitBtn mt-4 flex">
          <button className="p-2 px-4 bg-[#08A9A0] text-white rounded-lg flex gap-2 items-center">Save Changes</button>
        </div>
      </form>
    </div>
  );
}