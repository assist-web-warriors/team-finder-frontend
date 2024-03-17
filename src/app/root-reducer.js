import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from './base-api';
import { userSlice } from 'src/entities/user';
import { departmentSlice } from 'src/entities/department/model/department-slice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [departmentSlice.name]: departmentSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
