import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import getCountryList from 'react-select-country-list';
import { useDispatch } from 'react-redux';
import { saveCredentials } from '../../../redux/slice/credentialSlice';

import { useRouter } from 'next/router';


// Get the list of countries
const countries = getCountryList().getData();

const CredentialDailog = ({ isOpen, onClose, title, content }) => {
  const dispatch = useDispatch();




  // Define validation schema with Yup
  const validationSchema = Yup.object().shape({
    sellerId: Yup.string().required('Seller ID is required'),
    clientId: Yup.string().required('Client ID is required'),
    clientSecret: Yup.string().required('Client Secret is required'),
    marketplace: Yup.string().required('Marketplace is required'),
    refreshToken: Yup.string().required('Refresh Token is required'),
    region: Yup.string().required('Region is required'),
  });

  // Set up the form using react-hook-form
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      region: 'IN' // Set default region to India
    }
  });

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      await dispatch(saveCredentials(data)).unwrap(); // Dispatch the action and wait for it to resolve
      console.log('Credentials saved:', data);
      onClose(); // Close the dialog after saving

    } catch (error) {
      console.error('Error saving credentials:', error);
    }
  };

  // Return null if the dialog is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 w-1/3 gap-2 flex flex-col">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2">{content}</p>
        </div>

        <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="sellerId"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='Seller Id'
                variant='outlined'
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
                label='Client Id'
                variant='outlined'
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
                label='Client Secret'
                variant='outlined'
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
                label='Marketplace'
                variant='outlined'
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
                label='Refresh Token'
                variant='outlined'
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
          <div className='flex justify-between w-full'>
            <button
              type="button"
              className="mt-4 py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="mt-4 bg-teal-600 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CredentialDailog;