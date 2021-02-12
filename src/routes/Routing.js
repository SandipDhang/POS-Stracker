// Default React imports
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Material UI integration imports
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
// Material UI Theme
import theme from "../theme";

// Import Components
import Home from "../views/Home/Home";

const Routing = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routing;
