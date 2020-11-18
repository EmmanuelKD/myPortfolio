import { createMuiTheme } from "@material-ui/core/styles";

const dartTheme = createMuiTheme({
  typography: {
    useNextVariations: true,
  },
  palette: {
    type: "light",
    primary: {
      light: "#3DB5A9",
      main: "#ffffff ",
      dark: "#00857a",
      contrastText: "#000000",
      complementary: "#b53d49",
    },
    secondary: {
      // main: "#000000",
      light: "#000000",
      // dark:"#000000",
      // contrastText: "#000000",
      // complementary: "#120800",
    },
    Error: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
    },
  },
});

const lightTheme = createMuiTheme({
  typography: {
    useNextVariations: true,
  },
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
      light: "#707070",
      dark:"#00646B",
      contrastText: "#000000",
      complementary: "#120800",
    },
    secondary: {
      light: "#75e8db",
      // main: "#75e8db",
      // dark: "#75e8db",
      // contrastText: "#000000",
      // complementary: "#b53d49",
    },
    Error: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
    },
  },
});

export {dartTheme, lightTheme };
