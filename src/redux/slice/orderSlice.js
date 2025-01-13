// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import getConfig from "next/config";

// const { publicRuntimeConfig } = getConfig();
// const apiUrl = publicRuntimeConfig.API_BASE_URL;

// axios.defaults.withCredentials = true;

// // Thunk to fetch orders dynamically based on user-specific credentials
// export const fetchOrders = createAsyncThunk(
//   "orders/fetch",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("jwtToken");
//       const { sellerId, marketplaceId, refreshToken,clientId,clientSecret } = credentials;

//       // Make a POST request to fetch orders dynamically
//       const response = await axios.post(
//         `${apiUrl}/api/productList/`,
//         { sellerId, marketplaceId, refreshToken,clientId,clientSecret },
//         {
//           headers: { token },
//           withCredentials: true,
//         }
//       );

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || "Failed to fetch orders, please try again!"
//       );
//     }
//   }
// );

// // Orders Slice
// const ordersSlice = createSlice({
//   name: "orders",
//   initialState: {
//     orders: null,
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchOrders.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchOrders.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.orders = action.payload;
//         state.error = null;
//       })
//       .addCase(fetchOrders.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default ordersSlice.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_BASE_URL;

axios.defaults.withCredentials = true;

export const fetchOrders = createAsyncThunk(
  "orders/fetch",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const state = getState();
      const businessInformation = state.user?.user?.user;

      if (!businessInformation?.amazon) {
        return rejectWithValue('Amazon business information is missing!');
      }

      const { sellerId, marketplace: marketplaceId, refreshToken, clientSecret, clientId } = businessInformation.amazon;

      const response = await axios.post(
        `${apiUrl}/api/productList/`,
        { sellerId, marketplaceId, refreshToken, clientId, clientSecret },
        {
          headers: { token },
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch orders, please try again!"
      );
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
        state.error = null;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ordersSlice.reducer;

