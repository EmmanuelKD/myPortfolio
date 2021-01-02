import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { ProjectsFromFirebaseContextConsumer } from "../../controllers/projectInFirebaseContext";
import PropTypes from "prop-types";
import rgbConverter from "../../controllers/hexToRgb";
import {
  Git,
  AvailableOnApplePlayStore,
  AvailableOnGooglePlay,
  Download,
} from "../../assets/assetGetter/asset";

let useStyle = makeStyles((theme) => {
  const cardColorWithOpacity = rgbConverter(
    theme.palette.type === "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.dark
  );
  return {
    root: {},
    main: {
      marginTop: "15px",
      height: "100vh",
      display: "grid",
      gridTemplateColumns: "15% 55% 30%",
      // gridTemplateRows: "50% 50%",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "100%",
        // gridTemplateRows: "300px 226px 145px",
        height: "auto",
        //  marginLeft:"40px",
        //  marginRight:"40px",
      },
    },
    ProjectDetails: {
      // border: "2px solid #f0f",
      marginLeft: "130px",
      gridRow: "1/3",
      gridColumn: "2/3",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "40px",
        overflowY: "scroll",
        height: "300px",
        gridRow: "1/2",
        gridColumn: "1/2",
      },
    },
    projectDisplay: {
      // backgroundColor: "#f0f",
      overflowY: "scroll",
      height: "100%",
      gridRow: "1/3",
      gridColumn: "1/2",
      [theme.breakpoints.down("sm")]: {
        height: "114px",
        gridRow: "3/4",
        gridColumn: "1/2",
        // backgroundColor: "#0f0",
      },
    },
    accessProjects: {
      // backgroundColor: "#0f0",
      gridRow: "1/3",
      gridColumn: "3/4",
      [theme.breakpoints.down("sm")]: {
        // overflowY: "scroll",
        gridRow: "2/3",
        gridColumn: "1/2",
      },
    },
    scrollApp: {
      height: "100vh",
      // paddingTop: "29px",
      // paddingBottom: "29px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "start",
      overflow: "hidden",
      //  overflowX: "hidden",
      boxShadow: `10px 0px 6px 0px rgba(${cardColorWithOpacity.r},${cardColorWithOpacity.g},${cardColorWithOpacity.b},.26)`,

      [theme.breakpoints.down("sm")]: {
        height: "100%",

        flexDirection: "row",
        boxShadow: `10px 0px 6px 0px rgba(${cardColorWithOpacity.r},${cardColorWithOpacity.g},${cardColorWithOpacity.b},.26)`,
        // WebkitScrollbar:{
        //   width: "0em",
        //   height: "0em"
        // }
      },
    },
    projectCard: {
      [theme.breakpoints.down("sm")]: {
        margin: "27px",
      },
    },
    image: {
      marginTop:"5px",

      cursor: "pointer",
      height: "150px",
      width: "150px",
      [theme.breakpoints.down("sm")]: {
        height: "70px",
        width: "70px",
      },
    },
    accessProjectsMain: {
      // justifyContent:"center",
      // alignItem:"center",
      // border:"2px solid #f0f",
      height: "70%",
      display: "grid",
      gridTemplateColumns: "50% 50%",
      gridTemplateRows: "34%,34%,34%",
      [theme.breakpoints.down("sm")]: {
        height: "100%",
      },
    },
    ContributorsAndDownload: {
      display: "grid",
      gridTemplateRows: "50% 50%",
      gridTemplateColumns: "50% 50%",
      gridColumn: "1/3",
      gridRow: "1/2",
    },
    download: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    contributors: {
      gridColumn: "1/2",
      gridRow: "1/3",
      // backgroundColor: "#f00",
    },
    contributorsText: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    playStores: {
      display: "grid",
      gridTemplateRows: "50% 50%",
      gridTemplateColumns: "50% 50%",
      gridColumn: "1/3",
      gridRow: "2/3",
      // border: "2px solid #0ff",
    },
    googlePlayStore: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gridColumn: "1/2",
      gridRow: "1/3",
    },
    appleStore: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gridColumn: "2/3",
      gridRow: "1/3",
      // backgroundColor: "#000",
    },
    sourceAndLanguages: {
      display: "grid",
      gridTemplateRows: "50% 50%",
      gridTemplateColumns: "50% 50%",
      gridColumn: "1/3",
      gridRow: "3/4",
      // backgroundColor: "#000fff",
    },
    sources: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gridColumn: "2/3",
      gridRow: "1/3",
      // backgroundColor: "#000",
    },
    sourceImage: {
      cursor: "pointer",
    },
    languages: {
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      gridColumn: "1/2",
      gridRow: "1/3",
      // border: "2px solid #0ff",
    },
  };
});

export default function MyProjects() {
  return (
    <ProjectsFromFirebaseContextConsumer>
      {(value) => {
        const {
          // state,
          projectsCollection,
          setSelectedProject,
          selectedProject,
        } = value;
        if (projectsCollection === null) {
          value.getProjects();
        }

        return (
          <ProjectsBody
            projectsCollection={projectsCollection}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        );
      }}
    </ProjectsFromFirebaseContextConsumer>
  );
}

