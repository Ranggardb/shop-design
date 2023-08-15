import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/productReducer';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
