import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreateProject from "./CreateProject/createProject.js";

import AcceptRequest from "./AcceptProjectRequest/acceptProjectRequest.js";

import PublicProfile from "./PublicProfile/publicProfile.js";

import Login from "./Login/login";

import Header from "./Components/Header";

import Registration from "./Registration/Registration";
import ProjectCreate from "./ProjectCreate/ProjectCreate";
import CreateProject3 from "./CreateProject/CreateProject3";
import styles from "./AppStyles.module.scss";

//350x34
//404x44
function App() {
  return (
    <div>
      <Header />
      {/* <CreateProject3 /> */}
      <ProjectCreate />

      {/* <div className={styles.InputLabelContainer}>
     <label className={styles.Label}>Project Title</label>
      <input placeholder="Amazing project" className={styles.Input} />
      </div>

        <div className={styles.InputLabelContainer}>
     <label className={styles.Label}>Project Title</label>
      <input placeholder="Amazing project" className={styles.Input} />
      </div>
  */}

      {/* <Registration/> */}
      {/* <CreateProject/>  */}
      {/* <Login/>
      <AcceptRequest/>
      <Router>
        <Header/>
        <Route exact path="/" component={CreateProject}/>
        <Route path="/profile/:id" component={PublicProfile}/>
      </Router> */}
    </div>
  );
}

export default App;
