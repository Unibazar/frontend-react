'use client'

import Loader from "@/components/Loader/Loader";
import { addProduct } from "@/redux/slice/productSlice";
import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



export default function AddProductPage() {
  const [ProductData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    inventoryCount: ""
    // productPhoto1: {},
    // productPhoto2: {},
    // productPhoto3: {},
    // productPhoto4: {}
  });
  const [showTextFeildError, setShowTextFeildError] = useState(false)

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleSnackbarClose = () => {
    setSnackbarState((prev) => ({ ...prev, open: false }));
  };
  const productPhoto1 = useRef(null);
  const productPhoto2 = useRef(null);
  const productPhoto3 = useRef(null);
  const productPhoto4 = useRef(null);
  const [ProductPhotoSrc1, setProductPhotoSrc1] = useState("");
  const [ProductPhotoSrc2, setProductPhotoSrc2] = useState("");
  const [ProductPhotoSrc3, setProductPhotoSrc3] = useState("");
  const [ProductPhotoSrc4, setProductPhotoSrc4] = useState("");

  const dispatch = useDispatch();
  const navigate = useRouter()

  const { product, isLoading, error } = useSelector((state) => state.product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in ProductData) {
      if (ProductData.hasOwnProperty(key)) {
        if (ProductData[key] === "" || ProductData[key] === null || ProductData[key] === undefined) {
          setSnackbarState(prev => ({ ...prev, open: true, message: "please fill all the feilds", severity: 'error' }));
          setShowTextFeildError(true);
          return;
        }
      }
    }

    dispatch(addProduct(ProductData)).then((data) => {
      if (data.payload.success) {
        navigate.push('products?q=list');
      }
      else {
        setSnackbarState(prev => ({ ...prev, open: true, message: "unable to add product", severity: 'error' }));
      }

    });
  }

  useEffect(() => {
    if (product && product?.success) {
      // console.log(product);
    }
  }, [product])

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProductData(prevState => ({ ...prevState, [name]: files[0] }))
  }



  return (
    <>
      {isLoading && <Loader />}
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarState.severity} sx={{ width: '100%' }}>
          {snackbarState.message}
        </MuiAlert>
      </Snackbar>
      <div className='h-full w-full  px-4 py-4 md:px-7 md:py-7'>
        <div className='title flex flex-wrap justify-between items-center'>
          <h1 className='md:text-3xl text-lg font-semibold '>Products</h1>
          <div className=''>
            <Link href="/dashboard/products?q=list" className="box p-3 bg-[#08A9A0] text-white rounded-l-md text-sm">
              Show All Products
            </Link>
          </div>
        </div>

        <div className='boxs flex mt-4 gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7'>
          {/* form for user to enter details about product */}
          <form className="w-full">
            <div className="flex gap-7 flex-wrap">
              <div className="flex flex-col gap-4 md:flex-1 w-full">
                <div className="flex flex-col gap-2">
                  <TextField
                    error={showTextFeildError && ProductData.name === ""}
                    helperText={showTextFeildError && ProductData.name === "" ? "Name is required." : ""}
                    type="text"
                    label="Name"
                    variant="outlined"
                    placeholder="Add Product Name"
                    name="name"
                    value={ProductData.name}
                    onChange={(e) => handleChange(e)}
                    className="text-sm md:text-lg p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                  <TextField 
                  error={showTextFeildError && ProductData.price === ""}
                  helperText={showTextFeildError && ProductData.price === "" ? "Price is required." : ""}
                  type="number" 
                  label="Price" 
                  variant="outlined" 
                  placeholder="Enter Price" 
                  name="price" 
                  value={ProductData.price} 
                  onChange={(e) => handleChange(e)} 
                  className="text-sm md:text-lg p-2 rounded-lg" />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:flex-1 w-full">
                <TextField 
                error={showTextFeildError && ProductData.description === ""}
                helperText={showTextFeildError && ProductData.description === "" ? "Description is required." : ""}
                label="Description" 
                multiline rows={6} 
                placeholder="Enter Product Description" 
                name="description" 
                value={ProductData.description} 
                onChange={(e) => handleChange(e)} 
                className="border-2 text-sm md:text-lg p-2 rounded-lg" />
              </div>
            </div>

            <div className="flex gap-7 mt-4 flex-wrap">
              <div className="flex flex-col gap-2 md:flex-1 w-full">
                <TextField 
                error={showTextFeildError && ProductData.category === ""}
                helperText={showTextFeildError && ProductData.category === "" ? "Category is required." : ""}
                label="Category" 
                multiline rows={6} 
                placeholder={"Write Feature in Each Line \n Feature 1 \n Feature 2 "} 
                name="category" 
                value={ProductData.category} 
                onChange={(e) => handleChange(e)} 
                className="border-2 text-sm md:text-lg p-2 rounded-lg" />
              </div>
              <div className="flex flex-col gap-2 md:flex-1 w-full">
                <TextField 
                error={showTextFeildError && ProductData.inventoryCount === ""}
                helperText={showTextFeildError && ProductData.inventoryCount === "" ? "Inventory Count is required." : ""}
                type="number"
                label="Inventory Count"
                multiline rows={6} 
                placeholder="Enter No of Available Stocks" 
                name="inventoryCount" 
                value={ProductData.inventoryCount} 
                onChange={(e) => handleChange(e)} 
                className="border-2 text-sm md:text-lg p-2 rounded-lg" />
              </div>
            </div>

            <div className="flex mt-4 gap-7 flex-wrap">
              {/* upload photos section  */}
              <div className="flex-1">
                <h1>Upload Photos</h1>
                <div className="flex border-2 p-4 mt-2 rounded-lg justify-evenly gap-4 flex-wrap">
                  <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                    {ProductPhotoSrc1 && <Image src={ProductPhotoSrc1} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                    {ProductPhotoSrc1 && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() => { setProductPhotoSrc1(''); setProductData({ ...ProductData, productPhoto1: null }) }} />}
                    {!ProductPhotoSrc1 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto1.current.click()} />}
                    <input type="file" className="hidden" name="productPhoto1" ref={productPhoto1} onChange={(e) => { handleFileChange(e); setProductPhotoSrc1(URL.createObjectURL(e.target.files[0])) }} />
                  </div>
                  <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                    {ProductPhotoSrc2 && <Image src={ProductPhotoSrc2} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                    {ProductPhotoSrc2 && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() => { setProductPhotoSrc2(''); setProductData({ ...ProductData, productPhoto2: null }) }} />}
                    {!ProductPhotoSrc2 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto2.current.click()} />}
                    <input type="file" className="hidden" name="productPhoto2" ref={productPhoto2} onChange={(e) => { handleFileChange(e); setProductPhotoSrc2(URL.createObjectURL(e.target.files[0])) }} />
                  </div>
                  <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                    {ProductPhotoSrc3 && <Image src={ProductPhotoSrc3} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                    {ProductPhotoSrc3 && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() => { setProductPhotoSrc3(''); setProductData({ ...ProductData, productPhoto3: null }) }} />}
                    {!ProductPhotoSrc3 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto3.current.click()} />}
                    <input type="file" className="hidden" name="productPhoto3" ref={productPhoto3} onChange={(e) => { handleFileChange(e); setProductPhotoSrc3(URL.createObjectURL(e.target.files[0])) }} />
                  </div>
                  <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                    {ProductPhotoSrc4 && <Image src={ProductPhotoSrc4} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                    {ProductPhotoSrc4 && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() => { setProductPhotoSrc4(''); setProductData({ ...ProductData, productPhoto4: null }) }} />}
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
    </>
  )
}

