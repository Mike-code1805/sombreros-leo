// import { loginFailure, loginStart, loginSuccess, singupFailure, singupStart, singupSuccess } from "./userRedux";

import { userRequest } from "../requestMethods";
import {
  getHatRecicleFailure,
  getHatRecicleStart,
  getHatRecicleSuccess,
} from "./hatRecicleRedux";
import { getHatFailure, getHatStart, getHatSuccess } from "./hatRedux";

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
    const res = await userRequest.get("/api/hat");
    dispatch(getHatSuccess(res.data));
  } catch (err) {
    dispatch(getHatFailure());
  }
};

export const getHatsRecicle = async (dispatch) => {
  dispatch(getHatRecicleStart());
  try {
    const res = await userRequest.get("/api/hatRecicle");
    dispatch(getHatRecicleSuccess(res.data));
  } catch (err) {
    dispatch(getHatRecicleFailure());
  }
};
