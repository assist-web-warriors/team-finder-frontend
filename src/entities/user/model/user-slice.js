import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { token: null, isAuthorized: false },
  reducers: {
    setUserData: (state, { payload: { token, roles } }) => {
      state.token = token;
      state.roles = roles;
      state.isAuthorized = true;
    },
    clearUserData: (state) => {
      state.token = null;
      state.roles = null;
      state.isAuthorized = false;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export const selectUserData = (state) => state.user;
