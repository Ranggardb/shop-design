import { createSelector } from '@reduxjs/toolkit';

const selectCartReducer = (state) => state.cart;

const selectIsCartOpen = createSelector(
  selectCartReducer,
  (cart) => cart.isCartOpen
);

const selectCartList = createSelector(
  selectCartReducer,
  (cart) => cart.cartList
);

const selectCartTotal = createSelector(selectCartList, (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

const selectCartCount = createSelector(selectCartList, (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export { selectIsCartOpen, selectCartList, selectCartTotal, selectCartCount };
