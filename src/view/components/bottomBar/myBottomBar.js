import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { bottomBarBG } from "../../../assets/assetGetter/asset";
import { Link } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  body: {
    padding: 0,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition: "bottom",
    backgroundClip: "padding-box",

    height: "250px",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.primary.main
        : theme.palette.primary.light,
    backgroundImage: `url(${bottomBarBG})`,
    //*this break point id for all sizes down sm
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-around",
      width: "100%",
      height: "150px",
      backgroundImage: `url(${bottomBarBG})`,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100px",
      backgroundImage: `url(${bottomBarBG})`,
    },
    display: "grid",
    gridTemplateRows: "80% 20%",
    gridTemplateColumns: "25% 25% 25% 25%",
  },
  links: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    gridRow: "1/2",
    gridColumn: "1/2",
    display: "flex",
    alignItems: "flex-end",
    color: "#ffffff",
  },
  designBy: {
    color: "#ffffff",
    fontSize:"10px",
    gridRow: "1/2",
    gridColumn: "2/3",
    display: "flex",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
     
    },
  },myName:{
    color:"#00EEFF",
    fontSize:"20px",
    [theme.breakpoints.down("sm")]: {
      fontSize:"10px",
    },
  },
  copyWrite: {
    
    gridRow: "2/3",
    gridColumn: "1/5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    opacity: 0.7,
    [theme.breakpoints.down("sm")]: {
     
    },
  },
  moreLinks: {
    gridRow: "2/3",
    gridColumn: "4/5",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "57px",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      textWrap: "no-wrap",
      paddingRight: "0px",
      fontSize: "10px",
    },
  },
  moreLinksLink: {
    color: "#ffffff",
    [theme.breakpoints.down("xs")]: {},
  },
  listLink: {
    color: "#ffffff",
  },
}));
export default function BottomBar() {
  const classes = useStyle();

  const links = [
    { path: "/", name: "home" },
    { path: "/skills", name: "skills" },
    { path: "/projects", name: "works done" },
    { path: "/contact", name: "contact me" },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.links}>
          <ul>
            {" "}
            {links.map((val, index) => {
              return (
                <Link to={val.path} className={classes.listLink} key={index}>
                  <li>{val.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={classes.designBy}>
          <div >
            designed by <span className={classes.myName}> Emmanuel Kofi Danquah</span>
          </div>
        </div>
        <div className={classes.copyWrite}>&copy; zaire.co</div>
        <div className={classes.moreLinks}>
          <Link to="/" className={classes.moreLinksLink}>My Other Sites</Link>
        </div>
      </div>
    </div>
  );
}
