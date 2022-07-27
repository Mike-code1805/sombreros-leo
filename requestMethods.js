import axios from "axios";

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
  baseURL: "http://192.168.2.74:5000",
});
console.log("http://192.168.2.43:5000")
export const userRequest = axios.create({
  baseURL: "http://192.168.2.43:5000",
  headers: {
    Authorization: `${TOKEN}`,
  },
});
