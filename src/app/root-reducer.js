import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from './base-api';
import { userSlice } from 'src/entities/user';
import { departmentSlice } from 'src/entities/department/model/department-slice';
import { projectSlice } from 'src/entities/project/model/project-slice';
import { roleSlice } from 'src/entities/role/model/role-slice';
import { skillSlice } from 'src/entities/skill/model/skill-slice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [departmentSlice.name]: departmentSlice.reducer,
  [projectSlice.name]: projectSlice.reducer,
  [roleSlice.name]: roleSlice.reducer,
  [skillSlice.name]: skillSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
