import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:5000';

export const addProduct = createAsyncThunk('product/add', async (productData, { rejectWithValue }) => {
    const token = localStorage.getItem('jwtToken');
    console.log(productData);
    // const { name, price, description, inventoryCount, category } = productData;
    try {

        const response = await axios.post(`${url}/api/product/add`, productData, { headers: { token } });

        return response.data;

    } catch (error) {
        return rejectWithValue(error.response?.data || 'product additin failed , pls try again !');
    }
})


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
        }).addCase(addProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default productSlice.reducer;