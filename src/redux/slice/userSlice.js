import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:5000';

// Asynchronous action to handle user registration
<<<<<<< HEAD
export const register = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        try {
            // console.log(userData);
            const response = await axios.post(`${url}/api/user/register`, userData);
            // console.log(response);
            return response.data;
        } catch (error) {
            // console.log(error.response?.data);
            return rejectWithValue(error.response?.data || 'Registration failed. Please try again.');
        }
    }
);
=======
export const register = createAsyncThunk('user/register', async (userData, { rejectWithValue }) => {
  try {
    console.log(userData);
    const response = await axios.post(`${url}/api/user/register`, userData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response?.data);
    return rejectWithValue(error.response?.data || 'Registration failed. Please try again.');
  }
});
>>>>>>> 09094d0863b0ebc926addfa4e3051e83365d13b8

export const otpVerification = createAsyncThunk('user/otp', async (otp, { rejectWithValue }) => {
  // console.log(otp);
  try {
    const response = await axios.post(`${url}/api/user/register/otp`, { otp });

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Registration failed. Please try again.');
  }
});

// Asynchronous action to handle user login
export const login = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    // console.log(credentials);
    const response = await axios.post(`${url}/api/user/login`, credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Login failed. Please try again.');
  }
});

// Asynchronous action to handle user logout
export const logout = createAsyncThunk('user/logout', async (_, { dispatch, rejectWithValue }) => {
  try {
    await axios.get(`${url}/api/user/logout`);
    dispatch(clearUser());
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Logout failed. Please try again.');
  }
});

export const forgetPassword = createAsyncThunk('user/reset', async (email, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${url}/api/user/reset`, { email });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Something went wrong please referesh the page !');
  }
});

export const resetPassword = createAsyncThunk('user/reset/:userToken', async ({ newPassword, confirmPassword, userToken }, { rejectWithValue }) => {
  // const token = localStorage.getItem('jwtToken');
  try {
    const response = await axios.put(`${url}/api/user/reset/${userToken}`, { newPassword, confirmPassword });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Something went wrong please referesh the page !');
  }
});

export const loadUser = createAsyncThunk('user/load', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem('jwtToken');
  try {
    const response = await axios.post(`${url}/api/user/`, {}, { headers: { token } });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Somwthing went wrong please referesh the page !');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearUser: state => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        // localStorage.setItem('jwtToken', action.payload.token);
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('jwtToken', action.payload.token);
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loadUser.pending, state => {
        state.isLoading = true;
        state.user = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(otpVerification.pending, state => {
        state.isLoading = true;
        state.user = null;
      })
      .addCase(otpVerification.fulfilled, (state, action) => {
        localStorage.setItem('jwtToken', action.payload.token);
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(otpVerification.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(forgetPassword.pending, state => {
        state.isLoading = true;
        state.user = null;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resetPassword.pending, state => {
        state.isLoading = true;
        state.user = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;
