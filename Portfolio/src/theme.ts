import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#6491ff",
    },
    secondary: {
      main: "#b5d0ff",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
  },
});

theme = responsiveFontSizes(theme);
export default theme;
