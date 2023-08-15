import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/productReducer';
import userReducer from './user/userReducer';

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});
