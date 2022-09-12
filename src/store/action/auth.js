import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_USER_LOADED,
  AUTH_USER_ERROR,
  AUTH_USER_LOGOUT,
  PROFILE_CLEAR,
} from "../type";
import { alertSet } from "./alert";
import setAuthTokens from "../../util/auth";
import { authuserapi, loginapi, registerapi } from "../../service";

export const authUserLoaded = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthTokens(localStorage.token);
  }
  try {
    const res = await axios.get(authuserapi);
    dispatch({ type: AUTH_USER_LOADED, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_USER_ERROR });
  }
};
export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(registerapi, formData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(authUserLoaded());
  } catch (err) {
    const errors = err.response.data.errors;

    if (!errors) {
      dispatch(alertSet("Unable to connect. Please try again"));
    } else {
      if (errors) {
        errors.forEach((error) => dispatch(alertSet(error.msg, "error")));
      }
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(loginapi, formData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(authUserLoaded());
  } catch (error) {
    const errors = error.response.data.errros;
    if (!errors) {
      dispatch(alertSet("Unable to connect. Please try again", "warning"));
    } else {
      if (errors) {
        errors.forEach((error) => dispatch(alertSet(error.msg, "danger")));
      }
    }
    dispatch({ type: LOGIN_FAIL });
  }
};
export const logout = () => {
  return (dispatch) => {
    // Your code here...
    // dispatch({ type: PROFILE_CLEAR });
    dispatch({ type: AUTH_USER_LOGOUT });
  };
};
