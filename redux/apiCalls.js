// import { loginFailure, loginStart, loginSuccess, singupFailure, singupStart, singupSuccess } from "./userRedux";

import { userRequest } from "../requestMethods";
import {
  addHatFailure,
  addHatStart,
  addHatSuccess,
  getHatFailure,
  getHatStart,
  getHatSuccess,
} from "./hatRedux";
import getHatByIdService from "../services/getHatByIdService"

// export const login = async (dispatch, user) => {
//   dispatch(loginStart());
//   try {
//     const res = await publicRequest.post("/auth/login", user);
//     dispatch(loginSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };

// export const register = async (dispatch, user) => {
//   dispatch(singupStart());
//   try {
//     const res = await publicRequest.post("/auth/register", user);
//     dispatch(singupSuccess(res.data));
//   } catch (err) {
//     dispatch(singupFailure());
//   }
// };

export const getHats = async (dispatch) => {
  dispatch(getHatStart());
  try {
    console.log("user: ", userRequest.get("/api/hat"));
    const res = await userRequest.get("/api/hat");
    console.log("--------");
    dispatch(getHatSuccess(res.data));
  } catch (err) {
    console.log("err", err);
    dispatch(getHatFailure());
  }
};

export const getHatById = async (id) => {
  try {
    const res = await getHatByIdService(id);
    console.log("getHatById: ", res.data);
  } catch (err) {
    console.log(err);
  }
};
