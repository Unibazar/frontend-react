// credentialSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_BASE_URL;

export const saveCredentials = createAsyncThunk('credentials/save', async (credentialData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('jwtToken');
    const response = await axios.post(`${apiUrl}/api/user/onboarding`, credentialData, { headers: { token } });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to save credentials. Please try again.');
  }
});

const credentialSlice = createSlice({
  name: 'credentials',
  initialState: {
    credentials: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveCredentials.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(saveCredentials.fulfilled, (state, action) => {
        state.isLoading = false;
        state.credentials = action.payload;
      })
      .addCase(saveCredentials.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default credentialSlice.reducer;