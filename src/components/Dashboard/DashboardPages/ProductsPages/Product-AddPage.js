'use client';

import Loader from "@/components/Loader/Loader";
import { addProduct } from "@/redux/slice/productSlice";
import { Box, TextField, Tab, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoIosCloseCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AmazonForm from "./Form-Amazon/AmazonForm";
import FlipkartForm from "./Form-Amazon/FlipkartForm";

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

  /* schema for product listing

{
  "productType": "SPORTING_GOODS",
  "sku":"SPT-001-001",
  "requirements": "LISTING",

  "conditionType": "new_new",
  "itemName": "Unibazar sports for boy",
  "mainImage": {
    "link": "https://filesblog.bizvibe.com/wp-content/webp-express/webp-images/uploads/2022/09/largest-sports-equipment-companies.jpg.webp",
    "height": 248,
    "width": 300
  },
  
  "attributes": {
    "color": [
      {
        "language_tag": "en_IN",
        "value": "black brown",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "item_type_name": [
      {
        "language_tag": "en_IN",
        "value": "sports",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "included_components": [
      {
        "language_tag": "en_IN",
        "value": "none",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "fulfillment_availability": [
      {
        "fulfillment_channel_code": "DEFAULT",
        "quantity": 10,
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "manufacturer": [
      {
        "language_tag": "en_IN",
        "value": "Toy store",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "item_weight": [
      {
        "unit": "grams",
        "value": 1080.0,
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "recommended_browse_nodes": [
      {
        "value": "1378446031",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "bullet_point": [
      {
        "language_tag": "en_IN",
        "value": "Soft toy, dog figure",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "product_description": [
      {
        "language_tag": "en_IN",
        "value": "A cute dog figuer that children can play with",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "brand": [
      {
        "language_tag": "en_IN",
        "value": "Generic",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "supplier_declared_has_product_identifier_exemption": [
      {
        "value": "True",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "country_of_origin": [
      {
        "value": "IN",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "rtip_manufacturer_contact_information": [
      {
        "value": "local store",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "merchant_shipping_group": [
      {
        "value": "legacy-template-id",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "item_name": [
      {
        "language_tag": "en_IN",
        "value": "Unibazar sports ",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "condition_type": [
      {
        "value": "new_new",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "material": [
      {
        "language_tag": "en_IN",
        "value": "Thermoplastic Rubber",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "department": [
      {
        "value": "Baby-Boys"
      }
    ],
    "model_name": [
      {
        "value": "Alkaman new"
      }
    ],
    "warranty_description": [
      {
        "value": "Alkaman new"
      }
    ],
    "item_dimensions": [
      {
        "height": {
          "unit": "centimeters",
          "value": "2"
        },
        "length": {
          "unit": "centimeters",
          "value": "2"
        },
        "width": {
          "unit": "centimeters",
          "value": "2"
        }
      }
    ],
    "supplier_declared_dg_hz_regulation": [
      {
        "value": "waste"
      }
    ],
    "part_number": [
      {
        "value": "none",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "external_product_information": [
      {
        "entity": "HSN Code",
        "value": "610547",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "unit_count": [
      {
        "value": 18.0,
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "packer_contact_information": [
      {
        "language_tag": "en_IN",
        "value": "toy store, roorkee",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "other_product_image_locator_1": [
      {
        "media_location": "https://filesblog.bizvibe.com/wp-content/webp-express/webp-images/uploads/2022/09/largest-sports-equipment-companies.jpg.webp",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ],
    "main_product_image_locator": [
      {
        "media_location": "https://filesblog.bizvibe.com/wp-content/webp-express/webp-images/uploads/2022/09/largest-sports-equipment-companies.jpg.webp",
        "marketplace_id": "A21TJRUUN4KGV"
      }
    ]
   
  },
 
  "fulfillmentAvailability": [
    {
      "fulfillmentChannelCode": "DEFAULT",
      "quantity": 10
    }
  ]
}

*/

  const { product, isLoading } = useSelector(state => state.product);
  const userData = useSelector(state => state?.user?.user?.user?.businessInformation);
  console.log(userData, 'user');
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    // resolver: yupResolver(validationSchema),
  });


  const onSubmit = data => {
    console.log(data);

    const payload = {
      productType: data?.productType ?? 'SPORTING_GOODS',
      sku: 'SPT-001-001',
      requirements: 'LISTING',

      conditionType: 'new_new',
      itemName: data?.itemName ?? 'Unibazar sports for boy',
      mainImage: {
        link: data?.productPhoto1 ?? 'https://filesblog.bizvibe.com/wp-content/webp-express/webp-images/uploads/2022/09/largest-sports-equipment-companies.jpg.webp',
        height: 248,
        width: 300,
      },

      attributes: {
        color: [
          {
            language_tag: 'en_IN',
            value: data?.color ?? 'black brown',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        item_type_name: [
          {
            language_tag: 'en_IN',
            value: data?.itemTypeName ?? 'sports',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        included_components: [
          {
            language_tag: 'en_IN',
            value: 'none',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        fulfillment_availability: [
          {
            fulfillment_channel_code: 'DEFAULT',
            quantity: 10,
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        manufacturer: [
          {
            language_tag: 'en_IN',
            value: 'Toy store',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        item_weight: [
          {
            unit: 'grams',
            value: 1080.0,
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        recommended_browse_nodes: [
          {
            value: data?.browserNodes ?? '1378446031',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        bullet_point: [
          {
            language_tag: 'en_IN',
            value: data?.bulletPoint ?? 'Soft toy, dog figure',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        product_description: [
          {
            language_tag: 'en_IN',
            value: data?.description ?? 'A cute dog figuer that children can play with',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        brand: [
          {
            language_tag: 'en_IN',
            value: data?.brandName ?? 'Generic',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        supplier_declared_has_product_identifier_exemption: [
          {
            value: 'True',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        country_of_origin: [
          {
            value: 'IN',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        rtip_manufacturer_contact_information: [
          {
            value: data?.manufacturerContactInfo ?? 'local store',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        merchant_shipping_group: [
          {
            value: 'legacy-template-id',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        item_name: [
          {
            language_tag: 'en_IN',
            value: data?.itemName ?? 'Unibazar sports ',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        condition_type: [
          {
            value: 'new_new',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        material: [
          {
            language_tag: 'en_IN',
            value: data?.material ?? 'Thermoplastic Rubber',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        department: [
          {
            value: 'Baby-Boys',
          },
        ],
        model_name: [
          {
            value: data?.modelName ?? 'Alkaman new',
          },
        ],
        warranty_description: [
          {
            value: 'Alkaman new',
          },
        ],
        item_dimensions: [
          {
            height: {
              unit: 'centimeters',
              value: '2',
            },
            length: {
              unit: 'centimeters',
              value: '2',
            },
            width: {
              unit: 'centimeters',
              value: '2',
            },
          },
        ],
        supplier_declared_dg_hz_regulation: [
          {
            value: 'waste',
          },
        ],
        part_number: [
          {
            value: data?.partNumber ?? 'none',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        external_product_information: [
          {
            entity: 'HSN Code',
            value: '610547',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        unit_count: [
          {
            value: data?.noOfPieces ?? 18.0,
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        packer_contact_information: [
          {
            language_tag: 'en_IN',
            value: 'toy store, roorkee',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        other_product_image_locator_1: [
          {
            media_location: 'https://filesblog.bizvibe.com/wp-content/webp-express/webp-images/uploads/2022/09/largest-sports-equipment-companies.jpg.webp',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
        main_product_image_locator: [
          {
            media_location: 'https://filesblog.bizvibe.com/wp-content/webp-express/webp-images/uploads/2022/09/largest-sports-equipment-companies.jpg.webp',
            marketplace_id: 'A21TJRUUN4KGV',
          },
        ],
      },

      fulfillmentAvailability: [
        {
          fulfillmentChannelCode: 'DEFAULT',
          quantity: 10,
        },
      ],
    };

    // Dispatch the action to add the product
    dispatch(addProduct(payload)).then(result => {
      console.log(result, 'result');
      if (result?.payload?.message === 'Product created/updated successfully') {
        setSnackbarState(prev => ({ ...prev, open: true, message: 'Product Added Successfully' }));

        navigate.push('products?q=list');
      } else {
        const errorMessages = result?.payload?.details?.errors?.map(error => error.message).join(', ');
        setSnackbarState(prev => ({
          ...prev,
          open: true,
          message: errorMessages || 'Unable to add product',
          severity: 'error',
        }));
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
      <Snackbar open={snackbarState.open} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
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
                <AmazonForm handleSubmit={handleSubmit} onSubmit={onSubmit} control={control} ProductPhotoSrc1={ProductPhotoSrc1} productPhoto1={productPhoto1} ProductPhotoSrc2={ProductPhotoSrc2} productPhoto2={productPhoto2} ProductPhotoSrc3={ProductPhotoSrc3} productPhoto3={productPhoto3} ProductPhotoSrc4={ProductPhotoSrc4} productPhoto4={productPhoto4} errors={errors} watch={watch} setValue={setValue}/>
              </TabPanel>
              <TabPanel value="flipkart">
                <FlipkartForm handleSubmit={handleSubmit} onSubmit={onSubmit} control={control} ProductPhotoSrc1={ProductPhotoSrc1} productPhoto1={productPhoto1} ProductPhotoSrc2={ProductPhotoSrc2} productPhoto2={productPhoto2} ProductPhotoSrc3={ProductPhotoSrc3} productPhoto3={productPhoto3} ProductPhotoSrc4={ProductPhotoSrc4} productPhoto4={productPhoto4} errors={errors}/>
              </TabPanel>
              <TabPanel value="others">Coming soon</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  );
}
