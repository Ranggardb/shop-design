import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isLoading: false,
  searchField: '',
  filteredProducts: [],
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
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const {
  setProducts,
  setIsLoading,
  setSearchField,
  setFilteredProducts,
} = productReducer.actions;
export default productReducer.reducer;