function ProjectsBody({
  selectedProject,
  projectsCollection,
  setSelectedProject,
}) {
  const classes = useStyle();

  const source = selectedProject !== null ? selectedProject.data.source : null;

  const contributors =
    selectedProject !== null ? selectedProject.data.contributors : null;

  useEffect(() => {
    console.log(selectedProject);
    if (projectsCollection !== null && selectedProject == null) {
      setSelectedProject(projectsCollection[0]);
    }
  }, [projectsCollection, setSelectedProject, selectedProject]);

  if (projectsCollection !== null) {
    return (
      <div className={classes.root}>
        <div className={classes.main}>
          <div className={classes.projectDisplay}>
            <div className={classes.scrollApp}>
              {projectsCollection.map((value, index) => {
                return (
                  <ProjectCard
                    key={value.id}
                    image={value.data.imageStorageLocation}
                    projectData={value}
                    setSelectedData={setSelectedProject}
                    classes={classes}
                  />
                );
              })}
            </div>
          </div>

          <div className={classes.ProjectDetails}>
            <Content classes={classes} selectedApp={selectedProject} />
          </div>
          <div className={classes.accessProjects}>
            <div className={classes.accessProjectsMain}>
              <div className={classes.ContributorsAndDownload}>
                <div className={classes.contributors}>
                  <div className={classes.contributorsText}>contributors</div>
                  <Contributors contributors={contributors} />
                </div>
                <div className={classes.download}>
                  <img src={Download} alt={"download"}></img>{" "}
                </div>
              </div>
              <div className={classes.playStores}>
                <div className={classes.googlePlayStore}>
                  <img
                    src={AvailableOnGooglePlay}
                    alt={"googlePlayStore"}
                  ></img>
                </div>
                <div className={classes.appleStore}>
                  <img
                    src={AvailableOnApplePlayStore}
                    alt={"applePlayStore"}
                  ></img>
                </div>
              </div>
              <div className={classes.sourceAndLanguages}>
                <div className={classes.languages}></div>
                <div className={classes.sources}>
                  <div>
                    {" "}
                    <div>source code</div>
                    <img
                      className={classes.sourceImage}
                      src={Git}
                      alt={"sourceCode"}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <NetworkHelp />;
  }
}

function Contributors({ contributors }) {
  if (contributors !== null) {
    return (
      <ul>
        {contributors.map((value, i) => {
          return (
            <li key={i}>
              <a href={"http://google.com"} target={"true"}>
                {value.name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <></>;
  }
}

function NetworkHelp() {
  const [passedTenSec, SetPassedTenSec] = useState(false);
  let timeOut;
  useEffect(() => {
    if (!passedTenSec) {
      console.log("timeOut");
      timeOut = setTimeout(() => {
        SetPassedTenSec(true);
      }, 10000);
    }
    return () => clearTimeout(timeOut);
  }, [passedTenSec]);

  // timeOut
  return (
    <div
      style={{
        alignItems: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {passedTenSec ? (
        <div>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh Page
          </button>
        </div>
      ) : (
        <div> loading...</div>
      )}
    </div>
  );
}

function Content({ classes, selectedApp }) {
  if (selectedApp !== null) {
    let about = selectedApp.data.aboutProject;
    let name = selectedApp.data.projectName;
    let src = selectedApp.data.imageStorageLocation;
    let myRole = selectedApp.data.myRole;
    console.log(myRole);
    return (
      <div>
        <div>{name}</div>
        <div>
          <img alt={name} src={src} className={classes.image}></img>
        </div>
        <div>
          <div>About this project</div>
          {about}
        </div>
        <div>
          <div>What was my role in this project</div>
          {myRole}
        </div>
      </div>
    );
  } else {
    return <div>check internet connection</div>;
  }
}

function ProjectCard({ image, setSelectedData, projectData, classes }) {
  return (
    <div
      className={classes.projectCard}
      onClick={() => {
        setSelectedData(projectData);
      }}
    >
      <img
        alt={projectData.projectName}
        src={image}
        className={classes.image}
      ></img>
      {projectData.projectName}
    </div>
  );
}

// ProjectCard.propTypes = {
//   image:PropTypes.string,
//   setSelectedData:PropTypes.func
//   ,projectData:PropTypes.object,
//   classes:PropTypes.object,
// };



// I am a software developer that has been passionate about coding since I first came in contact with it four years ago during my time at Blue Crest, I was learning networking at diploma level and since then I had been seeing my self sitting in front of a computer every day, spending more than six hours. nevertheless now i can proudly say I have over 4 years experience in programming. during this time I had learned various languages and frame works of which 90% was self taught.
// I have always has this unquenchable thirst to learn new technologies and frameworks, and yet trying so hard to find a perfect balance between to mastering and to learning. I had written a lof of programs of which I cannot say any is there in the real world, but interestingly are good and with phew upgrades can be meaningful, at my early stage of programming i was only focusing on learning and getting the skills right, so most of the projects are uncompleted or not well structured.
// As a programmer, I am also interested in entrepreneurship, I have been working on project that will set me up to own my own software company in the feature as that is my dream