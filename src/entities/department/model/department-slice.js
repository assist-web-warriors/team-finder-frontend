import { createSlice } from '@reduxjs/toolkit';

export const departmentSlice = createSlice({
  name: 'department',
  initialState: {
    items: [],
    isLoading: true,
  },
  reducers: {
    addDepartmentItem: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    editDepartmentItem: (state, { payload }) => {
      state.items = state.items.map(({ id, ...rest }) =>
        id === payload.id ? payload : { id, ...rest },
      );
    },
    deleteDepartmentItem: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    setDepartmentItems: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
  },
});

export const { addDepartmentItem, editDepartmentItem, deleteDepartmentItem, setDepartmentItems } =
  departmentSlice.actions;
