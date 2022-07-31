import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "./data";

const BASE_URL = "http://192.168.2.43:5000";

console.log("TOKEN", TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

axios.defaults.baseURL = "http://192.168.2.43:5000";

const userRequest = axios.create();

userRequest.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default userRequest;
