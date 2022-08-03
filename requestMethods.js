import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://sombreros-leo-backend.herokuapp.com/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

axios.defaults.baseURL = "https://sombreros-leo-backend.herokuapp.com/";

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
