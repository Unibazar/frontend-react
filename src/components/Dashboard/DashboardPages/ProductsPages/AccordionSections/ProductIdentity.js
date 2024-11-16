import React from 'react'
import { TextField, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, Select, MenuItem } from "@mui/material";
import { Controller } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductIdentity = ({ control, errors }) => {
  return (
    <div>

      <div className="flex flex-col gap-4">
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
      </div>

    </div>
  )
}

export default ProductIdentity