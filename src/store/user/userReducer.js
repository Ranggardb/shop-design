import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
  currentUser: null,
  isLoading: false,
  searchField: '',
  filteredUser: [],
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setIsUserLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUserList, setCurrentUser, setIsUserLoading } =
  userReducer.actions;
export default userReducer.reducer;
