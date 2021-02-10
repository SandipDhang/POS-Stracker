const initialState = { stockList: [] };

const StockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_STOCKS":
      return action.payload;
    default:
      return state;
  }
};

export default StockReducer;
