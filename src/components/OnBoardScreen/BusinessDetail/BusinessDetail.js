import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { fetchBusinessDetails, saveBusinessDetails } from '../../../redux/slice/businessSlice'
//buss
const BusinessDetail = ({ nxt , setBusinessInfo }) => {
  // const dispatch = useDispatch();

  // // Define validation schema with Yup
  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required('Business name is required'),
  //   type: Yup.string().required('Business type is required'),
  //   number: Yup.string()
  //     .required('Contact number is required')
  //     .matches(/^[0-9]+$/, 'Contact number must be numeric')
  //     .min(10, 'Contact number must be at least 10 digits')
  //     .max(10, 'Contact number must be at most 10 digits'),
  //   address: Yup.string().required('Address is required'),
  // });

  // // Set up the form using react-hook-form
  // const { control, handleSubmit, formState: { errors } } = useForm({
  //   resolver: yupResolver(validationSchema),
  // });

  // // Function to handle form submission
  // const onSubmit = (data) => {
  //   dispatch(saveBusinessDetails(data)); // Dispatch the action to save business details
  //   nxt(); // Call the next function or perform any action after form submission
  // };


  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // Fetch and pre-fill business data when the component loads
  // useEffect(() => {
  //   dispatch(fetchBusinessDetails()).then((action) => {
  //     if (action.payload?.businessInformation) {
  //       const { name, type, number, address } = action.payload.businessInformation;
  //       setValue('name', name || '');
  //       setValue('type', type || '');
  //       setValue('number', number || '');
  //       setValue('address', address || '');
  //     }
  //   });
  // }, [dispatch, setValue]);

  const validationSchema = Yup.object().shape({
    businessName: Yup.string().required('Business name is required'),
    type: Yup.string().required('Business type is required'),
    number: Yup.string()
      .required('Contact number is required')
      .matches(/^[0-9]+$/, 'Contact number must be numeric')
      .min(10, 'Contact number must be at least 10 digits')
      .max(10, 'Contact number must be at most 10 digits'),
    address: Yup.string().required('Address is required'),
  });

  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    // dispatch(saveBusinessDetails(data)).then((action) => {
    //   if (action.meta.requestStatus === 'fulfilled') {
    //     navigate('/dashboard'); // Redirect on success
    //   }

    setBusinessInfo(prev => ({...prev , ...data})); // Dispatch the action to save business details
    nxt(); // Call the next function or perform any action after form submission
  };
  return (
    <div className="max-w-[600px] bg-gray-50 w-full max-md:mt-10 h-fit gap-0 flex flex-col items-center my-10 py-10 rounded-xl">
      <h1 className="text-[30px] font-bold text-center">Business Details</h1>
      <p className="text-[16px] text-[#8692a6] leading-[34px] font-normal text-center">For the purpose of industry regulation, your details are required.</p>
      <form className="flex flex-col mt-10 px-5 w-full max-w-[440px]" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="text-[rgba(0,_0,_0,_0.8)] text-[18px] font-semibold">
          Business name:
        </label>
        <Controller
          name="businessName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="businessName"
              placeholder="Enter Business Name"
              className={`mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5] ${errors.name ? 'border-red-500' : ''}`}
            />
          )}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <label htmlFor="type" className="text-[rgba(0,_0,_0,_0.8)] text-[18px] font-semibold">
          Business type:
        </label>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="type"
              placeholder="Enter Business Type"
              className={`mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5] ${errors.type ? 'border-red-500' : ''}`}
            />
          )}
        />
        {errors.type && <p className="text-red-500">{errors.type.message}</p>}

        <label htmlFor="number" className="text-[rgba(0,_0,_0,_0.8)] text-[18px] font-semibold">
          Contact no:
        </label>
        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="number"
              placeholder="Enter Your Number"
              className={`mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5] ${errors.number ? 'border-red-500' : ''}`}
            />
          )}
        />
        {errors.number && <p className="text-red-500">{errors.number.message}</p>}

        <label htmlFor="address" className="text-[rgba(0,_0,_0,_0.8)] text-[18px] font-semibold">
          Address:
        </label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="address"
              placeholder="Enter Business Address"
              className={`mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5] ${errors.address ? 'border-red-500' : ''}`}
            />
          )}
        />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}

        <button type="submit" className="bg-teal-600 hover:bg-teal-800 w-full md:px-24 px-12 py-4 text-[22px] font-normal text-white tracking-[0.05rem] rounded-lg mt-5">
          NEXT
        </button>
      </form>
    </div>
  );
};

export default BusinessDetail;