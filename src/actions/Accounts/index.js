import * as ActionTypes from "./action.types";
export const fetchUser = (data) => {
  return {
    type: ActionTypes.FETCH_USER,
    payload: data,
  };
};

export const fetchUserInfo = (data) => {
  return {
    type: ActionTypes.FETCH_USER_INFO,
    payload: data,
  };
};
