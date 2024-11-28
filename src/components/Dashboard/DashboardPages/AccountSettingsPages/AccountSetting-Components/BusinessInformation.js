import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import getCountryList from 'react-select-country-list';
import { useDispatch, useSelector } from 'react-redux';
import { saveCredentials } from '@/redux/slice/credentialSlice';

const countries = getCountryList().getData();

export default function BusinessInformation() {
  const dispatch = useDispatch();
  const { credentials = {}, isLoading = false, error = null } = useSelector((state) => state.credentials || {});

  // Validation schema
  const validationSchema = Yup.object().shape({
    sellerId: Yup.string().required('Seller ID is required'),
    clientId: Yup.string().required('Client ID is required'),
    clientSecret: Yup.string().required('Client Secret is required'),
    marketplace: Yup.string().required('Marketplace is required'),
    refreshToken: Yup.string().required('Refresh Token is required'),
    region: Yup.string().required('Region is required'),
  });

  // Set up the form using react-hook-form
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      sellerId: '',
      clientId: '',
      clientSecret: '',
      marketplace: '',
      refreshToken: '',
      region: 'IN',
    },
  });

  // Populate form fields with saved credentials
  useEffect(() => {
    if (credentials) {
      Object.keys(credentials).forEach((key) => {
        setValue(key, credentials[key]);
      });
    }
  }, [credentials, setValue]);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      await dispatch(saveCredentials(data)).unwrap();
      console.log('Credentials saved:', data);
    } catch (error) {
      console.error('Error saving credentials:', error);
    }
  };

  if (isLoading) {
    return <p>Loading credentials...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg p-5 w-full gap-2 flex flex-col">
        <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="sellerId"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Seller Id"
                variant="outlined"
                error={!!errors.sellerId}
                helperText={errors.sellerId ? errors.sellerId.message : ''}
              />
            )}
          />
          <Controller
            name="clientId"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Client Id"
                variant="outlined"
                error={!!errors.clientId}
                helperText={errors.clientId ? errors.clientId.message : ''}
              />
            )}
          />
          <Controller
            name="clientSecret"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Client Secret"
                variant="outlined"
                error={!!errors.clientSecret}
                helperText={errors.clientSecret ? errors.clientSecret.message : ''}
              />
            )}
          />
          <Controller
            name="marketplace"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Marketplace"
                variant="outlined"
                error={!!errors.marketplace}
                helperText={errors.marketplace ? errors.marketplace.message : ''}
              />
            )}
          />
          <Controller
            name="refreshToken"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Refresh Token"
                variant="outlined"
                error={!!errors.refreshToken}
                helperText={errors.refreshToken ? errors.refreshToken.message : ''}
              />
            )}
          />
          <Controller
            name="region"
            control={control}
            render={({ field }) => (
              <FormControl variant="outlined" error={!!errors.region} fullWidth>
                <InputLabel>Region</InputLabel>
                <Select
                  {...field}
                  label="Region"
                  onChange={(event) => field.onChange(event.target.value)}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.value} value={country.value}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.region && <p className="text-red-500">{errors.region.message}</p>}
              </FormControl>
            )}
          />
          <div className="flex justify-between w-full">
            <button type="button" className="mt-4 py-2 px-4 rounded">
              Close
            </button>
            <button type="submit" className="mt-4 bg-teal-600 text-white py-2 px-4 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
