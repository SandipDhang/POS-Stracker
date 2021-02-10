import * as ActionTypes from "./action.types";
export const getAllStocks = () => {
  return {
    type: ActionTypes.GET_ALL_STOCKS,
  };
};

export const fetchAllStocks = () => {
  return {
    type: ActionTypes.FETCH_ALL_STOCKS,
  };
};
