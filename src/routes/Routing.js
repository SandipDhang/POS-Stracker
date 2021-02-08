// Default React imports
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Import Components
import Home from "../views/Home/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
};

export default Routing;
