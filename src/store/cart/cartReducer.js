import { createSlice } from '@reduxjs/toolkit';
import { addCartItem, clearCartItem, removeCartItem } from './cartAction';

const initialState = {
  cartList: [],
  isCartOpen: false,
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.cartList = action.payload;
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartList = addCartItem(state.cartList, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartList = removeCartItem(state.cartList, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartList = clearCartItem(state.cartList, action.payload);
    },
  },
});

export const {
  setCarts,
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartReducer.actions;
export default cartReducer.reducer;
