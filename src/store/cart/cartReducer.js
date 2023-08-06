import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
  isLoading: false,
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
    setIsCartLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCarts, setIsCartLoading } = cartReducer.actions;
export default cartReducer.reducer;
