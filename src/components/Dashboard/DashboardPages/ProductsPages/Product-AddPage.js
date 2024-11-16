'use client'

import Loader from "@/components/Loader/Loader";
import { addProduct } from "@/redux/slice/productSlice";
import { Box, TextField, Tab, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  itemName: yup.string().required("Item Name is required."),
  productType: yup.string().required("Product Type is required."),
  browserNodes: yup.string().required("Browser Nodes are required."),
  brandName: yup.string().required("Brand Name is required."),
  productID: yup.string().required("Product ID is required."),
  description: yup.string().required("Description is required."),
  bulletPoint: yup.string().required("Bullet Point is required."),
  targetAudienceKeyword: yup.string().required("target Audience Keyword is required.")
  // Add other fields and their validation rules here
});

export default function AddProductPage() {
  const [platform, setPlatform] = useState('amazon');
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const [ProductPhotoSrc1, setProductPhotoSrc1] = useState("");
  const [ProductPhotoSrc2, setProductPhotoSrc2] = useState("");
  const [ProductPhotoSrc3, setProductPhotoSrc3] = useState("");
  const [ProductPhotoSrc4, setProductPhotoSrc4] = useState("");  // Initialize product photo state
  const productPhoto1 = useRef(null);
  const productPhoto2 = useRef(null);
  const productPhoto3 = useRef(null);
  const productPhoto4 = useRef(null);

  const handleSnackbarClose = () => {
    setSnackbarState((prev) => ({ ...prev, open: false }));
  };

  const dispatch = useDispatch();
  const navigate = useRouter();

  const { product, isLoading } = useSelector((state) => state.product);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Dispatch the action to add the product
    dispatch(addProduct(data)).then((result) => {
      if (result.payload.success) {
        navigate.push('products?q=list');
      } else {
        setSnackbarState(prev => ({ ...prev, open: true, message: "Unable to add product", severity: 'error' }));
      }
    });
  };

  const handleTabChange = (event, newValue) => {
    setPlatform(newValue); // Update the platform state
  };

  useEffect(() => {
    if (product && product.success) {
      // Handle success if needed
    }
  }, [product]);

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
      <div className='h-full w-full px-4 py-4 md:px-7 md:py-7'>
        <div className='title flex flex-wrap justify-between items-center'>
          <h1 className='md:text-3xl text-lg font-semibold '>Products</h1>
          <div className=''>
            <Link href="/dashboard/products?q=list" className="box p-3 bg-[#08A9A0] text-white rounded-l-md text-sm">
              Show All Products
            </Link>
          </div>
        </div>

        <div className='box s flex mt-4 gap-4 flex-wrap bg-white rounded-xl'>
          <Box className="w-full">
            <TabContext value={platform}>
              <Box>
                <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                  <Tab label="Amazon" value="amazon" />
                  <Tab label="Flipkart" value="flipkart" />
                  <Tab label="Others" value="others" />
                </TabList>
              </Box>
              <TabPanel value="amazon">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-product-identity"
                        id="panel-product-identity"
                      >
                        Product Identity
                      </AccordionSummary>
                      <AccordionDetails className="flex flex-col gap-4">
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="itemName"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.itemName}
                                  helperText={errors.itemName ? errors.itemName.message : ""}
                                  label="Item Name"
                                  placeholder="Enter Item Name"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="productType"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.productType}
                                  helperText={errors.productType ? errors.productType.message : ""}
                                  label="Product Type"
                                  placeholder="Enter Product Type"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="browserNodes"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.browserNodes}
                                  helperText={errors.browserNodes ? errors.browserNodes.message : ""}
                                  label="Browser Nodes"
                                  placeholder="Enter Browser Nodes"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <label htmlFor="variations">Variations</label>
                          <FormControlLabel control={<Checkbox name="hasVariations" onChange={(e) => handleChange(e)} />} label="This Product Have Variations" />
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 w-full">
                            <Controller
                              name="brandName"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.brandName}
                                  helperText={errors.brandName ? errors.brandName.message : ""}
                                  label="Brand Name"
                                  placeholder="Enter Brand Name"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                            <FormControlLabel control={<Checkbox name="hasBrandName" onChange={(e) => handleChange(e)} />} label="This Product Does Not Have Brand Name" className="w-fit" />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="productID"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.productID}
                                  helperText={errors.productID ? errors.productID.message : ""}
                                  label="Product ID"
                                  placeholder="Enter Product ID"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="productType"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  label="Example UPC"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                >
                                  <MenuItem Item value="asin">ASIN</MenuItem>
                                  <MenuItem value="upc">UPC/EAN/GTIN</MenuItem>
                                </Select>
                              )}
                            />
                          </div>
                        </div>
                        <FormControlLabel control={<Checkbox name="hasProductID" onChange={(e) => handleChange(e)} />} label="This Product Does Not Have Product ID" className="w-fit" />
                      </AccordionDetails>
                    </Accordion>

                    {/* Product Description Accordion */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-description"
                        id="panel-description"
                      >
                        Description
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="description"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.description}
                                  helperText={errors.description ? errors.description.message : ""}
                                  label="Description"
                                  multiline rows={6}
                                  placeholder="Enter Product Description"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-4 md:flex-1 w-full">
                            <Controller
                              name="bulletPoint"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.bulletPoint}
                                  helperText={errors.bulletPoint ? errors.bulletPoint.message : ""}
                                  label="Bullet Point"
                                  multiline rows={6}
                                  placeholder="Enter Bullet Point For Your Product"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>

                        {/* Upload Photos Section */}
                        <div className="flex mt-4 gap-7 flex-wrap">
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
                                <input type="file" className="hidden" name="productPhoto1" ref={productPhoto2} onChange={(e) => { handleFileChange(e); setProductPhotoSrc1(URL.createObjectURL(e.target.files[0])) }} />
                              </div>
                              <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                                {ProductPhotoSrc3 && <Image src={ProductPhotoSrc3} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                                {ProductPhotoSrc3 && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() => { setProductPhotoSrc3(''); setProductData({ ...ProductData, productPhoto3: null }) }} />}
                                {!ProductPhotoSrc3 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto3.current.click()} />}
                                <input type="file" className="hidden" name="productPhoto1" ref={productPhoto3} onChange={(e) => { handleFileChange(e); setProductPhotoSrc3(URL.createObjectURL(e.target.files[0])) }} />
                              </div>
                              <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                                {ProductPhotoSrc4 && <Image src={ProductPhotoSrc4} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                                {ProductPhotoSrc4 && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() => { setProductPhotoSrc4(''); setProductData({ ...ProductData, productPhoto4: null }) }} />}
                                {!ProductPhotoSrc4 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto4.current.click()} />}
                                <input type="file" className="hidden" name="productPhoto1" ref={productPhoto4} onChange={(e) => { handleFileChange(e); setProductPhotoSrc4(URL.createObjectURL(e.target.files[0])) }} />
                              </div>
                              {/* Repeat for other product photos */}
                            </div>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    {/* Product Details Accordion */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-product-detail"
                        id="panel-product-detail"
                      >
                        Product Details
                      </AccordionSummary>
                      <AccordionDetails className="flex flex-col gap-4">
                        <div className="flex gap-7 flex-wrap">
                          <div className="w-full">
                            <FormLabel id="productCustomisation">Does this Product Have Customisation</FormLabel>
                            <Controller
                              name="hasProductCustomisation"
                              control={control}
                              render={({ field }) => (
                                <RadioGroup
                                  {...field}
                                  aria-labelledby="productCustomisation"
                                  defaultValue="no"
                                >
                                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                  <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="targetAudienceKeyword"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.targetAudienceKeyword}
                                  helperText={errors.targetAudienceKeyword ? errors.targetAudienceKeyword.message : ""}
                                  label="Target Audience Keyword"
                                  placeholder="Enter Keyword"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="modelNumber"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.modelNumber}
                                  helperText={errors.modelNumber ? errors.modelNumber.message : ""}
                                  label="Model Number"
                                  placeholder="Enter Model Number"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="modelName"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.modelName}
                                  helperText={errors.modelName ? errors.modelName.message : ""}
                                  label="Model Name"
                                  placeholder="Enter Model Name"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="manufacturer"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.manufacturer}
                                  helperText={errors.manufacturer ? errors.manufacturer.message : ""}
                                  label="Manufacturer"
                                  placeholder="Enter Manufacturer Name"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="specialFeatures"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.specialFeatures}
                                  helperText={errors.specialFeatures ? errors.specialFeatures.message : ""}
                                  label="Special Features"
                                  placeholder="Enter Special Features"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="material"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.material}
                                  helperText={errors.material ? errors.material.message : ""}
                                  label="Material"
                                  placeholder="Enter Material"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="itemTypeName"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.itemTypeName}
                                  helperText={errors.itemTypeName ? errors.itemTypeName.message : ""}
                                  label="Item Type Name"
                                  placeholder="Enter Item Type Name"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="subjectCharacter"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.subjectCharacter}
                                  helperText={errors.subjectCharacter ? errors.subjectCharacter.message : ""}
                                  label="Subject Character"
                                  placeholder="Enter Subject Character"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="color"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.color}
                                  helperText={errors.color ? errors.color.message : ""}
                                  label="Color"
                                  placeholder="Enter Color"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="noOfPieces"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.noOfPieces}
                                  helperText={errors.noOfPieces ? errors.noOfPieces.message : ""}
                                  label="No Of Pieces"
                                  placeholder="Enter Number Of Pieces"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="occasion"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.occasion}
                                  helperText={errors.occasion ? errors.occasion.message : ""}
                                  label="Occasion"
                                  placeholder="Enter Occasion"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="partNumber"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.partNumber}
                                  helperText={errors.partNumber ? errors.partNumber.message : ""}
                                  label="Part Number"
                                  placeholder="Enter Part Number"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="subBrand"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.subBrand}
                                  helperText={errors.subBrand ? errors.subBrand.message : ""}
                                  label="Sub Brand"
                                  placeholder="Enter Sub Brand"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="manufacturerContactInfo"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  multiline rows={3}
                                  error={!!errors.manufacturerContactInfo}
                                  helperText={errors.manufacturerContactInfo ? errors.manufacturerContactInfo.message : ""}
                                  label="Manufacturer Contact Information"
                                  placeholder="Enter Manufacturer Contact Information"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="w-full">
                            <FormLabel id="requiredAssembly">Does this Product Required Assembly</FormLabel>
                            <Controller
                              name="requiredAssembly"
                              control={control}
                              render={({ field }) => (
                                <RadioGroup
                                  {...field}
                                  aria-labelledby="requiredAssembly"
                                  defaultValue="no"
                                >
                                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                  <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="finishType"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.finishType}
                                  helperText={errors.finishType ? errors.finishType.message : ""}
                                  label="Finish Type"
                                  placeholder="Enter Finish Type"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="unitCount"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.unitCount}
                                  helperText={errors.unitCount ? errors.unitCount.message : ""}
                                  label="Unit Count"
                                  placeholder="Enter Number Of Units Available"
                                  className="border-2 text-sm md:text-lg p -2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="unitCountType"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.unitCountType}
                                  helperText={errors.unitCountType ? errors.unitCountType.message : ""}
                                  label="Unit Count Type"
                                  placeholder="Enter Unit Type"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="manufactureMinAge"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.manufactureMinAge}
                                  helperText={errors.manufactureMinAge ? errors.manufactureMinAge.message : ""}
                                  label="Manufacture Minimum Age"
                                  placeholder="Enter Manufacture Minimum Age"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="manufactureMaxAge"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.manufactureMaxAge}
                                  helperText={errors.manufactureMaxAge ? errors.manufactureMaxAge.message : ""}
                                  label="Manufacture Maximum Age"
                                  placeholder="Enter Manufacture Maximum Age"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="includedComponents"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.includedComponents}
                                  helperText={errors.includedComponents ? errors.includedComponents.message : ""}
                                  label="Included Components"
                                  placeholder="Enter Included Components"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="leagueName"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.leagueName}
                                  helperText={errors.leagueName ? errors.leagueName.message : ""}
                                  label="League Name"
                                  placeholder="Enter League Name"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 md:flex-1 w-full">
                          <Controller
                            name="teamName"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                {...field}
                                error={!!errors.teamName}
                                helperText={errors.teamName ? errors.teamName.message : ""}
                                label="Team Name"
                                placeholder="Enter Team Name"
                                className="border-2 text-sm md:text-lg p-2 rounded-lg"
                              />
                            )}
                          />
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="externalProductInfoEntity"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.externalProductInfoEntity}
                                  helperText={errors.externalProductInfoEntity ? errors.externalProductInfoEntity.message : ""}
                                  label="External Product Information Entity"
                                  placeholder="Enter External Product Information Entity"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="externalProductInfo"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.externalProductInfo}
                                  helperText={errors.externalProductInfo ? errors.externalProductInfo.message : ""}
                                  label="External Product Information"
                                  placeholder="Enter External Product Information"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="importerContactInfo"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  multiline rows={4}
                                  error={!!errors.importerContactInfo}
                                  helperText={errors.importerContactInfo ? errors.importerContactInfo.message : ""}
                                  label="Importer Contact Information"
                                  placeholder="Enter Importer Contact Information"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="packerContactInfo"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  multiline rows={4}
                                  error={!!errors.packerContactInfo}
                                  helperText={errors.packerContactInfo ? errors.packerContactInfo.message : ""}
                                  label="Packer Contact Information"
                                  placeholder="Enter Packer Contact Information"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>

                        {/* Product Dimension Form */}
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="heightBaseToTop"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.heightBaseToTop}
                                  helperText={errors.heightBaseToTop ? errors.heightBaseToTop.message : ""}
                                  label="Height Base To Top"
                                  placeholder="Enter Height Base To Top"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="heightUnit"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  label="Unit"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                >
                                  <MenuItem value="unit">Unit</MenuItem>
                                  <MenuItem value="centimeter">Centimeter</MenuItem>
                                </Select>
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="lengthLongerHorizontalEdge"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.lengthLongerHorizontalEdge}
                                  helperText={errors.lengthLongerHorizontalEdge ? errors.lengthLongerHorizontalEdge.message : ""}
                                  label="Length Longer Horizontal Edge"
                                  placeholder="Enter Length Longer Horizontal Edge"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="lengthLongerHorizontalEdgeUnit"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  label="Unit"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                >
                                  <MenuItem value="unit">Unit</MenuItem>
                                  <MenuItem value="centimeter">Centimeter</MenuItem>
                                </Select>
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="widthShorterHorizontalEdge"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.widthShorterHorizontalEdge}
                                  helperText={errors.widthShorterHorizontalEdge ? errors.widthShorterHorizontalEdge.message : ""}
                                  label="Width Shorter Horizontal Edge"
                                  placeholder="Enter Width Shorter Horizontal Edge"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            < Controller
                              name="widthShorterHorizontalEdgeUnit"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  label="Unit"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                >
                                  <MenuItem value="unit">Unit</MenuItem>
                                  <MenuItem value="centimeter">Centimeter</MenuItem>
                                </Select>
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="animalTheme"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.animalTheme}
                                  helperText={errors.animalTheme ? errors.animalTheme.message : ""}
                                  label="Animal Theme"
                                  placeholder="Enter Animal Theme"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="toyFigureType"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.toyFigureType}
                                  helperText={errors.toyFigureType ? errors.toyFigureType.message : ""}
                                  label="Toy Figure Type"
                                  placeholder="Enter Toy Figure Type"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-offer"
                        id="panel-offer"
                      >
                        Offer
                      </AccordionSummary>
                      <AccordionDetails className="flex flex-col gap-4">
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="sellerSKU"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.sellerSKU}
                                  helperText={errors.sellerSKU ? errors.sellerSKU.message : ""}
                                  label="Seller SKU"
                                  placeholder="Enter Seller SKU"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="quantity"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.quantity}
                                  helperText={errors.quantity ? errors.quantity.message : ""}
                                  label="Quantity"
                                  placeholder="Enter Quantity"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="yourPrice"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.yourPrice}
                                  helperText={errors.yourPrice ? errors.yourPrice.message : ""}
                                  label="Your Price"
                                  placeholder="Enter Your Price"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="maxRetailPrice"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.maxRetailPrice}
                                  helperText={errors.maxRetailPrice ? errors.maxRetailPrice.message : ""}
                                  label="Maximum Retail Price"
                                  placeholder="Enter Maximum Retail Price"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="offeringConditionType"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.offeringConditionType}
                                  helperText={errors.offeringConditionType ? errors.offeringConditionType.message : ""}
                                  label="Offering Condition Type"
                                  placeholder="Enter Offering Condition Type"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="merchantShippingGroup"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.merchantShippingGroup}
                                  helperText={errors.merchantShippingGroup ? errors.merchantShippingGroup.message : ""}
                                  label="Merchant Shipping Group"
                                  placeholder="Enter Merchant Shipping Group"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="w-full">
                            <FormLabel id="fullfillmentChannel">Fullfillment Channel</FormLabel>
                            <Controller
                              name="fullfillmentChannel"
                              control={control}
                              render={({ field }) => (
                                <RadioGroup
                                  {...field}
                                  aria-labelledby="fullfillmentChannel"
                                  defaultValue="1"
                                >
                                  <FormControlLabel value="1" control={<Radio />} label="I will ship this item myself (Self Ship) or I will pack this item and Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)" />
                                  <FormControlLabel value="2" control={<Radio />} label="Amazon will ship and provide customer service (Fulfilled by Amazon)" />
                                </RadioGroup>
                              )}
                            />
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-safety"
                        id="panel-safety"
                      >
                        Safety & Compliance
                      </AccordionSummary>
                      <AccordionDetails className="flex flex-col gap-4">
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="safetyWarning"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.safetyWarning}
                                  helperText={errors.safetyWarning ? errors.safetyWarning.message : ""}
                                  label="Safety Warning"
                                  placeholder="Enter Safety Warning"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="country"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.country}
                                  helperText={errors.country ? errors.country.message : ""}
                                  label="Country/Region of Origin"
                                  placeholder="Enter Country/Region of Origin"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="w-full">
                            <FormLabel id="batteriesRequired">Are batteries required?</FormLabel>
                            <Controller
                              name="hasBatteries"
                              control={control}
                              render={({ field }) => (
                                <RadioGroup
                                  {...field}
                                  aria-labelledby="batteriesRequired"
                                  defaultValue="no"
                                >
                                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                  <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="itemWeight"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  error={!!errors.itemWeight}
                                  helperText={errors.itemWeight ? errors.itemWeight.message : ""}
                                  label="Item Weight"
                                  placeholder="Enter Item Weight"
                                  className="border-2 text-sm md:text-lg p-2 rounded-lg"
                                />
                              )}
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <Controller
                              name="weightUnit"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  label="Unit"
                                  className="border -2 text-sm md:text-lg p-2 rounded-lg"
                                >
                                  <MenuItem value="grams">Grams</MenuItem>
                                  <MenuItem value="kg">KiloGrams</MenuItem>
                                </Select>
                              )}
                            />
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>

                  <div className="submitBtn mt-4 flex justify-between items-center gap-5">
                    <button type="button" className="p-2 px-4 bg-[#535454] text-white rounded-lg flex gap-2 items-center">Cancel</button>
                    <div className="flex gap-5 items-center">
                      <button className="p-2 px-4 bg-[#518f8c] text-white rounded-lg flex gap-2 items-center text-sm md:text-normal">Save as Draft </button>
                      <button onClick={(e) => handleSubmit(e)} className="p-2 px-4 bg-[#08A9A0] text-white rounded-lg flex gap-2 items-center">Save <span className="text-2xl"><IoIosArrowRoundForward /></span> </button>
                    </div>
                  </div>
                </form>
              </TabPanel>
              <TabPanel value="flipkart">Item Two</TabPanel>
              <TabPanel value="others">Item Three</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  );
}