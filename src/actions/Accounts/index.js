import * as ActionTypes from "./action.types";
export const addUser = (data) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: data,
  };
};

export const newUser = (data) => {
  return {
    type: ActionTypes.NEW_USER,
    payload: data,
  };
};
