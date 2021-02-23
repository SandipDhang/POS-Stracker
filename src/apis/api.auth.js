import Axios from "axios";

const BaseAPI = "localhost://8900";

export const addUser = () => {
  return Axios.post(`${BaseAPI}/addUser`);
};
