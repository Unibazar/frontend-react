'use client'

import Loader from "@/components/Loader/Loader";
import { addProduct } from "@/redux/slice/productSlice";
import { Box, TextField, Tab, Accordion, AccordionActions, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from "@mui/material";
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



export default function AddProductPage() {
  const [ProductData, setProductData] = useState({
    itemName: "",
    productType: "",
    browserNodes: "",
    hasVariations: "",
    brandName: "",
    hasBrandName: "",
    productID: "",
    hasProductID: "",
    description: "",
    bulletPoint: "",
    hasProductCustomisation: "",
    targetAudienceKeyword: "",
    modelNumber: "",
    modelName: "",
    manufacturer: "",
    specialFeatures: "",
    material: "",
    itemTypeName: "",
    subjectCharacter: "",
    color: "",
    noOfPieces: "",
    occassion: "",
    partNumber: "",
    subBrand: "",
    manufacturerContactInfo: "",
    requiredAssembly: "",
    finishType: "",
    unitCount: "",
    unitCountType: "",
    manufactureMinAge: "",
    manufactureMaxAge: "",
    includedComponents: "",
    leagueName: "",
    teamName: "",
    externalProductInfoEntity: "",
    externalProductInfo: "",
    importerContactInfo: "",
    packerContactInfo: "",
    heightBaseToTop: "",
    heightUnit: "",
    lengthLongerHorizontalEdge: "",
    lengthLongerHorizontalEdgeUnit: "",
    widthShorterHorizontalEdge: "",
    widthShorterHorizontalEdgeUnit: "",
    animalTheme: "",
    toyFigureType: "",
    sellerSKU: "",
    quantity: "",
    yourPrice: "",
    maxRetailPrice: "",
    offerConditionType: "",
    merchantShippingGroup: "",
    fullfillmentChannel: "",
    safetyWarning: "",
    country: "",
    hasBatteries: "",
    itemWeight: "",
    weightUnit: "",
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
  const navigate = useRouter();

  const [platform, setPlatform] = useState('amazon');

  const handleTabChange = (event, newValue) => {
    setPlatform(newValue);
  };


  const { product, isLoading, error } = useSelector((state) => state.product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ProductData);

    // for (const key in ProductData) {
    //   if (ProductData.hasOwnProperty(key)) {
    //     if (ProductData[key] === "" || ProductData[key] === null || ProductData[key] === undefined) {
    //       setSnackbarState(prev => ({ ...prev, open: true, message: "please fill all the feilds", severity: 'error' }));
    //       setShowTextFeildError(true);
    //       return;
    //     }
    //   }
    // }

    // dispatch(addProduct(ProductData)).then((data) => {
    //   if (data.payload.success) {
    //     navigate.push('products?q=list');
    //   }
    //   else {
    //     setSnackbarState(prev => ({ ...prev, open: true, message: "unable to add product", severity: 'error' }));
    //   }

    // });
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

        <div className='boxs flex mt-4 gap-4 flex-wrap bg-white rounded-xl'>
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
                {/* amazon form  */}
                <form className="w-full">

                  <div>
                    {/* product identity accordian  */}
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
                            <TextField
                              error={showTextFeildError && ProductData.itemName === ""}
                              helperText={showTextFeildError && ProductData.itemName === "" ? "Item Name is Required." : ""}
                              label="Item Name"
                              placeholder="Enter Item Name"
                              name="itemName"
                              value={ProductData.itemName}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.productType === ""}
                              helperText={showTextFeildError && ProductData.productType === "" ? "Product Type is Required." : ""}
                              label="Product Type"
                              placeholder="Enter Product Type"
                              name="prouctType"
                              value={ProductData.productType}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.browserNodes === ""}
                              helperText={showTextFeildError && ProductData.browserNodes === "" ? "Browser Nodes Are Required." : ""}
                              label="Browser Nodes"
                              placeholder="Enter Browser Nodes"
                              name="browserNodes"
                              value={ProductData.browserNodes}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                        </div>

                        <div className="flex gap-2 items-center">
                          <label htmlFor="variations">Variations</label>
                          <FormControlLabel control={<Checkbox name="hasVariations" onChange={(e) => handleChange(e)} />} label="This Product Have Variations" />
                        </div>

                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.brandName === ""}
                              helperText={showTextFeildError && ProductData.brandName === "" ? "Brand Name is Required." : ""}
                              label="Brand Name"
                              placeholder="Enter Brand Name"
                              name="brandName"
                              value={ProductData.brandName}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />

                            <FormControlLabel control={<Checkbox name="hasBrandName" onChange={(e) => handleChange(e)} />} label="This Product Does Not Have Brand Name" className="w-fit" />
                          </div>


                        </div>

                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.productID === ""}
                              helperText={showTextFeildError && ProductData.productID === "" ? "Product ID is Required." : ""}
                              label="Product ID"
                              placeholder="Enter Product ID"
                              name="productID"
                              value={ProductData.productID}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <Select
                              id="demo-simple-select"
                              label="Example UPC"
                              value="asin"
                              onChange={(e) => handleChange(e)}
                            >
                              <MenuItem value="asin">ASIN</MenuItem>
                              <MenuItem value="upc">UPC/EAN/GTIN</MenuItem>
                            </Select>
                          </div>

                        </div>
                        <FormControlLabel control={<Checkbox name="hasProductID" onChange={(e) => handleChange(e)} />} label="This Product Does Not Have Product ID" className="w-fit" />

                      </AccordionDetails>
                    </Accordion>

                    {/* product description accordian  */}
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

                          <div className="flex flex-col gap-4 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.bulletPoint === ""}
                              helperText={showTextFeildError && ProductData.bulletPoint === "" ? "Bullet Point is required." : ""}
                              label="Bullet Point"
                              multiline rows={6}
                              placeholder={"Enter Bullet Point For Your Product"}
                              name="bulletpoint"
                              value={ProductData.bulletPoint}
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
                          {/* <div className="flex-1">
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
                          </div> */}
                        </div>
                      </AccordionDetails>
                    </Accordion>


                    {/* product details accordian  */}
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
                            <RadioGroup
                              aria-labelledby="productCustomisation"
                              defaultValue="no"
                              name="hasProductCustomisation"
                            >
                              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                              <FormControlLabel value="no" control={<Radio />} label="No" />

                            </RadioGroup>
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.targetAudienceKeyword === ""}
                              helperText={showTextFeildError && ProductData.targetAudienceKeyword === "" ? "Keywords are Required." : ""}
                              label="Target Audience Keyword"
                              placeholder="Enter Keyword"
                              name="targetAudienceKeyword"
                              value={ProductData.targetAudienceKeyword}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.modelNumber === ""}
                              helperText={showTextFeildError && ProductData.modelNumber === "" ? "Model Number is Required." : ""}
                              label="Model Number"
                              placeholder="Enter Model Number "
                              name="modelNumber"
                              value={ProductData.modelNumber}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.modelName === ""}
                              helperText={showTextFeildError && ProductData.modelName === "" ? "Model Name is Required." : ""}
                              label="Model Name"
                              placeholder="Enter Model Name"
                              name="modelName"
                              value={ProductData.modelName}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.manufacturer === ""}
                              helperText={showTextFeildError && ProductData.manufacturer === "" ? "Manufacturer is Required." : ""}
                              label="Manufacturer"
                              placeholder="Enter Manufacturer Name"
                              name="manufacturer"
                              value={ProductData.manufacturer}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.specialFeatures === ""}
                              helperText={showTextFeildError && ProductData.specialFeatures === "" ? "Special Features are Required." : ""}
                              label="Special Features"
                              placeholder="Enter Special Features"
                              name="specialFeatures"
                              value={ProductData.specialFeatures}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.material === ""}
                              helperText={showTextFeildError && ProductData.material === "" ? "Material is Required." : ""}
                              label="Material "
                              placeholder="Enter Materail "
                              name="material"
                              value={ProductData.material}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.itemTypeName === ""}
                              helperText={showTextFeildError && ProductData.itemTypeName === "" ? "Item Type is Required." : ""}
                              label="Item Type Name"
                              placeholder="Enter Item Type Name"
                              name="itemTypeName"
                              value={ProductData.itemTypeName}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.subjectCharacter === ""}
                              helperText={showTextFeildError && ProductData.subjectCharacter === "" ? "Subject Character is Required." : ""}
                              label="Subject Character "
                              placeholder="Enter Subject Character"
                              name="subjectCharacter"
                              value={ProductData.subjectCharacter}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.color === ""}
                              helperText={showTextFeildError && ProductData.color === "" ? "Color is Required." : ""}
                              label="Color"
                              placeholder="Enter Color"
                              name="color"
                              value={ProductData.color}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.noOfPieces === ""}
                              helperText={showTextFeildError && ProductData.noOfPieces === "" ? "Number Of Pieces Required." : ""}
                              label="No Of Pieces "
                              placeholder="Enter Number Of Pieces "
                              name="noOfPieces"
                              value={ProductData.noOfPieces}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.occasion === ""}
                              helperText={showTextFeildError && ProductData.occasion === "" ? "Occasion is Required." : ""}
                              label="Occasion"
                              placeholder="Enter Occasion"
                              name="occasion"
                              value={ProductData.occasion}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.partNumber === ""}
                              helperText={showTextFeildError && ProductData.partNumber === "" ? "Part Number is Required." : ""}
                              label="Part Number"
                              placeholder="Enter Part Number "
                              name="partNumber"
                              value={ProductData.partNumber}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>
                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.subBrand === ""}
                              helperText={showTextFeildError && ProductData.subBrand === "" ? "Sub Brand is Required." : ""}
                              label="Sub Brand"
                              placeholder="Enter Sub Brand"
                              name="subBrand"
                              value={ProductData.subBrand}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              multiline rows={3}
                              error={showTextFeildError && ProductData.manufacturerContactInfo === ""}
                              helperText={showTextFeildError && ProductData.manufacturerContactInfo === "" ? "Manufacturer Contact Information is Required." : ""}
                              label="Manufacturer Contact Information"
                              placeholder="Enter Manufacturer Contact Information"
                              name="manufacturerContactInfo"
                              value={ProductData.manufacturerContactInfo}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>


                        <div className="flex gap-7 flex-wrap">
                          <div className="w-full">
                            <FormLabel id="requiredAssembly">Does this Product Required Assembly</FormLabel>
                            <RadioGroup
                              aria-labelledby="requiredAssembly"
                              defaultValue="no"
                              name="requiredAssembly"
                            >
                              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                              <FormControlLabel value="no" control={<Radio />} label="No" />

                            </RadioGroup>
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.finishType === ""}
                              helperText={showTextFeildError && ProductData.finishType === "" ? "Finish Type is Required." : ""}
                              label="Finish Type"
                              placeholder="Enter Finish Type"
                              name="finishType"
                              value={ProductData.finishType}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                        </div>

                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.unitCount === ""}
                              helperText={showTextFeildError && ProductData.unitCount === "" ? "Unit Count is Required." : ""}
                              label="Unit Count"
                              placeholder="Enter Number Of Units Available"
                              name="unitCount"
                              value={ProductData.unitCount}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.unitCountType === ""}
                              helperText={showTextFeildError && ProductData.unitCountType === "" ? "Unit Type is Required." : ""}
                              label="Unit Count Type"
                              placeholder="Enter Unit Type"
                              name="unitCountType"
                              value={ProductData.unitCountType}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>


                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.manufactureMinAge === ""}
                              helperText={showTextFeildError && ProductData.manufactureMinAge === "" ? "Manufacture Minimum Age is Required." : ""}
                              label="Manufacture Minimum Age"
                              placeholder="Enter Manufacture Minimum Age"
                              name="manufactureMinAge"
                              value={ProductData.manufactureMinAge}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.manufactureMaxAge === ""}
                              helperText={showTextFeildError && ProductData.manufactureMaxAge === "" ? "Manufacture Maximum Age is Required." : ""}
                              label="Manufacture Maximum Age"
                              placeholder="Enter Manufacture Maximum Age"
                              name="manufactureMaxAge"
                              value={ProductData.manufactureMaxAge}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>

                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.includedComponents === ""}
                              helperText={showTextFeildError && ProductData.includedComponents === "" ? "Included Components are Required." : ""}
                              label="Included Components"
                              placeholder="Enter Included Components"
                              name="includedComponents"
                              value={ProductData.includedComponents}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.leagueName === ""}
                              helperText={showTextFeildError && ProductData.leagueName === "" ? "League Name is Required." : ""}
                              label="League Name"
                              placeholder="Enter League Name"
                              name="leagueName"
                              value={ProductData.leagueName}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>


                        <div className="flex flex-col gap-2 md:flex-1 w-full">

                          <TextField
                            error={showTextFeildError && ProductData.teamName === ""}
                            helperText={showTextFeildError && ProductData.teamName === "" ? "Team Name is Required." : ""}
                            label="Team Name"
                            placeholder="Enter Team Name"
                            name="teamName"
                            value={ProductData.teamName}
                            onChange={(e) => handleChange(e)}
                            className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                        </div>

                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.externalProductInfoEntity === ""}
                              helperText={showTextFeildError && ProductData.externalProductInfoEntity === "" ? "External Product Information Entity are Required." : ""}
                              label="External Product Information Entity"
                              placeholder="Enter External Product Information Entity"
                              name="externalProductInfoEntity"
                              value={ProductData.externalProductInfoEntity}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.externalProductInfo === ""}
                              helperText={showTextFeildError && ProductData.externalProductInfo === "" ? "External Product Information is Required." : ""}
                              label="External Product Information"
                              placeholder="Enter External Product Information"
                              name="externalProductInfo"
                              value={ProductData.externalProductInfo}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>

                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              multiline rows={4}
                              error={showTextFeildError && ProductData.importerContactInfo === ""}
                              helperText={showTextFeildError && ProductData.importerContactInfo === "" ? "Importer Contact Infomation are Required." : ""}
                              label="Importer Contact Infomation"
                              placeholder="Enter Importer Contact Infomation"
                              name="importerContactInfo"
                              value={ProductData.importerContactInfo}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              multiline rows={4}
                              error={showTextFeildError && ProductData.packerContactInfo === ""}
                              helperText={showTextFeildError && ProductData.packerContactInfo === "" ? "Packer Contact Information is Required." : ""}
                              label="Packer Contact Information"
                              placeholder="Enter Packer Contact Information"
                              name="packerContactInfo"
                              value={ProductData.packerContactInfo}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>

                        {/* product dimention from  */}
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.heightBaseToTop === ""}
                              helperText={showTextFeildError && ProductData.heightBaseToTop === "" ? "Height Base To Top is Required." : ""}
                              label="Height Base To Top"
                              placeholder="Enter Height Base To Top"
                              name="heightBaseToTop"
                              value={ProductData.heightBaseToTop}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <Select
                              id="demo-simple-select"
                              label="unit"
                              value="unit"
                              name="heightUnit"
                              onChange={(e) => handleChange(e)}
                            >
                              <MenuItem value="unit">Unit</MenuItem>
                              <MenuItem value="centimeter">Centimeter</MenuItem>
                            </Select>
                          </div>

                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.lengthLongerHorizontalEdge === ""}
                              helperText={showTextFeildError && ProductData.lengthLongerHorizontalEdge === "" ? "Length Longer Horizontal Edge is Required." : ""}
                              label="Length Longer Horizontal Edge"
                              placeholder="Enter Length Longer Horizontal Edge"
                              name="lengthLongerHorizontalEdge"
                              value={ProductData.lengthLongerHorizontalEdge}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <Select
                              id="demo-simple-select"
                              label="unit"
                              value="unit"
                              name="lengthLongerHorizontalEdgeUnit"
                              onChange={(e) => handleChange(e)}
                            >
                              <MenuItem value="unit">Unit</MenuItem>
                              <MenuItem value="centimeter">Centimeter</MenuItem>
                            </Select>
                          </div>

                        </div>
                        <div className="flex gap-7 flex-wrap">
                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.widthShorterHorizontalEdge === ""}
                              helperText={showTextFeildError && ProductData.widthShorterHorizontalEdge === "" ? "Width Shorter Horizontal Edge is Required." : ""}
                              label="Width Shorter Horizontal Edge"
                              placeholder="Enter Width Shorter Horizontal Edge"
                              name="widthShorterHorizontalEdge"
                              value={ProductData.widthShorterHorizontalEdge}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <Select
                              id="demo-simple-select"
                              label="unit"
                              value="unit"
                              name="widthShorterHorizontalEdgeUnit"
                              onChange={(e) => handleChange(e)}
                            >
                              <MenuItem value="unit">Unit</MenuItem>
                              <MenuItem value="centimeter">Centimeter</MenuItem>
                            </Select>
                          </div>

                        </div>


                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.animalTheme === ""}
                              helperText={showTextFeildError && ProductData.animalTheme === "" ? "Animal Theme are Required." : ""}
                              label="Animal Theme"
                              placeholder="Enter Animal Theme"
                              name="animalTheme"
                              value={ProductData.animalTheme}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.toyFigureType === ""}
                              helperText={showTextFeildError && ProductData.toyFigureType === "" ? "Toy Figure Type is Required." : ""}
                              label="Toy Figure Type"
                              placeholder="Enter Toy Figure Type"
                              name="toyFigureType"
                              value={ProductData.toyFigureType}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
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
                            <TextField
                              error={showTextFeildError && ProductData.sellerSKU === ""}
                              helperText={showTextFeildError && ProductData.sellerSKU === "" ? "Seller SKU is Required." : ""}
                              label="Seller SKU"
                              placeholder="Enter Seller SKU"
                              name="sellerSKU"
                              value={ProductData.sellerSKU}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.quantity === ""}
                              helperText={showTextFeildError && ProductData.quantity === "" ? "Quantity is Required." : ""}
                              label="Quantity"
                              placeholder="Enter Quantity"
                              name="quantity"
                              value={ProductData.quantity}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>




                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.yourPrice === ""}
                              helperText={showTextFeildError && ProductData.yourPrice === "" ? "Your Price are Required." : ""}
                              label="Your Price"
                              placeholder="Enter Your Price"
                              name="yourPrice"
                              value={ProductData.yourPrice}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.maxRetailPrice === ""}
                              helperText={showTextFeildError && ProductData.maxRetailPrice === "" ? "Maximum Retail Price is Required." : ""}
                              label="Maximum Retail Price"
                              placeholder="Enter Maximum Retail Price"
                              name="maxRetailPrice"
                              value={ProductData.maxRetailPrice}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>




                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.offeringConditionType === ""}
                              helperText={showTextFeildError && ProductData.offeringConditionType === "" ? "Offering Condition Type are Required." : ""}
                              label="Offering Condition Type"
                              placeholder="Enter Offering Condition Type"
                              name="offeringConditionType"
                              value={ProductData.offeringConditionType}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.merchantShippingGroup === ""}
                              helperText={showTextFeildError && ProductData.merchantShippingGroup === "" ? "Merchant Shipping Group is Required." : ""}
                              label="Merchant Shipping Group"
                              placeholder="Enter Merchant Shipping Group"
                              name="merchantShippingGroup"
                              value={ProductData.merchantShippingGroup}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>

                        <div className="flex gap-7 flex-wrap">
                          <div className="w-full">
                            <FormLabel id="fullfillmentChannel">Fullfillment Channel</FormLabel>
                            <RadioGroup
                              aria-labelledby="fullfillmentChannel"
                              defaultValue="1"
                              name="fullfillmentChannel"
                              onChange={(e) => handleChange(e)}
                            >
                              <FormControlLabel value="1" control={<Radio />} label="I will ship this item myself (Self Ship) or I will pack this item and Amazon will pick up & ship (Easy Ship) (Merchant Fullfilled)" />
                              <FormControlLabel value="2" control={<Radio />} label="Amazon will ship and provide customer service (Fullfilled by Amazon)" />

                            </RadioGroup>
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
                            <TextField
                              error={showTextFeildError && ProductData.safetyWarning === ""}
                              helperText={showTextFeildError && ProductData.safetyWarning === "" ? "Safety Warning is Required." : ""}
                              label="Safety Warning"
                              placeholder="Enter Safety Warning"
                              name="safetyWarning"
                              value={ProductData.safetyWarning}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">
                            <TextField
                              error={showTextFeildError && ProductData.country === ""}
                              helperText={showTextFeildError && ProductData.country === "" ? "Country is Required." : ""}
                              label="Country/Region of Origin"
                              placeholder="Enter Country/Region of Origin"
                              name="country"
                              value={ProductData.country}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>
                        </div>


                        <div className="flex gap-7 flex-wrap">
                          <div className="w-full">
                            <FormLabel id="batteriesRequired">Are batteries Required</FormLabel>
                            <RadioGroup
                              aria-labelledby="batteriesRequired"
                              defaultValue="no"
                              name="hasBatteries"
                              onChange={(e) => handleChange(e)}
                            >
                              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                              <FormControlLabel value="no" control={<Radio />} label="No" />

                            </RadioGroup>
                          </div>
                        </div>



                        <div className="flex gap-7 flex-wrap">

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <TextField
                              error={showTextFeildError && ProductData.itemWeight === ""}
                              helperText={showTextFeildError && ProductData.itemWeight === "" ? "Item Weight are Required." : ""}
                              label="Item Weight"
                              placeholder="Enter Item Weight"
                              name="itemWeight"
                              value={ProductData.itemWeight}
                              onChange={(e) => handleChange(e)}
                              className="border-2 text-sm md:text-lg p-2 rounded-lg" />
                          </div>

                          <div className="flex flex-col gap-2 md:flex-1 w-full">

                            <Select
                              id="demo-simple-select"
                              label="unit"
                              value="grams"
                              name="weightUnit"
                              onChange={(e) => handleChange(e)}
                            >
                              <MenuItem value="grams">Grams</MenuItem>
                              <MenuItem value="kg">KiloGrams</MenuItem>
                            </Select>
                          </div>
                        </div>

                      </AccordionDetails>
                    </Accordion>
                  </div>



                  <div className="submitBtn mt-4 flex justify-between items-center gap-5">
                    <button className="p-2 px-4 bg-[#535454] text-white rounded-lg flex gap-2 items-center">Cancle </button>
                    <div className="flex gap-5 items-center">
                      <button className="p-2 px-4 bg-[#518f8c] text-white rounded-lg flex gap-2 items-center">Save as Draft </button>
                      <button onClick={(e) => handleSubmit(e)} className="p-2 px-4 bg-[#08A9A0] text-white rounded-lg flex gap-2 items-center">Save <span className="text-2xl"><IoIosArrowRoundForward /></span> </button>
                    </div>
                  </div>
                </form>
              </TabPanel>
              <TabPanel value="flipkart">Item Two</TabPanel>
              <TabPanel value="others">Item Three</TabPanel>
            </TabContext>
          </Box>

          {/* form for user to enter details about product */}

        </div>
      </div>
    </>
  )
}

