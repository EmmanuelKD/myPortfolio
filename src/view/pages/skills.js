import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useRef, useState, useEffect } from "react";
import { SkillsData } from "../../modules/AboutMe";
import CardComponent from "../components/cardComponent";
import FlipCardComponent from "../components/skills/flipcard";
import rgbConverter from "../../controllers/hexToRgb";
const useStyle = makeStyles((theme) => {
  return {
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

    content: {
      borderRadius: "9px",
      paddingTop: "59px",
      paddingBottom: "59px",
      display: "grid",
      gridTemplateColumn: "50% 50%",
      paddingLeft: "130px",
      paddingRight: "130px",
      // border: "2px solid black",

      [theme.breakpoints.down("sm")]: {
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingTop: "13px",
        paddingBottom: "13px",
      },
    },
    description: {
      marginLeft: "50px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "20px",
      },
    },
    title: {
      marginLeft: "50px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "20px",
      },
    },
    cardWrapper: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
    },
    heading: { marginLeft: 50 },
    //!====================================================================
    cardContainerRoot: {
      gridColumn: "1/2",
      gridRow: "1/2",
    },
    cardContainerMain: {
      display: "flex",
      flexWrap: "wrap",
    },
    root: {
      width: "100%",
      height: "100%",
    },
    main: {
      display: "grid",
      gridTemplateRows: "1fr",
      gridTemplateColumns: "1fr",
    },
  };
});

function Description(props) {
  return (
    <div className={props.classes.heading}>
      <div className={props.classes.title}>{props.title}</div>
      <div className={props.classes.description}>{props.description}</div>
    </div>
  );
}

//   <div className={classes.main}>
//   <div className={classes.rootMAin}>
//     <div className={classes.body}>
//       <div className={classes.content}>
//         <h2>programming</h2>
//         <div>
//           {" "}
//           <DisplaySkills classes={classes} />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// return <DisplaySkills classes={classes} />;
// }

export default function Skills() {
  const classes = useStyle();
  const initState = {
    skill: "",
    image: "",
    experience: "",
    workingAgility: {
      confident: "",
      beginner: "",
      professional: "",
    },
    RealWorldLink: "",
    practicesProject: "",
    howActivelyUsed: {
      once: "",
      perProject: "",
      always: "",
    },
    briefBackground: "",
    whenLastUsed: "",
  };
  const openCardRef = useRef();
  const [cardOpen, openCard] = useState(false);
  const [selectedObject, setSelectedObject] = useState(initState);

  // const theme = useTheme();

  async function setSelectedSkill(newSelectedObject) {
    return await new Promise((resolve) => {
      setSelectedObject(newSelectedObject);
      resolve();
    });
  }
  function clickCard(e) {
    let rect = openCardRef.current.getBoundingClientRect();

    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      openCard(!cardOpen);
    }
  }

  return (
    <div
      className={classes.root}
      onClick={(e) => {
        if (cardOpen) clickCard(e);
      }}
    >
      <div className={classes.main}>
        <div className={classes.cardContainerRoot}>
          <div className={classes.body}>
            <div
              className={classes.content}
              style={{
                transition: "100ms",
                filter: cardOpen ? " blur(3px)" : " blur(0px)",
                WebkitFilter: cardOpen ? " blur(3px)" : " blur(0px)",
              }}
            >
              <div className={classes.heading}>
                <h2>programming</h2>
              </div>

              {Object.keys(SkillsData).map((val, i) => {
                return (
                  <div key={i}>
                    <Description
                      classes={classes}
                      title={Object.values(SkillsData)[i].skill}
                      description={"programming has been my fovourite activity"}
                    />

                    <Languages
                      setSelectedSkill={setSelectedSkill}
                      onClick={clickCard}
                      classes={classes}
                      languageSkills={Object.values(SkillsData)[i]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <FlipCardComponent
          cardOpen={cardOpen}
          openCardRef={openCardRef}
          selectedObject={selectedObject}
        />
      </div>
    </div>
  );
}

function Languages(props) {
  return (
    <div className={props.classes.cardWrapper}>
      {props.languageSkills.map((skills, index) => {
        return (
          <CardComponent
            setSelectedSkill={props.setSelectedSkill}
            onClick={props.onClick}
            skills={skills}
            key={skills.skill}
          />
        );
      })}
    </div>
  );
}
