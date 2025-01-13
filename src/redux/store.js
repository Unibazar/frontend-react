import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import productReducer from './slice/productSlice';
import credentialReducer from './slice/credentialSlice';
import businessReducer from './slice/businessSlice';
import personalInfoReducer from './slice/personalInfoSlice';
import orderReducer from './slice/orderSlice';


const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        credentials: credentialReducer,
        business: businessReducer,
        personalInfo: personalInfoReducer,
        orders:orderReducer,
    }
})


export default store;