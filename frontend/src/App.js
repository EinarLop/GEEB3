import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AcceptRequest from "./AcceptProjectRequest/acceptProjectRequest.js";

import PublicProfile from "./PublicProfile/publicProfile.js";

import Login from "./Login/login";

import Header from "./Components/Header";

import Registration from "./Registration/Registration";
import ProjectCreate from "./ProjectCreate/ProjectCreate";
import ProjectFeedDef from "./ProjectFeed/ProjectFeedDef";
import ProjectMoreInfo from "./ProjectMoreInfo/ProjectMoreInfo";

//350x34
//404x44
function App() {
  return (
    <div>
      {/* <Header /> */}
      {/*<ProjectCreate />*/}
      {/*<OpenProject/>*/}
      {/*<ProjectFeedDef/>*/}
      {/* <Registration/> */}
      {/*<ProjectMoreInfo/>*/}
      {/* <CreateProject/>  */}
      { /*<Login/> /*
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
