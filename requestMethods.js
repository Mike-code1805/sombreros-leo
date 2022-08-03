import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PORT__DATA } from '@env'

const BASE_URL = PORT__DATA;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

axios.defaults.baseURL = PORT__DATA;

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
