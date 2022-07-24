import axios from "axios";
import { REACT_APP_PORT } from "@env";

// const BASE_URL = REACT_APP_PORT;
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGM5MDE1ZWVmMzQ3ZmYzMjVhZDBlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODYzMzc3MiwiZXhwIjoxNjU5MjM4NTcyfQ.0xMv6YdVux7444RjiWfUDlZiRgIqqgv1O5RuJD2IEXk";
export const publicRequest = axios.create({
  baseURL: REACT_APP_PORT,
});
console.log(REACT_APP_PORT)
export const userRequest = axios.create({
  baseURL: `${REACT_APP_PORT}`,
  headers: {
    "Authorization": `${TOKEN}`,
  },
});
