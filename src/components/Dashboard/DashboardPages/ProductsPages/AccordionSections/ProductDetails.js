
import React, { useRef, useState } from "react";
import { Box, TextField, Tab, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from "@mui/material";

import { Controller } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ProductDetails = ({ control, errors }) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
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
      </div>
    </div>
  )
}

export default ProductDetails