import React, { PureComponent } from "react";
import { ProjectsFromFirebaseContext } from "../reactContext";

import getProjectsdata from "./firebase";

const ProjectsFromFirebaseContextConsumer =
  ProjectsFromFirebaseContext.Consumer;

class ProjectsFromFirebaseContextProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      projectsCollection: null,
      errorMessage: "",
      selectedProject: null,
    };
  }

  setSelectedProject=(value)=>{   
    this.setState({selectedProject: value });
  }
  shouldComponentUpdate(revProp, prevState, sn) {
    if (prevState.projectsCollection !== this.state.projectsCollection||prevState.selectedProject !== this.state.selectedProject) {
      return true;
    }else{
      return false;
    }
  }
  getProjects = async () => {
    let holdingState = [];

    await getProjectsdata()
      .then((data) => {
        if (data.size !== 0) {
          data.forEach((doc) => {
            holdingState.push({ id: doc.id, data: doc.data() });
          });
          this.setState({ projectsCollection: holdingState });
        }
      })
      .catch((e) => {
         console.log(e)
      });
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <ProjectsFromFirebaseContext.Provider
        value={{
          getProjects: this.getProjects,
          state: this.state,
          projectsCollection: this.state.projectsCollection,
          setSelectedProject: this.setSelectedProject,
          selectedProject: this.state.selectedProject,
        }}
      >
        {this.props.children}
      </ProjectsFromFirebaseContext.Provider>
    );
  }
}

export {
  ProjectsFromFirebaseContextConsumer,
  ProjectsFromFirebaseContextProvider,
};
