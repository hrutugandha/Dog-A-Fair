import axios from "axios";
import * as types from "./auth.actionTypes";

// thunk which will help us
export const loginAPI = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });
  axios
    .post("https://reqres.in/api/login", {
      email: data.email,
      password: data.password,
    })
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: types.LOGIN_ERROR });
    });
};

export const logoutAPI = () => ({ type: types.LOGOUT });
