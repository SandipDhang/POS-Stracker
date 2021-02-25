import Axios from "axios";

const BaseAPI = "http://localhost:8900";

export const addUser = (user) => {
  console.log(user, "api");
  const headers = {
    "Content-Type": "application/json",
  };
  return Axios.post(`${BaseAPI}/adUser`, user, { headers });
};
