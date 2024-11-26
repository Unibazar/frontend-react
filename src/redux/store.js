import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import productReducer from './slice/productSlice';
import credentialReducer from './slice/credentialSlice';


const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        credentials: credentialReducer,
    }
})


export default store;