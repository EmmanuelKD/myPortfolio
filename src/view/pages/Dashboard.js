import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { profileImage } from "../../assets/assetGetter/asset";
import { AboutMe } from "../../modules/AboutMe";
import rgbConverter from "../../controllers/hexToRgb";
const useStyle = makeStyles((theme) => {
  const cardColorWithOpacity = rgbConverter(
    theme.palette.type ==="light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light
  );

  return {
    root: {},
    body: {
      marginLeft: "166px",
      marginRight: "166px",
      marginBottom: "26px",
      marginTop: "26px",

      [theme.breakpoints.down("sm")]: {
        marginLeft: "8px",
        marginRight: "8px",
        marginTop: "13px",
        marginBottom: "13px",
      },
    },
    profImage: {
      boxShadow: `0px 10px 6px 0px rgba(${cardColorWithOpacity.r},${cardColorWithOpacity.g},${cardColorWithOpacity.b},.26)`,

      gridColumn: "1/2",
      gridRow: "1/2",
      transition: "1s",
      cursor: "pointer",
      width: "169px",
      height: "186px",
      border: `5px solid ${theme.palette.secondary.main}`,
      borderRadius: "15px",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
      "&:hover": {
        boxShadow: `2px 4px 10% 10% ${theme.palette.primary.light}`,
        transform: "rotate(25deg)",
        transition: "1s",
        [theme.breakpoints.down("sm")]: {
          transform: "scale(.5,.5) rotate(0deg)",
        },
      },
    },
    content: {
      borderRadius: "9px",
      paddingTop: "59px",
      paddingBottom: "59px",
      display: "grid",
      gridTemplateColumn: "50% 50%",
      paddingLeft: "130px",
      paddingRight: "130px",
      boxShadow: `0px 10px 6px 0px rgba(${cardColorWithOpacity.r},${cardColorWithOpacity.g},${cardColorWithOpacity.b},.16)`,
      backgroundColor: `rgba(255,255,255,.66)`,
      WebkitFilter: "brightness(15px) opacity(85%) blur(6px)",
      filter: "brightness(15px) opacity(85%) blur(6px)",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingTop: "13px",
        paddingBottom: "13px",
      },
    },

    aboutMe: {
      gridRow: "1/2",
      gridColumn: "2/3",
      marginTop: 10,
      textAlign: "right",

      textJustify: "inter-character",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        // alignContent:"center",
        gridRow: "2/3",
        gridColumn: "1/3",
      },
    },
    education: {
      gridRow: "3/4",
      gridColumn: "1/3",
      marginTop: 10,
      textAlign: "right",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        gridRow: "3/4",
        gridColumn: "1/3",
      },
    },
    workingExperience: {
      gridRow: "4/5",
      gridColumn: "1/3",
      marginTop: 10,

      [theme.breakpoints.down("sm")]: {
        gridRow: "4/5",
        gridColumn: "1/3",
      },
    },
    hobbies: {
      gridRow: "6/7",
      gridColumn: "1/3",
      marginTop: 10,
      textAlign: "right",
      [theme.breakpoints.down("sm")]: {
        gridRow: "5/6",
        gridColumn: "1/3",
      },
    },
    morePersonal: {
      gridRow: "7/8",
      gridColumn: "1/3",
      textAlign: "center",
      marginTop: 10,
      [theme.breakpoints.down("sm")]: {
        gridRow: "6/7",
        gridColumn: "1/3",
      },
    },
    myInspiration: {
      gridRow: "8/9",
      gridColumn: "1/3",

      marginTop: 10,
      [theme.breakpoints.down("sm")]: {
        gridRow: "7/8",
        gridColumn: "1/3",
      },
    },
    meAsAPerson: {
      gridRow: "9/10",
      gridColumn: "1/3",
      textAlign: "right",
      marginTop: 10,
      [theme.breakpoints.down("sm")]: {
        gridRow: "8/9",
        gridColumn: "1/3",
      },
    },
    buttonSkills: {
      borderRadius: "100%",
      fontSize: 15,
      color: theme.palette.primary.contrastText,
      paddingTop: 12,
      paddingBottom: 12,
      fontWeight: "bold",
      paddingLeft: 3,
      paddingRight: 3,
      border: `3px solid ${theme.palette.primary.light}`,
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        color: "#fff",
      },
    },
    buttonSkillsDiv: {
      flexDirection: "row-reverse",
      gridRow: "10/11",
      gridColumn: "2/3",

      display: "flex",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
});

export default function Dashboard() {
  const theme = useTheme();
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.content}>
          <div className={classes.profImage}>
            <img src={profileImage}></img>
          </div>

          <div className={classes.aboutMe}>
            <p>{AboutMe.aboutMe}</p>
          </div>

          <div className={classes.education}>
            <p>{AboutMe.education}</p>
          </div>

          <div className={classes.workingExperience}>
            <p>{AboutMe.workingExperience}</p>
          </div>
          <div className={classes.morePersonal}> more personal</div>
          <div className={classes.hobbies}>
            <p>{AboutMe.hobbies}</p>
          </div>

          <div className={classes.myInspiration}>
            <p>{AboutMe.myInspiration}</p>
          </div>

          <div className={classes.meAsAPerson}>
            <p>{AboutMe.meAsAPerson}</p>
          </div>
          <div className={classes.buttonSkillsDiv}>
            <div className={classes.buttonSkills}>Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
}
