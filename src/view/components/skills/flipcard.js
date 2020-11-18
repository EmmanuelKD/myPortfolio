import React, { useState, useEffect, useRef } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardComponent from "../cardComponent";
import { CPPBkImage } from "../../../assets/assetGetter/asset";
import rgbConverter from "../../../controllers/hexToRgb";
import MyProgressBar from "../progressBar/myProgressBar";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => {
  const cardColorWithOpacity = rgbConverter(
    theme.palette.type === "light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light
  );
  const cardColorWithOpacity2 = rgbConverter(
    theme.palette.type === "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.main
  );

  return {
    // cardContainerRoot: {
    //   gridColumn: "1/2",
    //   gridRow: "1/2",
    // },
    // cardContainerMain: {
    //   display: "flex",
    //   flexWrap: "wrap",
    // },
    // root: {
    //   width: "100%",
    //   height: "100%",
    // },
    // main: {
    //   display: "grid",
    //   gridTemplateRow: "1",
    //   gridTemplateColumn: "1",
    // },
    flipRoot: {
      position: "fixed",
      width: "100%",

      gridColumn: "1/2",
      gridRow: "1/2",
    },
    flipMain: {
      padding: "55px",
      boxShadow: `0px 10px 6px 0px rgba(${cardColorWithOpacity2.r},${cardColorWithOpacity2.g},${cardColorWithOpacity2.b},.16)`,
      backgroundColor: `rgba(${cardColorWithOpacity.r},${cardColorWithOpacity.g},${cardColorWithOpacity.b},.66)`,
      width: "843.65px",
      height: "400.95px", //* was 500.95
      margin: "auto",
      marginTop: "22px",
      marginBottom: "70px",
      borderRadius: "3px",
      WebkitFilter: "brightness(15px) opacity(85%) ",
      filter: "brightness(15px) opacity(85%)",   

      transition: "all 2s ease",
      translate: "rotate(360)",
      cursor: "pointer",
      transform: "scale(1,1)",
      display: "grid",
      gridTemplateColumns: "50% 50%",

      gridTemplateRows: "50% 10% 15% 15% 10%",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "50% 50%",
        gridTemplateRows: "30% 10% 10% 10% 15% 15% 10%",
        padding: "19px",
        width: "313px",
        height: "493px",
        margin: "auto",
        marginTop: "69px ",
        // gridTemplateColumns: "50% 50%",

        // gridTemplateRows: "50% 10% 15% 15% 10%",
      },
    },
    hide: {
      display: "none",
    },
    skillImg: {
      width: "186.81px",
      height: "222.35",
      gridRow: "1/2",
      gridColumn: "1/2",
      [theme.breakpoints.down("sm")]: {
        width: "102.5px",
        height: "122px",
      },
    },
    myBackground: {
      color: "#ffffff",

      width: "100%",
      height: "222.35px",

      [theme.breakpoints.down("sm")]: {
        width: "157px",
        height: "129px",
        overflowY: "scroll",
      },

      gridRow: "1/2",
      gridColumn: "2/3",
    },
    experience: {
      gridRow: "2/3",
      gridColumn: "1/2",
      // border: "2px solid #ff0",
      [theme.breakpoints.down("sm")]: {
        width: "71px",
        height: "43px",
      },
    },
    workingAgility: {
      gridRow: "3/4",
      gridColumn: "1/2",
      // border: "2px solid #f0f",
      [theme.breakpoints.down("sm")]: {
        gridRow: "3/4",
        gridColumn: "1/3",
      },
    },
    activeUsed: {
      gridRow: "3/4",
      gridColumn: "2/3",
      // border: "2px solid #f0f",
      [theme.breakpoints.down("sm")]: {
        gridRow: "4/5",
        gridColumn: "1/3",
      },
    },
    practiceProject: {
      gridRow: "4/5",
      gridColumn: "1/2",
      // border: "2px solid #ff0",
      [theme.breakpoints.down("sm")]: {
        gridRow: "5/6",
        gridColumn: "1/2",
      },
    },
    whenLastUsed: {
      gridRow: "4/5",
      gridColumn: "2/3",
      // border: "2px solid #ff0",
      [theme.breakpoints.down("sm")]: {
        gridRow: "6/7",
        gridColumn: "1/2",
      },
    },
    ProjectButton: {
      display: "flex",
      justifyContent: "flex-end",
      gridRow: "5/6",
      gridColumn: "2/3",
      // border: "2px solid #ff0",
      [theme.breakpoints.down("sm")]: {
        gridRow: "7/8",
        gridColumn: "2/3",
      },
    },
    button: {
      [theme.breakpoints.down("sm")]: {
        width: "68px",
        height: "33px",

        fontSize: "15px",
      },
      // color:"#f0f0f0",
      border: `5px solid ${
        theme.palette.type === "light"
          ? theme.palette.primary.dark
          : theme.palette.primary.main
      }`,
      width: "123.93px",
      height: "53.14px",
      // display:"flex",
      // alignContent:"right",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",

      borderRadius: "17px",
      boxShadow: `0px 10px 6px 0px rgba(${cardColorWithOpacity2.r},${cardColorWithOpacity2.g},${cardColorWithOpacity2.b},.16)`,
    },
    link: {
      textDecoration: "none",
      fontSize: "18px",
      color: theme.palette.primary.contrastText,
      fontWeight: "bold",
    },
  };
});

export default function FlipCardComponent(props) {
  useEffect(() => {}, [props]);
  const classes = useStyle();
  return (
    <div className={props.cardOpen ? classes.flipRoot : classes.hide}>
      <div ref={props.openCardRef} className={classes.flipMain}>
        <div className={classes.skillImg}>
          <img
            src={props.selectedObject.image}
            className={classes.skillImg}
          ></img>
        </div>
        <div className={classes.myBackground}>
          <div>{`how i have been learning ${props.selectedObject.skill}`}</div>
          {props.selectedObject.briefBackground}
        </div>
        <div className={classes.experience}></div>
        <div className={classes.workingAgility}>
          <div>how actively used</div>
          <MyProgressBar
            percent={30}
            strength={props.selectedObject.workingAgility.beginner}
          />
        </div>
        <div className={classes.activeUsed}>
          <div>Working Agility</div>
          <MyProgressBar
            percent={30}
            strength={props.selectedObject.workingAgility.beginner}
          />
        </div>
        <div className={classes.practiceProject}>
          <div>how actively used</div>
          <div>how actively used</div>
        </div>
        <div className={classes.whenLastUsed}>
          <div>how actively used</div>
          <div>how actively used</div>
        </div>
        <div className={classes.ProjectButton}>
          <Link to={"/project"} className={classes.link}>
            {" "}
            <div className={classes.button}>projects</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
