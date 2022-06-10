import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

// thunk which will help us
export const loginAPI = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("https://reqres.in/api/login", {
      email: data.email,
      password: data.password,
    })
    .then((r) => {
      dispatch({ type: LOGIN_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const logoutAPI = () => ({ type: LOGOUT });
