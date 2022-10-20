import axios from "axios";
import * as types from "./app.actionTypes";
  
  const initalState = {
    getDogs: {
      loading: false,
      error: false,
    },
    data: [],
  };
   export const appReducer = (state = initalState, { type, payload }) => {
    switch (type) {
      case types.GET_APP_LOADING: {
        return {
          ...state,
          getDogs: {
            ...state.getDogs,
            loading: true,
            error: false,
          },
        };
      }
      case types.GET_APP_SUCCESS: {
        return {
          ...state,
          getFegetDogseds: {
            ...state.getDogs,
            loading: false,
            error: false,
          },
          data: payload,
        };
      }
      case types.GET_APP_ERROR: {
        return {
          ...state,
          getDogs: {
            ...state.getDogs,
            loading: false,
            error: true,
          },
        };
      }
      default: {
        return state;
      }
    }
  };

