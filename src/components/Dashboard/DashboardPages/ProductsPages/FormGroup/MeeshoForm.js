import React, { useState , useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  
  Button,
  Grid,
  Typography,
  Paper,
  Container,
  
} from '@mui/material';
import { TextField, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio, FormControl } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { FiPlusCircle } from 'react-icons/fi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoIosCloseCircle } from 'react-icons/io';


// // Define the validation schema
// const schema = yup.object().shape({
//   skuId: yup.string().required('SKU ID is required'),
//   brand: yup.string().required('Brand is required'),
//   publisher: yup.string().required('Publisher is required'),
//   isbn13: yup.string().required('ISBN-13 is required'),
//   title: yup.string().required('Title is required'),
//   contributor: yup.string().required('Contributor is required'),
//   binding: yup.string().required('Binding is required'),
//   language: yup.string().required('Language is required'),
//   bookSubcategory: yup.string().required('Book subcategory is required'),
//   mrp: yup.number().positive('MRP must be positive').required('MRP is required'),
//   sellingPrice: yup.number().positive('Selling price must be positive').required('Selling price is required'),
//   stock: yup.number().integer('Stock must be an integer').min(0, 'Stock cannot be negative').required('Stock is required'),
//   shippingDays: yup.number().integer('Shipping days must be an integer').min(1, 'Minimum 1 day required').required('Shipping days are required'),
//   hsn: yup.string().required('HSN code is required'),
//   taxCode: yup.string().required('Tax code is required'),
//   countryOfOrigin: yup.string().required('Country of origin is required'),
//   manufacturerDetails: yup.string().required('Manufacturer details are required'),
//   packerDetails: yup.string().required('Packer details are required'),
//   height: yup.number().positive('Height must be positive').required('Height is required'),
//   weight: yup.number().positive('Weight must be positive').required('Weight is required'),
//   length: yup.number().positive('Length must be positive').required('Length is required'),
//   breadth: yup.number().positive('Breadth must be positive').required('Breadth is required'),
// });

