import React, { useRef, useState } from "react";
import { Box, TextField, Tab, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from "@mui/material";

import { Controller } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductOffer = ({ control, errors }) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
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
      </div>
    </div>
  )
}

export default ProductOffer