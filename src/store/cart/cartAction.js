import {
  additemToList,
  decreaseItemQuantityFromList,
  deleteItemFromList,
  increaseItemQuantityFromList,
  isItemExist,
} from '../../utils/helper';

const addCartItem = (cartList, productToAdd) => {
  console.log('cartAction.js => addCartItem', { cartList, productToAdd });
  const existingCartItem = isItemExist(cartList, productToAdd);

  if (existingCartItem) {
    return increaseItemQuantityFromList(cartList, productToAdd);
  }

  return additemToList(cartList, productToAdd);
};

const removeCartItem = (cartList, itemToRemove) => {
  const existingCartItem = isItemExist(cartList, itemToRemove);

  if (existingCartItem.quantity === 1) {
    return deleteItemFromList(cartList, itemToRemove);
  }

  return decreaseItemQuantityFromList(cartList, itemToRemove);
};

const clearCartItem = (cartItems, itemToClear) => {
  return deleteItemFromList(cartItems, itemToClear);
};
export { addCartItem, removeCartItem, clearCartItem };
