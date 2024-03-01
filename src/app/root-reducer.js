import { combineReducers } from '@reduxjs/toolkit'
import { userSlice } from 'src/entities/user'

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
})
