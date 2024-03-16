import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './base-api';
import { userSlice } from 'src/entities/user';
import { departmentSlice } from 'src/entities/department/model/department-slice';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [departmentSlice.name]: departmentSlice.reducer,
});
