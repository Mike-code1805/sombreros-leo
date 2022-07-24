// import { loginFailure, loginStart, loginSuccess, singupFailure, singupStart, singupSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
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
    console.log(userRequest.get("/api/hat"))
    const res = await userRequest.get("/api/hat");
    console.log("--------")
    dispatch(getHatSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(getHatFailure());
  }
};