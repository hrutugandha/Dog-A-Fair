import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import {appReducer}  from './app/app.reducer'
 
const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
