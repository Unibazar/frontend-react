import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';
import { TextField, Button, Grid } from '@mui/material';

const ProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="brand"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Brand"
                variant="outlined"
                fullWidth
                error={!!errors.brand}
                helperText={errors.brand?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="bullet_point"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Bullet Point"
                variant="outlined"
                fullWidth
                error={!!errors.bullet_point}
                helperText={errors.bullet_point?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="color"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Color"
                variant="outlined"
                fullWidth
                error={!!errors.color}
                helperText={errors.color?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="condition_type"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Condition Type"
                variant="outlined"
                fullWidth
                error={!!errors.condition_type}
                helperText={errors.condition_type?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="country_of_origin"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Country of Origin"
                variant="outlined"
                fullWidth
                error={!!errors.country_of_origin}
                helperText={errors.country_of_origin?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Department"
                variant="outlined"
                fullWidth
                error={!!errors.department}
                helperText={errors.department?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="hsn_code"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="HSN Code"
                variant="outlined"
                fullWidth
                error={!!errors.hsn_code}
                helperText={errors.hsn_code?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="item_name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Item Name"
                variant="outlined"
                fullWidth
                error={!!errors.item_name}
                helperText={errors.item_name?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="item_type_name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Item Type Name"
                variant="outlined"
                fullWidth
                error={!!errors.item_type_name}
                helperText={errors.item_type_name?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="manufacturer"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Manufacturer"
                variant="outlined"
                fullWidth
                error={!!errors.manufacturer}
                helperText={errors.manufacturer?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="material"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Material"
                variant="outlined"
                fullWidth
                error={!!errors.material}
                helperText={errors.material?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="model_name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Model Name"
                variant="outlined"
                fullWidth
                error={!!errors.model_name}
                helperText={errors.model_name?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="product_description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Product Description"
                variant="outlined"
                fullWidth
                error={!!errors.product_description}
                helperText={errors.product_description?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="packer_contact_information"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Packer Contact Information"
                variant="outlined"
                fullWidth
                error={!!errors.packer_contact_information}
                helperText={errors.packer_contact_information?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="warranty_description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Warranty Description"
                variant="outlined"
                fullWidth
                error={!!errors.warranty_description}
                helperText={errors.warranty_description?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="unit_count"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Unit Count"
                variant="outlined"
                fullWidth
                error={!!errors.unit_count}
                helperText={errors.unit_count?.message}
                type="number"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;
