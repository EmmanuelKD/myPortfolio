import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {},
  main: {
    height: "90vh",
    display: "grid",
    gridTemplateRows: "65% 5% 30%",
    gridTemplateColumns: "50% 50%",
  },
  inputMain: {
    width: "50%",
    height: "70%",
    margin: "0 auto",
    
  },
  inputRoot: {
    border: "2px solid black",
    gridRow: "1/2",
    gridColumn: "1/3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },otherOptionsGit:{
    gridRow: "3/4",
    gridColumn: "1/2", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },otherOptionsStack:{
    gridRow: "3/4",
    gridColumn: "2/3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },stackCard:{
      width:"50%",
      height:"50%",
      backgroundColor:"#f0f"
  },gitCard:{
    width:"50%",
    height:"50%",
    backgroundColor:"#0ff"
  },submitButton:{
    gridRow: "2/3",
    gridColumn: "2/3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },submitButtonMain:{

  }
}));

export default function ContactMe() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.inputRoot}>
          <input 
          type={"text"}
          className={classes.inputMain}></input>
        </div>
        <div className={classes.submitButton}>
            <button
            type={"submit"}
            className={classes.submitButtonMain}>send</button>
        </div>
        <div className={classes.otherOptionsGit}>
            <div className={classes.gitCard} ></div>
        </div>
        <div className={classes.otherOptionsStack}>
            <div  className={classes.stackCard}></div>
        </div>
      </div>
    </div>
  );
}
