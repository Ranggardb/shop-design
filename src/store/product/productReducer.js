import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isLoading: false,
  searchField: '',
};

export const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchField: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { setProducts, setIsLoading, setSearchField } =
  productReducer.actions;
export default productReducer.reducer;
