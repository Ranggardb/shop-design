import { createSelector } from '@reduxjs/toolkit';

const selectUserReducer = (state) => state.user;

const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);

export { selectCurrentUser };
