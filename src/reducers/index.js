import { combineReducers } from "redux";

import StockReducer from "./StockReducers";

const rootReducer = combineReducers({
  Stocks: StockReducer,
});

export default rootReducer;
