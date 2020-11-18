import React from "react";
import "./App.css";
import AppBar from "./view/components/AppBarComponent";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeContextConsumer } from "./view/theme/themeContext";
import BottomBar from "./view/components/bottomBar/myBottomBar";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Dashboard from "./view/pages/Dashboard";
import Body from "./view/components/myAppBar/routs/body";
import Path from "./view/components/myAppBar/routs/path";
import Skills from "./view/pages/skills";
import FlipCard from "./view/components/skills/flipcard";
import { base } from "./firebaseReBase";
import MyProjects from "./view/pages/myProjects";
import Bobble from "./bobble/bobble"
import Contact from "./view/pages/ContactPages"
require("dotenv").config();


function App() {

  let bobble=new Bobble();
  bobble.generate();
  // bobble.stopGenerating();
  return (
    <ThemeContextConsumer>
      {(value) => {
        let { isLightTheme, currentTheme, LightTheme } = value;

        return (
          <MuiThemeProvider
            theme={createMuiTheme(isLightTheme ? currentTheme : LightTheme)}
          >
            <Body >
              {/* <Skills/> */}
              {/* <Dashboard/> */}
              <Path
                AppBar={AppBar}
                Skills={Skills}
                Dashboard={Dashboard}
                BottomBar={BottomBar}
                MyProjects={MyProjects}
                Contact={Contact}
              />

              {/* <FlipCard/> */}
            </Body>
          </MuiThemeProvider>
        );
      }}
    </ThemeContextConsumer>
  );
}

export default App;
