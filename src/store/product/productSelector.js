import { createSelector } from '@reduxjs/toolkit';

const selectProductReducer = (state) => state.product;

const selectProducts = createSelector(
  selectProductReducer,
  (product) => product.products
);

export { selectProducts };
