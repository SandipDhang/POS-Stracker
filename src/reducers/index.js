import { combineReducers } from "redux";

import StockReducer from "./StockReducers";
import AccountReducer from "./AccountReducers";

const rootReducer = combineReducers({
  Stocks: StockReducer,
  User: AccountReducer,
});

export default rootReducer;
