
// import { createMuiTheme } from "@material-ui/core/styles";

const DarkTheme={
  typography: {
    useNextVariations: true,
  },
  palette: {
    type: "dark",
    primary: {
      dark: "#00646B",
      main: "#000000",
      light: "#707070",
      contrastText: "#ffffff",
    },
    secondary: {
     light: "#ffffff",//* not required
      main: "#00EEFF",
      dark: "#00646B", //* not required
      contrastText: "#000000",
    },
    Error: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
    },
  },
};

const LightTheme = {
  typography: {
    useNextVariations: true,
  },
  palette: {
    type: "light",
    primary: {
      light: "#707070",
      main: "#ffffff",
      dark: "#00646B",
      contrastText: "#000000",
    },

    secondary: {
      light: "#00646B",
      main: "#00EEFF",
      dark: "#707070",
      contrastText: "#ffffff",
    },
    Error: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
    },
  },
};

export { DarkTheme, LightTheme };
