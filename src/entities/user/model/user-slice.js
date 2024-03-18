import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    session: {
      token: null,
      isAuthorized: false,
      roles: [],
    },
    managers: [],
  },
  reducers: {
    setUserData: (state, { payload: { token, roles } }) => {
      state.session = {};
      state.session.token = token;
      state.session.roles = roles;
      state.session.isAuthorized = true;
    },
    clearUserData: (state) => {
      state.session.token = null;
      state.session.roles = null;
      state.session.isAuthorized = false;
    },
    setManagersItems: (state, { payload }) => {
      state.managers = [...state.managers, payload];
    },
  },
});

export const { setUserData, clearUserData, setManagersItems } = userSlice.actions;
export const selectUserData = (state) => state.user.session;
