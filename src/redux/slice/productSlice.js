import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_BASE_URL;


const url = apiUrl;


export const addProduct = createAsyncThunk('product/add', async (productData, { rejectWithValue }) => {
    const token = localStorage.getItem('jwtToken');
    // const { name, price, description, inventoryCount, category } = productData;
    try {
        const response = await axios.post(`${url}/api/product/add`, productData, { headers: { token } });
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response?.data || 'failed to add product , please try again !');
    }
})

export const loadProduct = createAsyncThunk('api/product', async (page, { rejectWithValue }) => {
    const token = localStorage.getItem('jwtToken');

    try {
        const response = await axios.post(`${url}/api/product?page=${page}`, {}, { headers: { token } });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Somwthing went wrong please referesh the page !');
    }
});


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