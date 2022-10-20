import axios from "axios";
import * as types from "./app.actionTypes";

 const getDogsAPI = () => (dispatch) => {
  dispatch({ type: types.GET_APP_LOADING });
  axios
    .get("http://localhost:8080/dogs")
    .then((r) => {
      dispatch({ type: types.GET_APP_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_APP_ERROR });
    });
};
  
const createDog = (payload) => (dispatch) => {
    dispatch({ type: types.CREATE_DOG_REQUEST });
    return axios
      .post("http://localhost:8080/dogs", payload)
      .then((r) => {
        dispatch({ type: types.CREATE_DOG_REQUEST, payload: r.data });
        return types.CREATE_DOG_SUCCESS;
      })
      .catch((e) => {
        dispatch({ type: types.CREATE_DOG_FAILURE, payload: e });
        return types.CREATE_DOG_FAILURE;
      });
  };

  export {createDog,getDogsAPI}