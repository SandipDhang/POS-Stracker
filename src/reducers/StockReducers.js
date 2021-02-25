const initialState = {};

const StockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_STOCKS":
      return action.payload.data;
    default:
      return state;
  }
};

export default StockReducer;
