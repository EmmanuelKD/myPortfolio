import React,{Component} from "react";
import { ThemeContext } from "../../reactContext";
import { DarkTheme, LightTheme } from "./theme";

const ThemeContextConsumer = ThemeContext.Consumer;

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DarkTheme: DarkTheme,
      LightTheme:LightTheme,
      isLightTheme: null
    };

 
}

componentDidMount(){
  const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20
if(this.state.isLightTheme===null)
if(isDayTime){
  this.setState({isLightTheme:false})
}else{
  this.setState({isLightTheme:true})

}

}

  switchTheme = () => {
      this.setState({ isLightTheme: !this.state.isLightTheme }, () => {});
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{
            isLightTheme:this.state.isLightTheme,
          themeState: this.state,
          DarkTheme: this.state.DarkTheme,
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
