import * as actionTypes from "../actions/Accounts/action.types";

const initialState = {};

const AccountReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default AccountReducers;
