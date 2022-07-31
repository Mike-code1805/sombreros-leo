import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://192.168.43.56:5000";

const getData = async (key) => {
  try {
    const token = await AsyncStorage.getItem(key);
    if (token !== null) {
      return token;
    }
  } catch (error) {
    console.log(error);
  }
};

const token = getData("token")
  .then((res) => {
    return res;
  })
  .catch((err) => {
    console.log(err);
  });

setTimeout(() => {
  console.log("token -> ", token._W);
}, 1000);

const TOKEN = token._W;
//token es un Promise
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
// console.log(BASE_URL);
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${TOKEN}`,
  },
});
