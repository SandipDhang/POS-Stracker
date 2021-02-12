import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
      secondary: "#424242",
    },
    secondary: {
      main: "#fafafa",
    },
    error: {
      main: "#dd2c00",
    },
    success: {
      main: "#64dd17",
    },
    background: {
      default: "#000",
    },
  },
});

export default theme;
