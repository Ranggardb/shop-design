import { createSelector } from '@reduxjs/toolkit';

const selectProductReducer = (state) => state.product;

const selectProducts = createSelector(
  selectProductReducer,
  (product) => product.products
);
const selectIsProductLoading = createSelector(
  selectProductReducer,
  (product) => product.isLoading
);
const selectSearchField = createSelector(
  selectProductReducer,
  (product) => product.searchField
);
const selectFilteredProducts = createSelector(
  selectProductReducer,
  (product) => product.filteredProducts
);
const selectCategoryProducts = createSelector(selectProducts, (products) => {
  const categoryProducts = new Set();
  products.map((product) => categoryProducts.add(product.category));

  return Array.from(categoryProducts);
});

export {
  selectProducts,
  selectIsProductLoading,
  selectSearchField,
  selectFilteredProducts,
  selectCategoryProducts,
};
