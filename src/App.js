import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login/Login";

import Header from "./Components/Header";

import Home from "./Home/Home";
import Registration from "./Registration/Registration";
import ProjectCreate from "./ProjectCreate/ProjectCreate";
import ProjectFeed from "./ProjectFeed/ProjectFeed";
import ProjectMoreInfo from "./ProjectMoreInfo/ProjectMoreInfo";
import SProjectFeed from "./SProject/SProjectFeed.js";
import CreateSProject from "./CreateSProject/CreateSProject.js";
import SProjectMoreInfo from "./SProjectMoreInfo/SProjMoreInfo.js";
import ImageUploader from "./Components/ImageUploader";
import Profile from "./Profile/Profile";
import EditProfile from "./EditProfile/EditProfile.js";
//350x34
//404x44

function App() {
  return (
    <div>
      {
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/oprojects" component={ProjectFeed} />
          <Route path="/oproject/:id" component={ProjectMoreInfo} /> {/*change route to /project/:id*/}
          <Route path="/create" component={ProjectCreate} />
          <Route path="/sprojects" component={SProjectFeed} />
          <Route path="/createsproject" component={CreateSProject} />
          <Route path="/sproject/:id" component={SProjectMoreInfo}/> {/*change route to /portfolio/:id*/}
          <Route path="/upload" component={ImageUploader}/>
          <Route path="/profile" component={Profile} />
          <Route path="/editprofile" component={EditProfile} />
        </Router>
      }
    </div>
  );
}

export default App;
