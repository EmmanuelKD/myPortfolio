import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {},
  main: {
    height: "90vh",
    display: "grid",
    gridTemplateRows: "65% 5% 30%",
    gridTemplateColumns: "50% 50%",
    [theme.breakpoints.down("sm")]: {
      gridTemplateRows: "55% 15% 15% 15%",
      gridTemplateColumns: "100%",
    },
  },
  inputMain: {
    width: "50%",
    height: "70%",
    margin: "0 auto",

  },
  inputRoot: {
    // border: "2px solid black",
    gridRow: "1/2",
    gridColumn: "1/3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  otherOptionsGit: {
    gridRow: "3/4",
    gridColumn: "1/2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      gridRow: "3/4",
      gridColumn: "1/2",
    },
  }, otherOptionsStack: {
    gridRow: "3/4",
    gridColumn: "2/3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      gridRow: "4/5",
      gridColumn: "1/2",
    },
  }, stackCard: {
    width: "50%",
    height: "50%",
    backgroundColor: "#f0f"
    , borderRadius: "5px"
    , cursor: "pointer"
  }, submitButton: {
    gridRow: "2/3",
    gridColumn: "2/3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      gridRow: "2/3",
      gridColumn: "1/2",
    },
  }, submitButtonMain: {
    width: "70px",
    height: "40px",
    cursor: "pointer"
  }
}));

export default function ContactMe() {
  const classes = useStyle();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.inputRoot}>
          {/* <input 

          type={"text"}
          className={classes.inputMain}></input> */}
          <textarea rows={isSmallScreen?"10":"15"} cols={isSmallScreen?"40":"80"} name="message" >
          </textarea>
        </div>
        <div className={classes.submitButton}>
          <button
            type={"submit"}
            className={classes.submitButtonMain}>send</button>
        </div>
        <div className={classes.otherOptionsGit}>
          <LongCircularButtonWithImage />
        </div>
        <div className={classes.otherOptionsStack}>
          <LongCircularButtonWithImage />
        </div>
      </div>
    </div>
  );
}


function LongCircularButtonWithImage({ onClick, image, text }) {
  const classes = useStyle();
  return <div className={classes.stackCard}>

  </div>

}