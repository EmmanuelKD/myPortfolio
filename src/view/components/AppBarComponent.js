import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useState, useContext } from "react";
// import MenuIcon from "./componentAsset/menu_left.svg";
// import MenuIconDark from "./componentAsset/menu-left-dark.svg";
import { MenuIcon, MenuIconDark } from "../../assets/assetGetter/asset";
import { AntSwitch } from "./appBarSwitch";
import MySwitch from "./mySwitchButton";
import MyAppBar from "./myAppDrawer";
import { DrawerContext } from "../../reactContext";
import { useHistory, Link } from "react-router-dom";

const appBarHeight = 54;
const useStyles = makeStyles((theme) => ({
  imageIcon: {
    width: 19,
    height: 19,
    flex: 1,
    left: 0,
    backgroundRepeat: "no-repeat",
    background: `url(${
      theme.palette.type === "dark" ? MenuIconDark : MenuIcon
    })`,
  },
  grow: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    height: `${appBarHeight}px`,
  },
  menuButton: {},

  inSelection: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "start",
    alignItems: "center",
    right: "100%",
  },
  radioButtonRoot: {
cursor:"pointer",
marginLeft:"20px"
  },
  radioButtonMain: {
    width:"20px",
    height:"20px",
    border:`2px solid ${theme.palette.primary.light}`,
    borderRadius:"50%",
    display:"flex",
    alignItems:"center",
 justifyContent:"center"
  
  },
  radioButtonNubOn: {  
    borderRadius:"50%",
    transition:"all 1s ease",
    // width:"15px",
    // height:"15px",
    padding:"8px",
    backgroundColor:theme.palette.secondary.light,

  },
  radioButtonNubOff: {
    display:"none"
  },
  sectionMobile: {
    flexDirection: "row-reverse",
    flex: 1,
    display: "flex",
  },
  drawerStyle: {
    backgroundColor: theme.palette.primary.main,
  },
  ListComponentStyle: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px",
    padding: "10px 10px 10px 10px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: "15px",
    cursor: "pointer",
    // transition: "500ms",
    boxShadow: ` 0px 4px 10px 0px ${theme.palette.primary.light}`,

    "&:active": {
      backgroundColor: "#f00000",
      color: theme.palette.text.secondary,
    },
    "&:hover": {
      transition: "500ms",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
    },
  },
  activeStyle: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px",
    padding: "10px 10px 10px 10px",
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.contrastText,
    fontSize: "15px",
    cursor: "pointer",

    boxShadow: " -5px 3px 8px 5px #444444",

    "&:hover": {
      transition: "500ms",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
    },
  },
}));

export default function PrimarySearchAppBar() {
  let history = useHistory();
  const drawerContext = useContext(DrawerContext);
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const [radioButtonValue, setRadioButtonValue] = React.useState("female");

  const handleRadioButtonChange = (event) => {
    setRadioButtonValue(event.target.value);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [drawerOpen, setOpenDrawer] = useState(false);
  const [radioState, setRadioState] = useState(true);

  function toggleRadioState() {
    setRadioState(!radioState);
  }

  function setDrawer() {
    setOpenDrawer(false);
  }
  function handleDrawer() {
    setOpenDrawer(!drawerOpen);
    console.log(drawerOpen);
  }
  function go() {
    console.log(history);
  }

  const drawerComponentData = [
    {
      text: "About Me",
      onClick: (n) => {
        history.push("/");
      },
    },
    {
      text: "Skills",
      onClick: (n) => {
        history.push("/skills");
      },
    },
    {
      text: "Projects",
      onClick: (n) => {
        history.push("/Projects");
      },
    },
    {
      text: "Contact",
      onClick: (n) => {
        history.push("/contact");
      },
    },
  ];
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBarMain}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <svg src={MenuIcon} className={classes.imageIcon} />
          </IconButton>

          <div className={classes.sectionMobile}>
            <div className={classes.inSelection}>
              <MySwitch />

              <div className={classes.radioButtonRoot}
              onClick={toggleRadioState}>
                <div className={classes.radioButtonMain}>
                  <div
                    className={
                      radioState
                        ?classes.radioButtonNubOn 
                        : classes.radioButtonNubOff
                    }
                  >

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
        <MyAppBar
          setDrawer={setDrawer}
          activeColor={classes.activeStyle}
          className={classes.ListComponentStyle}
          ComponentSpacing={50}
          drawerState={drawerOpen}
          drawerChildren={drawerComponentData}
        />
      </AppBar>
    </div>
  );
}
