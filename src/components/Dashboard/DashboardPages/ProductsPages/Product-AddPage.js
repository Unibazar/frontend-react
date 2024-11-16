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
import ProductIdentity from "./AccordionSections/ProductIdentity";
import ProductDescription from "./AccordionSections/ProductDescription";
import ProductDetails from "./AccordionSections/ProductDetails";
import ProductOffer from "./AccordionSections/ProductOffer";
import ProductSafety from "./AccordionSections/ProductSafety";

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
  const [openAccordion, setOpenAccordion] = useState(null);


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

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setOpenAccordion(isExpanded ? panel : null); // Open the clicked accordion and close others
  };

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
                  <div className="w-full flex flex-col gap-2">
                    <Accordion expanded={openAccordion === 'identity'} onChange={handleAccordionChange('identity')}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h2>Product Identity</h2>
                      </AccordionSummary>
                      <AccordionDetails >
                        <ProductIdentity control={control} errors={errors} />
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={openAccordion === 'description'} onChange={handleAccordionChange('description')}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h2>Product Description</h2>
                      </AccordionSummary>
                      <AccordionDetails >
                        <ProductDescription control={control} errors={errors} />
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={openAccordion === 'details'} onChange={handleAccordionChange('details')}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h2>Product Details</h2>
                      </AccordionSummary>
                      <AccordionDetails  >
                        <ProductDetails control={control} errors={errors} />
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={openAccordion === 'offer'} onChange={handleAccordionChange('offer')}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h2>Product Offer</h2>
                      </AccordionSummary>
                      <AccordionDetails >
                        <ProductOffer control={control} errors={errors} />
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={openAccordion === 'safety'} onChange={handleAccordionChange('safety')}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h2>Safety & Compliance</h2>
                      </AccordionSummary>
                      <AccordionDetails >
                        <ProductSafety control={control} errors={errors} />
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