import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    session: {
      token: null,
      isAuthorized: false,
      roles: [],
      name: '',
      email: '',
      organization: 0,
    },
    managers: [],
    members: [],
  },
  reducers: {
    setUserToken: (state, { payload: { token } }) => {
      state.session.token = token;
    },
    setUserData: (state, { payload: { token, roles, name, email, organization } }) => {
      state.session = {};
      state.session.token = token;
      state.session.roles = roles;
      state.session.name = name;
      state.session.email = email;
      state.session.organization = organization;
      state.session.isAuthorized = true;
    },
    clearUserData: (state) => {
      state.session.token = null;
      state.session.roles = null;
      state.session.name = '';
      state.session.email = '';
      state.session.organization = 0;
      state.session.isAuthorized = false;
    },
    setManagersItems: (state, { payload }) => {
      state.managers = payload;
    },
    setMembersItems: (state, { payload }) => {
      state.members = payload;
    },
  },
});

export const { setUserData, clearUserData, setManagersItems, setUserToken, setMembersItems } =
  userSlice.actions;
export const selectUserData = (state) => state.user.session;
