import Axios from "axios";

const StocksAPI = "https://jsonplaceholder.typicode.com/users";

export const getAllStocks = () => {
  return Axios.get(StocksAPI);
};
