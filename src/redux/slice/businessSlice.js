// businessSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_BASE_URL;

// Async action to save business details
export const saveBusinessDetails = createAsyncThunk('business/save', async (businessData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('jwtToken');
    const response = await axios.post(`${apiUrl}/api/business`, businessData, { headers: { token } });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to save business details. Please try again.');
  }
});

// Async action to fetch business details
export const fetchBusinessDetails = createAsyncThunk('business/fetch', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('jwtToken');
    const response = await axios.get(`${apiUrl}/api/business`, { headers: { token } });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch business details. Please try again.');
  }
});

const businessSlice = createSlice({
  name: 'business',
  initialState: {
    details: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    clearBusinessDetails: (state) => {
      state.details = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveBusinessDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(saveBusinessDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.details = action.payload;
      })
      .addCase(saveBusinessDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchBusinessDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBusinessDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.details = action.payload;
      })
      .addCase(fetchBusinessDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBusinessDetails } = businessSlice.actions;
export default businessSlice.reducer;