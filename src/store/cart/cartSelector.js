import { createSelector } from '@reduxjs/toolkit';

const selectProductReducer = (state) => state.cart;

const selectCarts = createSelector(
  selectProductReducer,
  (product) => product.products
);
const selectIsCartLoading = createSelector(
  selectProductReducer,
  (product) => product.isLoading
);

export { selectCarts, selectIsCartLoading };
