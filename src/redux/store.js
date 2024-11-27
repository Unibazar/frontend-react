import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import productReducer from './slice/productSlice';
import credentialReducer from './slice/credentialSlice';
import businessReducer from './slice/businessSlice';
import personalInfoReducer from './slice/personalInfoSlice';


const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        credentials: credentialReducer,
        business: businessReducer,
        personalInfo: personalInfoReducer,
    }
})


export default store;