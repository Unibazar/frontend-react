import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import getCountryList from 'react-select-country-list';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { saveCredentials } from '@/redux/slice/credentialSlice';
import { loadUser } from '@/redux/slice/userSlice';

function BusinessInfomationForm({platform,data}) {
  console.log(data,"data")
    const countries = getCountryList().getData();
// const [userId,setUserId]=useState("")
const userId = useSelector(state => state?.user?.user?.user?._id);

    const dispatch = useDispatch();

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
      data,
      region: 'IN',
    },
  });


  // Handle form submission
  const onSubmit = (data) => {
    // const userId = useSelector(state => state?.user?.user?.user?._id);
    console.log(userId,"userid")
    try {
      const finalData = {userId:userId,[platform]: {...data}};
      dispatch(saveCredentials(finalData));
      console.log('Credentials saved:', data);
    } catch (error) {
      console.error('Error saving credentials:', error);
    }
  };

  useEffect(() => {
    // Assuming `dispatch(loadUser())` is used to fetch user data
    // dispatch(loadUser()).then((data) => {
    //   const businessInformation = data?.payload?.user?.businessInformation;
    //   setUserId(data?.payload?.user?._id)
    //   console.log(businessInformation,"businessInformation")
    //   // Dynamically using the platform value to access platform-specific information
    //   const platformData = businessInformation?.[platform] || {};

      // Set values into the form fields after fetching the data
      setValue('sellerId', data?.sellerId || ''); // Set name field
      setValue('clientId', data?.clientId || ''); // Set email field
      setValue('clientSecret', data?.clientSecret || ''); // Set phoneNumber field
      setValue('marketplace', data?.marketplace || ''); // Set location field
      setValue('refreshToken', data?.refreshToken || ''); // Set logo field (If it's null or needs updating)
      setValue('region', data?.region || ''); // Set description field (default or fetched value)
    // });
  }, [dispatch, setValue, data]);

  return (
    <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          {accountKey !== 'myntra' ? (
                    <>
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
                    </>
                  ):(
                    <>
                    <Controller
                      name="secret_key"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label='Secret Key'
                          variant='outlined'
                          error={!!errors.secret_key}
                          helperText={errors.secret_key ? errors.secret_key.message : ''}
                        />
                      )}
                    />
                    <Controller
                      name="merchant_id"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label='Merchant Id'
                          variant='outlined'
                          error={!!errors.merchant_id}
                          helperText={errors.merchant_id ? errors.merchant_id.message : ''}
                        />
                      )}
                    />
                    </>
                  )}
          <div className="flex justify-between w-full">
            <button type="button" className="mt-4 py-2 px-4 rounded">
              Close
            </button>
            <button type="submit" className="mt-4 bg-teal-600 text-white py-2 px-4 rounded">
              Save
            </button>
          </div>
        </form>
  )
}

export default BusinessInfomationForm