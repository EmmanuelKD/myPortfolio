import React,{Component} from "react";
import { ThemeContext } from "../../reactContext";
import { DarkTheme, LightTheme } from "./theme";

const ThemeContextConsumer = ThemeContext.Consumer;

class ThemeContextProvider extends Component {
  constructor() {
    super();

    this.state = {
      currentTheme: DarkTheme,
      LightTheme:LightTheme,
      isLightTheme: false
    };

 
}


  switchTheme = () => {
    if (this.state.isLightTheme) {
      this.setState({ isLightTheme: false }, () => {});
    } else {
      this.setState({isLightTheme:true},() => {});
    }
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{
            isLightTheme:this.state.isLightTheme,
          themeState: this.state,
          currentTheme: this.state.currentTheme,
          LightTheme:this.state.LightTheme,
          switchTheme: this.switchTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export {ThemeContextConsumer,ThemeContextProvider};
