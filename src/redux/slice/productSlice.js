import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.withCredentials = true;

import getConfig from 'next/config';
import { useEffect } from 'react';

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_BASE_URL;


const url = apiUrl;


export const addProduct = createAsyncThunk('product/add', async (productData, { rejectWithValue }) => {
    const token = localStorage.getItem('jwtToken');
    // const { name, price, description, inventoryCount, category } = productData;
    try {
        const response = await axios.post(`${url}/api/productList/add`, productData, { headers: { token } , withCredentials:true });
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response?.data || 'failed to add product , please try again !');
    }
})

// export const loadProduct = createAsyncThunk('api/product', async (page, { rejectWithValue }) => {
//     const token = localStorage.getItem('jwtToken');

//     try {
//         const response = await axios.post(`${url}/api/product?page=${page}`, {}, { headers: { token } , withCredentials:true });
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error.response?.data || 'Somwthing went wrong please referesh the page !');
//     }
// });
// export const loadProduct = createAsyncThunk('api/product', async (page, { rejectWithValue }) => {
//     const token = localStorage.getItem('jwtToken');

//     try {
//         const response = await axios.get(`${url}/api/productList/getListing`, {}, { headers: { token } , withCredentials:true });
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error.response?.data || 'Somwthing went wrong please referesh the page !');
//     }
// });




export const loadProduct = createAsyncThunk(
  'api/product',
  async (page, { rejectWithValue, getState }) => {
    const token = localStorage.getItem('jwtToken');
    const state = getState(); // Access the Redux state to get user data
    // const businessInformation = state.user?.businessInformation;
    const businessInformation = data?.payload?.user?.businessInformation
console.log(businessInformation,"bus")
console.log(data?.payload,"bus data")
    if (!businessInformation?.amazon) {
      return rejectWithValue('Amazon business information is missing!');
    }

    const sellerId = businessInformation.amazon.sellerId;
    const marketplaceId = businessInformation.amazon.marketplace;

    try {
      const response = await axios.get(
        `${url}/api/productList/getListing`,
        {
          params: {
            sellerId,
            marketplaceId,
          },
        },
        { headers: { token }, withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'Something went wrong, please refresh the page!'
      );
    }
  }
);

// Example useEffect to trigger the API call
// useEffect(() => {
//   dispatch(loadProduct()).then((response) => {
//     console.log('Product listing response:', response);
//   });
// }, [dispatch]);


const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: null,
        isLoading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(addProduct.pending, state => {
            state.isLoading = true;
            state.error = null;
        }).addCase(addProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
            state.error = null;
        }).addCase(addProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })


        .addCase(loadProduct.pending, state => {
            state.isLoading = true;
            state.error = null;
        }).addCase(loadProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
            state.error = null;
        }).addCase(loadProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default productSlice.reducer;