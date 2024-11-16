// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import credentialReducer from './credentialSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    credentials: credentialReducer,
  },
});

export default store;