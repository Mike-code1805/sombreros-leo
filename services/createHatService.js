import { userRequest } from "../requestMethods";

const createHatService = async (hat) => {
  try {
    await userRequest.post(`/api/hat/`, hat);
  } catch (error) {
    console.log(error);
  }
};

export default createHatService;
