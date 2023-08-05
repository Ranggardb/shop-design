import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/productReducer';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
