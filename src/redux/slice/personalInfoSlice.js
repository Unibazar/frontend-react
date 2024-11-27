// personalInfoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_BASE_URL;

// Async action to save personal information
export const savePersonalInformation = createAsyncThunk('personalInfo/save', async (personalData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('jwtToken');
    const formData = new FormData();

    // Append data to FormData for file upload
    formData.append('name', personalData.name);
    formData.append('email', personalData.email);
    formData.append('logo', personalData.logo);
    formData.append('description', personalData.description);

    const response = await axios.post(`${apiUrl}/api/personal-info`, formData, { headers: { token } });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to save personal information. Please try again.');
  }
});

// Async action to fetch personal information
export const fetchPersonalInformation = createAsyncThunk('personalInfo/fetch', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('jwtToken');
    const response = await axios.get(`${apiUrl}/api/personal-info`, { headers: { token } });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch personal information. Please try again.');
  }
});

const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState: {
    info: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    clearPersonalInfo: (state) => {
      state.info = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(savePersonalInformation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(savePersonalInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload;
      })
      .addCase(savePersonalInformation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchPersonalInformation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPersonalInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload;
      })
      .addCase(fetchPersonalInformation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearPersonalInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;