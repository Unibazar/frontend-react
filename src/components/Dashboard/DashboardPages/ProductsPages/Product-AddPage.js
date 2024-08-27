'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";


export default function ProductPage() {
  const [ProductData, setProductData] = useState({
    Name: "",
    Price: "",
    Description: "",
    Category: "",
    InventoryCount: "",
    productPhoto1: {},
    productPhoto2: {},
    productPhoto3: {},
    productPhoto4: {}
  })
  const productPhoto1 = useRef(null);
  const productPhoto2 = useRef(null);
  const productPhoto3 = useRef(null);
  const productPhoto4 = useRef(null);
  const [ProductPhotoSrc1, setProductPhotoSrc1] = useState("");
  const [ProductPhotoSrc2, setProductPhotoSrc2] = useState("");
  const [ProductPhotoSrc3, setProductPhotoSrc3] = useState("");
  const [ProductPhotoSrc4, setProductPhotoSrc4] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ProductData);
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProductData(prevState => ({ ...prevState, [name]: files[0] }))
  }

  return (
    <div className='h-full w-full  px-4 py-4 md:px-7 md:py-7'>
      <div className='title flex flex-wrap justify-between items-center'>
        <h1 className='md:text-3xl text-lg font-semibold '>Products</h1>
        <div className=''>
          <button className="box p-3 bg-[#08A9A0] text-white rounded-l-md text-sm">
            Add New Products
          </button>
        </div>
      </div>

      <div className='boxs flex mt-4 gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7'>
        {/* form for user to enter details about product */}
        <form className="w-full">
          <div className="flex gap-7 flex-wrap">
            <div className="flex flex-col gap-4 flex-1 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="productName">Name:</label>
                <input id="productName" type="text" placeholder="Add Product Name" name="Name" value={ProductData.Name} onChange={(e) => handleChange(e)} className="border-2 text-sm md:text-lg p-2 rounded-lg" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="price">Price:</label>
                <input id="price" type="text" placeholder="Enter Price" name="Price" value={ProductData.Price} onChange={(e) => handleChange(e)} className="border-2 text-sm md:text-lg p-2 rounded-lg" />
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1 w-full">
              <label htmlFor="description">Description:</label>
              <textarea id="description" placeholder="Enter Product Description" name="Description" value={ProductData.Description} onChange={(e) => handleChange(e)} rows={6} className="border-2 text-sm md:text-lg p-2 rounded-lg"></textarea>
            </div>
          </div>

          <div className="flex gap-7 mt-4 flex-wrap">
            <div className="flex flex-col gap-2 flex-1 w-full">
              <label htmlFor="category">Category:</label>
              <textarea id="category" placeholder={"Write Feature in Each Line \n Feature 1 \n Feature 2 "} name="Category" value={ProductData.Category} onChange={(e) => handleChange(e)} rows={6} className="border-2 text-sm md:text-lg p-2 rounded-lg"></textarea>
            </div>
            <div className="flex flex-col gap-2 flex-1 w-full">
              <label htmlFor="inventoryCount">Inventory Count:</label>
              <textarea id="inventoryCount" placeholder="Enter No of Available Stocks" value={ProductData.InventoryCount} name="InventoryCount" onChange={(e) => handleChange(e)} rows={6} className="border-2 p-2 text-sm md:text-lg rounded-lg"></textarea>
            </div>
          </div>

          <div className="flex mt-4 gap-7 flex-wrap">
            {/* upload photos section  */}
            <div className="flex-1">
              <h1>Upload Photos</h1>
              <div className="flex border-2 p-4 mt-2 rounded-lg justify-evenly gap-4 flex-wrap">
                <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                  {ProductPhotoSrc1 && <Image src={ProductPhotoSrc1} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                  {ProductPhotoSrc1 && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() =>{ setProductPhotoSrc1(''); setProductData({...ProductData , productPhoto1:null})}} />}
                  {!ProductPhotoSrc1 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto1.current.click()} />}
                  <input type="file" className="hidden" name="productPhoto1" ref={productPhoto1} onChange={(e) => { handleFileChange(e); setProductPhotoSrc1(URL.createObjectURL(e.target.files[0])) }} />
                </div>
                <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                  {ProductPhotoSrc2 && <Image src={ProductPhotoSrc2} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                  {ProductPhotoSrc2 && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() => {setProductPhotoSrc2(''); setProductData({...ProductData , productPhoto2:null})}} />}
                  {!ProductPhotoSrc2 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto2.current.click()} />}
                  <input type="file" className="hidden" name="productPhoto2" ref={productPhoto2} onChange={(e) => { handleFileChange(e); setProductPhotoSrc2(URL.createObjectURL(e.target.files[0])) }} />
                </div>
                <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                  {ProductPhotoSrc3 && <Image src={ProductPhotoSrc3} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                  {ProductPhotoSrc3 && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() => {setProductPhotoSrc3(''); setProductData({...ProductData , productPhoto3:null})}} />}
                  {!ProductPhotoSrc3 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto3.current.click()} />}
                  <input type="file" className="hidden" name="productPhoto3" ref={productPhoto3} onChange={(e) => { handleFileChange(e); setProductPhotoSrc3(URL.createObjectURL(e.target.files[0])) }} />
                </div>
                <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                  {ProductPhotoSrc4 && <Image src={ProductPhotoSrc4} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                  {ProductPhotoSrc4 && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() => {setProductPhotoSrc4(''); setProductData({...ProductData , productPhoto4:null})}} />}
                  {!ProductPhotoSrc4 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto4.current.click()} />}
                  <input type="file" className="hidden" name="productPhoto4" ref={productPhoto4} onChange={(e) => { handleFileChange(e); setProductPhotoSrc4(URL.createObjectURL(e.target.files[0])) }} />
                </div>
              </div>
            </div>

            {/* select platform section */}
            <div className="flex-1">
              <h1>Platform Selection</h1>
              <div className="flex border-2 p-4 mt-2 rounded-lg justify-evenly flex-wrap gap-4">
                <div className="w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                  <FiPlusCircle className="text-2xl opacity-70" />
                  <input type="file" className="hidden" />
                </div>
                <div className="w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                  <FiPlusCircle className="text-2xl opacity-70" />
                  <input type="file" className="hidden" />
                </div>
                <div className="w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                  <FiPlusCircle className="text-2xl opacity-70" />
                  <input type="file" className="hidden" />
                </div>
                <div className="w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                  <FiPlusCircle className="text-2xl opacity-70" />
                  <input type="file" className="hidden" />
                </div>
              </div>
            </div>
          </div>

          <div className="submitBtn mt-4 flex justify-end">
            <button onClick={(e) => handleSubmit(e)} className="p-2 px-4 bg-[#08A9A0] text-white rounded-lg flex gap-2 items-center">Save <span className="text-2xl"><IoIosArrowRoundForward /></span> </button>
          </div>
        </form>
      </div>
    </div>
  )
}

