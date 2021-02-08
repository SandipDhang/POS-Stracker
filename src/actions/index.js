export const getAllStocks = () => {
  return {
    type: "GET_ALL_STOCKS",
    payload: [
      { id: 1, name: "Ice Cream" },
      { id: 2, name: "Pizza" },
      { id: 3, name: "Burger" },
    ],
  };
};
