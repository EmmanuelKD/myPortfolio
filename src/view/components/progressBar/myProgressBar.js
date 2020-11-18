import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import rgbConverter from "../../../controllers/hexToRgb";

const useStyle = makeStyles((theme) => {
  const cardColorWithOpacity = rgbConverter(
    theme.palette.type == "light"
      ? theme.palette.primary.main
      : theme.palette.primary.main
  );
  const cardColorWithOpacity2 = rgbConverter(
    theme.palette.type == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.main
  );

  return {
    root: {},
    main: {
      [theme.breakpoints.down("sm")]:{
        width: "206px",
        height:"17px",
      },
      width: "376.44px",
      height: "30.98px",
      boxShadow: `0px 10px 6px 0px rgba(${cardColorWithOpacity2.r},${cardColorWithOpacity2.g},${cardColorWithOpacity2.b},.16)`,
      backgroundColor: `rgba(${cardColorWithOpacity.r},${cardColorWithOpacity.g},${cardColorWithOpacity.b},.66)`,
      borderRadius: "9px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    overlayProgress: {
      [theme.breakpoints.down("sm")]:{
        width: "206px",
        height:"17px",
      },
      borderTopLeftRadius: "9px",
      borderBottomLeftRadius: "9px",
      backgroundBlendMode: "screen",
      height: "30.98px",
      backgroundColor: theme.palette.type === "light"
      ?  theme.palette.secondary.main
      : theme.palette.secondary.main,
      // transform:"transition"
      transition: "all 1s ease",
    },
    overlayText: {},
  };
});

export default function MyProgressBar(props) {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div
          className={classes.overlayProgress}
          style={{ width: `${props.percent}%` }}
        ></div>
        <div className={classes.overlayText}>{props.strength}</div>
      </div>
    </div>
  );
}
