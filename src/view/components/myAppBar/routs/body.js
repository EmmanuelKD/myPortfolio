import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyle = makeStyles((theme) => ({
  root: {
    
    height:"auto",
    padding: 0,
    margin: 0, 
    backgroundColor:theme.palette.type==="light"? theme.palette.primary.main:theme.palette.primary.light,
  },
}));

export default function Routs(props) {
  const classes = useStyle();
  return <div className={classes.root}>{props.children}</div>;
}
