import React, { useRef, useState } from "react";
import { TextField, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Image from 'next/image';
import { Controller } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FiPlusCircle } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

// PhotoUpload component using forwardRef
const PhotoUpload = React.forwardRef(({ src, setSrc, handleFileChange }, ref) => (
  <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
    {src && <Image src={src} height={50} width={50} alt="Product Photo" className="w-full h-full object-contain" />}
    {src && <IoIosCloseCircle className="text-xl absolute -top-2 -right-2 text-red-500" onClick={() => setSrc('')} />}
    {!src && <FiPlusCircle className="text-2xl opacity-70" onClick={() => ref.current.click()} />}
    <input
      type="file"
      className="hidden"
      ref={ref}
      onChange={(e) => handleFileChange(e, setSrc)} // Pass the handleFileChange function as a prop
      accept="image/*" // Accept only image files
    />
  </div>
));

const ProductDescription = ({ control, errors }) => {
  const [ProductPhotoSrc1, setProductPhotoSrc1] = useState("");
  const [ProductPhotoSrc2, setProductPhotoSrc2] = useState("");
  const [ProductPhotoSrc3, setProductPhotoSrc3] = useState("");
  const [ProductPhotoSrc4, setProductPhotoSrc4] = useState("");
  const productPhoto1 = useRef(null);
  const productPhoto2 = useRef(null);
  const productPhoto3 = useRef(null);
  const productPhoto4 = useRef(null);

  const handleFileChange = (event, setProductPhotoSrc) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductPhotoSrc(reader.result); // Set the image source
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
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
                  multiline
                  rows={6}
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
                  multiline
                  rows={6}
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
              <PhotoUpload src={ProductPhotoSrc1} setSrc={setProductPhotoSrc1} ref={productPhoto1} handleFileChange={handleFileChange} />
              <PhotoUpload src={ProductPhotoSrc2} setSrc={setProductPhotoSrc2} ref={productPhoto2} handleFileChange={handleFileChange} />
              <PhotoUpload src={ProductPhotoSrc3} setSrc={setProductPhotoSrc3} ref={productPhoto3} handleFileChange={handleFileChange} />
              <PhotoUpload src={ProductPhotoSrc4} setSrc={setProductPhotoSrc4} ref={productPhoto4} handleFileChange={handleFileChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;