import React, { useState ,useContext} from "react";
import dayIcon from "../../assets/componentAsset/day.png";
import nightIcon from "../../assets/componentAsset/night.png";
import { fade, makeStyles } from "@material-ui/core/styles";
// import  {ThemeContextConsumer} from '../theme/themeContext'
import {ThemeContext} from "../../reactContext";

const borderWidth = 2;
const switchHeight = 12 - borderWidth;
const switchWidth = 36 - borderWidth;
const padding = 10;


const useStyle = makeStyles((theme) => ({
  root: {
  
  },
  switchMain: {
    border: `${borderWidth}px solid ${theme.palette.secondary.light}`,
   // padding: 5,
    borderRadius: 16 / 2,

    width: switchWidth,
    height: switchHeight,
  },
  switchNub: {
    transform: "translateX(-3px)", 
    transition: "transform 0.3s ease",
   
    borderRadius: "100%",
    backgroundColor: "#ffffff",
  },

  switchNubChecked: {    
    transition: "transform 0.3s ease",
    transform: "translateX(21px)",  
    borderRadius: "100%",
 
  },
  nubMain: {
    borderRadius: 16 / 2,
    backgroundColor: "#000000",
    alignItems: "center",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  nubMainClicked: {
    backgroundColor: "#ffffff",
    borderRadius: 16 / 2,
    alignItems: "center",
    display: "flex",
    width: "100%",
    height: "100%",
  },

  nubDayNight:{
    width:20,
    height:20,
  }

}));

export default function MyAppBar() {
  const themeContext=useContext(ThemeContext);

  const classes = useStyle();
  const [nubClick, setNubClick] = useState(null);

  React.useEffect(()=>{
    if(nubClick===null)
    setNubClick(themeContext.isLightTheme)
  },[nubClick])
  function handleNubClick() {
    setNubClick(!nubClick);
     themeContext.switchTheme();
  }
  return (
    <div className={classes.root}>
      <div className={classes.switchMain} onClick={handleNubClick}>
        <div className={nubClick ?classes.nubMain:classes.nubMainClicked}>
      
          <div
            className={nubClick ? classes.switchNub : classes.switchNubChecked}
          >
       <div className={classes.nubDayNight}>
              {" "}
              <img className={classes.nubDayNight} src={nubClick?dayIcon:nightIcon}></img>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}
