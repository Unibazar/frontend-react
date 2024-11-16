import React, { useRef, useState } from "react";
import { Box, TextField, Tab, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from "@mui/material";

import { Controller } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductSafety = ({ control, errors }) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
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
      </div>
    </div>
  )
}

export default ProductSafety