function MeeshoForm({ handleSubmit, control, ProductPhotoSrc1, productPhoto1, ProductPhotoSrc2, productPhoto2, ProductPhotoSrc3, productPhoto3, ProductPhotoSrc4, productPhoto4, errors, watch, setValue }) {
  const hasBrandName = watch("hasBrandName", false);
  const hasProductID = watch("hasProductID", false);


  useEffect(() => {

    if (hasBrandName) {
      setValue("brandName", "");
    }
    if (hasProductID) {
      setValue("productID", "");
      setValue("productType", "");
    }
  }, [hasBrandName, setValue, hasProductID]);

  const onSubmit = data => {
    console.log(data);

    const payload = {
      txnId: `TXN-${Date.now()}`,
      reqId: `REQ-${Date.now()}`,
      sellerId: userData?.meesho?.sellerId || "db8de917d2734d39", // This should be dynamically set based on the logged-in seller
      skuId: data.skuId,
      vertical: "book",
      state: "DRAFT",
      context: "PRODUCT_LISTING_CREATION",
      catalogRequestEntity: {
        catalogAttributes: {
          brand: [{ value: data.brand }],
          publisher: [{ value: data.publisher }],
          isbn13: [{ value: data.isbn13 }],
          title: [{ value: data.title }],
          contributor: [{ value: data.contributor }],
          binding: [{ value: data.binding }],
          language_new: [{ value: data.language }],
          book_subcategory: [{ value: data.bookSubcategory }],
        },
        images: {

          "0": "https://example.com/placeholder-image.jpg" // This should be replaced with actual image upload functionality
        },
        workflow: "STRICT",
      },
      listingRequestEntity: {
        skuId: data.skuId,
        sellerId: userData?.meesho?.sellerId || "db8de917d2734d39", // This should be dynamically set based on the logged-in seller
        createMatchedFsnListing: true,
        listingAttributes: {
          sku_id: [{ value: data.skuId }],
          listing_status: [{ value: "INACTIVE" }],
          mrp: [{ value: data.mrp.toString(), qualifier: "INR" }],
          flipkart_selling_price: [{ value: data.sellingPrice.toString(), qualifier: "INR" }],
          service_profile: [{ value: "NON_FBF" }],
          shipping_days: [{ value: data.shippingDays.toString(), qualifier: "DAY" }],
          stock_size: [{ value: data.stock.toString() }],
          shipping_provider: [{ value: "FLIPKART" }],
          local_shipping_fee_from_buyer: [{ value: "0", qualifier: "INR" }],
          zonal_shipping_fee_from_buyer: [{ value: "0", qualifier: "INR" }],
          national_shipping_fee_from_buyer: [{ value: "0", qualifier: "INR" }],
          hsn: [{ value: data.hsn }],
          tax_code: [{ value: data.taxCode }],
          country_of_origin: [{ value: data.countryOfOrigin }],
          manufacturer_details: [{ value: data.manufacturerDetails }],
          packer_details: [{ value: data.packerDetails }],
          minimum_order_quantity: [{ value: "1" }],
        },
        packages: [
          {
            id: { value: Date.now().toString() },
            height: { value: data.height.toString(), qualifier: "CM" },
            weight: { value: data.weight.toString(), qualifier: "KG" },
            length: { value: data.length.toString(), qualifier: "CM" },
            breadth: { value: data.breadth.toString(), qualifier: "CM" },
            sku_id: { value: data.skuId },
          },
        ],
      },
    };

    console.log(payload);
    // Here you would typically send this payload to your API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div>
      <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-product-identity" id="panel-product-identity">
            Product Identity
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-4">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="skuId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="SKU ID"
                    fullWidth
                    error={!!errors.skuId}
                    helperText={errors.skuId?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="brandName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Brand"
                    fullWidth
                    error={!!errors.brandName}
                    helperText={errors.brandName?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="publisher"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Publisher"
                    fullWidth
                    error={!!errors.publisher}
                    helperText={errors.publisher?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="isbn13"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="ISBN-13"
                    fullWidth
                    error={!!errors.isbn13}
                    helperText={errors.isbn13?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Title"
                    fullWidth
                    error={!!errors.title}
                    helperText={errors.title?.message}
                  />
                )}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Package Dimensions
              </Typography>
            </Grid>
            
          </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-product-identity" id="panel-product-identity">
            Description
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-4">
          <div className="flex gap-7 flex-wrap">
              <div className="flex flex-col gap-2 md:flex-1 w-full">
                <Controller name="description" control={control} render={({ field }) => <TextField {...field} error={!!errors.description} helperText={errors.description ? errors.description.message : ''} label="Description" multiline rows={6} placeholder="Enter Product Description" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
              </div>
              <div className="flex flex-col gap-4 md:flex-1 w-full">
                <Controller name="bulletPoint" control={control} render={({ field }) => <TextField {...field} error={!!errors.bulletPoint} helperText={errors.bulletPoint ? errors.bulletPoint.message : ''} label="Bullet Point" multiline rows={6} placeholder="Enter Bullet Point For Your Product" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
              </div>
            </div>

            {/* Upload Photos Section */}
            <div className="flex mt-4 gap-7 flex-wrap">
              <div className="flex-1">
                <h1>Upload Photos</h1>
                <div className="flex border-2 p-4 mt-2 rounded-lg justify-evenly gap-4 flex-wrap">
                  <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                    {ProductPhotoSrc1 && <Image src={ProductPhotoSrc1} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                    {ProductPhotoSrc1 && (
                      <IoIosCloseCircle
                        className="text-xl absolute -top-2 -right-2 text-red-500"
                        onClick={() => {
                          setProductPhotoSrc1('');
                          setProductData({ ...ProductData, productPhoto1: null });
                        }}
                      />
                    )}
                    {!ProductPhotoSrc1 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto1.current.click()} />}
                    <input
                      type="file"
                      className="hidden"
                      name="productPhoto1"
                      ref={productPhoto1}
                      onChange={e => {
                        handleFileChange(e);
                        setProductPhotoSrc1(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </div>
                  <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                    {ProductPhotoSrc2 && <Image src={ProductPhotoSrc2} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                    {ProductPhotoSrc2 && (
                      <IoIosCloseCircle
                        className="text-xl absolute -top-2 -right-2 text-red-500"
                        onClick={() => {
                          setProductPhotoSrc2('');
                          setProductData({ ...ProductData, productPhoto2: null });
                        }}
                      />
                    )}
                    {!ProductPhotoSrc2 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto2.current.click()} />}
                    <input
                      type="file"
                      className="hidden"
                      name="productPhoto1"
                      ref={productPhoto2}
                      onChange={e => {
                        handleFileChange(e);
                        setProductPhotoSrc1(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </div>
                  <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                    {ProductPhotoSrc3 && <Image src={ProductPhotoSrc3} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                    {ProductPhotoSrc3 && (
                      <IoIosCloseCircle
                        className="text-xl absolute -top-2 -right-2 text-red-500"
                        onClick={() => {
                          setProductPhotoSrc3('');
                          setProductData({ ...ProductData, productPhoto3: null });
                        }}
                      />
                    )}
                    {!ProductPhotoSrc3 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto3.current.click()} />}
                    <input
                      type="file"
                      className="hidden"
                      name="productPhoto1"
                      ref={productPhoto3}
                      onChange={e => {
                        handleFileChange(e);
                        setProductPhotoSrc3(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </div>
                  <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                    {ProductPhotoSrc4 && <Image src={ProductPhotoSrc4} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
                    {ProductPhotoSrc4 && (
                      <IoIosCloseCircle
                        className="text-xl absolute -top-2 -right-2 text-red-500"
                        onClick={() => {
                          setProductPhotoSrc4('');
                          setProductData({ ...ProductData, productPhoto4: null });
                        }}
                      />
                    )}
                    {!ProductPhotoSrc4 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto4.current.click()} />}
                    <input
                      type="file"
                      className="hidden"
                      name="productPhoto1"
                      ref={productPhoto4}
                      onChange={e => {
                        handleFileChange(e);
                        setProductPhotoSrc4(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </div>
                  {/* Repeat for other product photos */}
                </div>
              </div>
            </div>
          <Grid container spacing={3}>
          
          <Grid item xs={12} sm={6}>
              <Controller
                name="contributor"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Contributor"
                    fullWidth
                    error={!!errors.contributor}
                    helperText={errors.contributor?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="binding"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Binding"
                    fullWidth
                    error={!!errors.binding}
                    helperText={errors.binding?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="language"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Language"
                    fullWidth
                    select
                    error={!!errors.language}
                    helperText={errors.language?.message}
                  >
                    <MenuItem value="Hindi">Hindi</MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    {/* Add more language options as needed */}
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="bookSubcategory"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Book Subcategory"
                    fullWidth
                    select
                    error={!!errors.bookSubcategory}
                    helperText={errors.bookSubcategory?.message}
                  >
                    <MenuItem value="Art Books">Art Books</MenuItem>
                    <MenuItem value="Fiction">Fiction</MenuItem>
                    {/* Add more subcategory options as needed */}
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="mrp"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="MRP (INR)"
                    fullWidth
                    type="number"
                    error={!!errors.mrp}
                    helperText={errors.mrp?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="sellingPrice"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Selling Price (INR)"
                    fullWidth
                    type="number"
                    error={!!errors.sellingPrice}
                    helperText={errors.sellingPrice?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="stock"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Stock"
                    fullWidth
                    type="number"
                    error={!!errors.stock}
                    helperText={errors.stock?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="shippingDays"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Shipping Days"
                    fullWidth
                    type="number"
                    error={!!errors.shippingDays}
                    helperText={errors.shippingDays?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="hsn"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="HSN Code"
                    fullWidth
                    error={!!errors.hsn}
                    helperText={errors.hsn?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="taxCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Tax Code"
                    fullWidth
                    error={!!errors.taxCode}
                    helperText={errors.taxCode?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="countryOfOrigin"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Country of Origin"
                    fullWidth
                    error={!!errors.countryOfOrigin}
                    helperText={errors.countryOfOrigin?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="manufacturerDetails"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Manufacturer Details"
                    fullWidth
                    multiline
                    rows={2}
                    error={!!errors.manufacturerDetails}
                    helperText={errors.manufacturerDetails?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="packerDetails"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Packer Details"
                    fullWidth
                    multiline
                    rows={2}
                    error={!!errors.packerDetails}
                    helperText={errors.packerDetails?.message}
                  />
                )}
              />
            </Grid>
            </Grid>
            
            </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-product-identity" id="panel-product-identity">
            Package Dimensions
          </AccordionSummary>
          <AccordionDetails className="flex flex-col gap-4">
          <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
              <Controller
                name="height"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Height (cm)"
                    fullWidth
                    type="number"
                    error={!!errors.height}
                    helperText={errors.height?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Controller
                name="weight"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Weight (kg)"
                    fullWidth
                    type="number"
                    error={!!errors.weight}
                    helperText={errors.weight?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Controller
                name="length"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Length (cm)"
                    fullWidth
                    type="number"
                    error={!!errors.length}
                    helperText={errors.length?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Controller
                name="breadth"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Breadth (cm)"
                    fullWidth
                    type="number"
                    error={!!errors.breadth}
                    helperText={errors.breadth?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
          </AccordionDetails>
        </Accordion>
      
      
      <div className="submitBtn mt-4 flex justify-between items-center gap-5">
        <button type="button" className="p-2 px-4 bg-[#535454] text-white rounded-lg flex gap-2 items-center">
          Cancel
        </button>
        <div className="flex gap-5 items-center">
          <button className="p-2 px-4 bg-[#518f8c] text-white rounded-lg flex gap-2 items-center text-sm md:text-normal">Save as Draft </button>
          <button onClick={e => handleSubmit(e)} className="p-2 px-4 bg-[#08A9A0] text-white rounded-lg flex gap-2 items-center">
            Save{' '}
            <span className="text-2xl">
              <IoIosArrowRoundForward />
            </span>{' '}
          </button>
        </div>
      </div>
      </div>
    </form>
  );
};

export default MeeshoForm;