import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import rgbConverter from "../../controllers/hexToRgb"
const padding = 37;


const useStyle = makeStyles((theme) => {

    const cardColorWithOpacity = rgbConverter(
      theme.palette.type == "light"
        ? theme.palette.primary.dark
        : theme.palette.primary.main
    );
    return {        
      skillsCard: {
        cursor: "pointer",
        borderRadius: "3px",
        width: "141px",
        height: "196px",
        boxShadow: `0px 10px 6px 0px rgba(${cardColorWithOpacity.r},${cardColorWithOpacity.g},${cardColorWithOpacity.b},.16)`,
        marginLeft: "50px",
        marginRight: "50px",
        marginBottom: "62px",
        marginTop: "25px",
        [theme.breakpoints.down("sm")]: {
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "50px",
          marginTop: "13px",
          width: "129px",
          height: "193px",
        },
        textAlign: "center",
        alignContent: "center",
      },
      image: {
        marginTop: `${padding}px`,
        width: "104px",
        height: "126px",
  
        [theme.breakpoints.down("sm")]: {
          width: "94px",
          height: "122px",
        },
      }
    };
  });

export default function CardComponent(props) {
    const classes = useStyle();
  
    return (
      <div className={classes.skillsCard} onClick={(e)=>{
        props.setSelectedSkill(props.skills);
        props.onClick(e);
        }}>
        <img src={props.skills.image} className={classes.image}></img>
        <div>more</div>
      </div>
    );
  }