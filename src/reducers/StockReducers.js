const initialState = { stockList: [] };

const StockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_STOCKS":
      return action.payload;
    default:
      return state;
  }
};

export default StockReducer;
