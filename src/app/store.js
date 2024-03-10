import {combineReducers, configureStore } from "@reduxjs/toolkit";
import infoReducer from "../features/infoSlice"
import authReducer from "../features/authSlice"

const rootReducer = combineReducers({
   info: infoReducer,
   auth: authReducer
})

export const store = configureStore({reducer:rootReducer})