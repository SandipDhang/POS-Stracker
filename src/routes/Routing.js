// Default React imports
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Import Components
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";

const Routing = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default Routing;
