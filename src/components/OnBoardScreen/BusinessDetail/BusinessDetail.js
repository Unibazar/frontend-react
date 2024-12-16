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

  const { control, handleSubmit, setValue, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(validationSchema),
    mode:'all',
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

        <label htmlFor="logo" className="text-[rgba(0,_0,_0,_0.8)] text-[18px] font-semibold">
          Logo:
          <div className="mb-4 w-full flex items-center justify-between border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 bg-[#f5f5f5]">
            <input
              type="file"
              id="logo"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                setValue('logo', file); // Set the file value in the form state
              }}
            />
            <p className="text-[#8692a6] font-thin text-[17px]">Add Logo</p>
            <svg className="w-6 h-6" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.24999C7.11603 9.24999 7.22731 9.2039 7.30936 9.12185C7.39141 9.0398 7.4375 8.92852 7.4375 8.81249V3.74361L9.31525 5.62224C9.35593 5.66292 9.40422 5.69518 9.45736 5.7172C9.51051 5.73921 9.56747 5.75054 9.625 5.75054C9.68253 5.75054 9.73949 5.73921 9.79264 5.7172C9.84578 5.69518 9.89407 5.66292 9.93475 5.62224C9.97543 5.58156 10.0077 5.53327 10.0297 5.48012C10.0517 5.42698 10.0631 5.37001 10.0631 5.31249C10.0631 5.25496 10.0517 5.198 10.0297 5.14485C10.0077 5.09171 9.97543 5.04342 9.93475 5.00274L7.30975 2.37774C7.26911 2.337 7.22083 2.30467 7.16768 2.28262C7.11453 2.26056 7.05755 2.24921 7 2.24921C6.94245 2.24921 6.88547 2.26056 6.83232 2.28262C6.77917 2.30467 6.73089 2.337 6.69025 2.37774L4.06525 5.00274C3.9831 5.08489 3.93695 5.19631 3.93695 5.31249C3.93695 5.42867 3.9831 5.54009 4.06525 5.62224C4.1474 5.70439 4.25882 5.75054 4.375 5.75054C4.49118 5.75054 4.6026 5.70439 4.68475 5.62224L6.5625 3.74361V8.81249C6.5625 8.92852 6.60859 9.0398 6.69064 9.12185C6.77269 9.2039 6.88397 9.24999 7 9.24999ZM0.875 11.4375C0.875 11.3215 0.921094 11.2102 1.00314 11.1281C1.08519 11.0461 1.19647 11 1.3125 11H12.6875C12.8035 11 12.9148 11.0461 12.9969 11.1281C13.0789 11.2102 13.125 11.3215 13.125 11.4375C13.125 11.5535 13.0789 11.6648 12.9969 11.7468C12.9148 11.8289 12.8035 11.875 12.6875 11.875H1.3125C1.19647 11.875 1.08519 11.8289 1.00314 11.7468C0.921094 11.6648 0.875 11.5535 0.875 11.4375Z"
                fill="black"
                fillOpacity="0.2"
              />
            </svg>
          </div>
        </label>

        <label htmlFor="description" className="mt-4 text-[rgba(0,_0,_0,_0.8)] text-[18px] font-semibold">
          Description:
        </label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="description"
              placeholder="Description.........."
              className={`mb-4 outline-none border-[1px] border-solid border-[#e0e0e038] px-[10px] py-3 placeholder:text-[16px] bg-[#f5f5f5] ${errors.description ? 'border-red-500' : ''}`}
            />
          )}
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}

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

        <button disabled={!isValid} type="submit" className="bg-teal-600 hover:bg-teal-800 w-full md:px-24 px-12 py-4 text-[22px] font-normal text-white tracking-[0.05rem] rounded-lg mt-5 disabled:bg-gray-300 disabled:cursor-not-allowed">
          NEXT
        </button>
      </form>
    </div>
  );
};

export default BusinessDetail;