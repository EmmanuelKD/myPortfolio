import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { DrawerContextProvider } from "./view/components/myAppBar/myAppBarContext";
import { ProjectsFromFirebaseContextProvider } from "./controllers/projectInFirebaseContext";
import { ThemeContextProvider } from "./view/theme/themeContext";

ReactDOM.render(
 
  <React.StrictMode>
    <ProjectsFromFirebaseContextProvider>
      <ThemeContextProvider>
        <DrawerContextProvider>
          <App />
        </DrawerContextProvider>
      </ThemeContextProvider>
    </ProjectsFromFirebaseContextProvider>
  </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
