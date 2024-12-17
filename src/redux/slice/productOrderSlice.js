import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.withCredentials = true;

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_BASE_URL;


const url = apiUrl;

export const getOrders = createAsyncThunk(
  'api/orders',
  async (page, { rejectWithValue, getState }) => {
    const token = localStorage.getItem('jwtToken');
    const state = getState(); // Access the Redux state to get user data
    const businessInformation = state.user?.user?.user?.businessInformation;

    if (!businessInformation?.amazon) {
      return rejectWithValue('Amazon business information is missing!');
    }

    const sellerId = businessInformation.amazon.sellerId;
    const marketplaceId = businessInformation.amazon.marketplace;

    try {
      const response = await axios.post(
        `${url}/api/productList`,
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




const productOrderSlice = createSlice({
    name: 'orders',
    initialState: {
        orders:null,
        isLoading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getOrders.pending, state => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(getOrders.fulfilled, (state, action) => {
          state.isLoading = false;
          state.orders = action.payload;  // orders are updated here
          state.error = null;
        })
        .addCase(getOrders.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    }
})

export default productOrderSlice.reducer;