// Default imports from React
import React from "react";
import ReactDOM from "react-dom";

// import Provider to Provide the store
import { Provider } from "react-redux";

// import Store
import Store from "./store";

//import Main ( Routing ) Component
import Routing from "./routes/Routing";

ReactDOM.render(
  <Provider store={Store}>
    <Routing />
  </Provider>,
  document.getElementById("root")
);
