import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login/Login";
import Header from "./components/Header";
import Home from "./Home/Home";
import Registration from "./Registration/Registration";
import CreateOProject from "./CreateOProject/CreateOProject";
import ProjectFeed from "./ProjectFeed/ProjectFeed";
import ProjectMoreInfo from "./ProjectMoreInfo/ProjectMoreInfo";
import SProjectFeed from "./SProject/SProjectFeed.js";
import CreateSProject from "./CreateSProject/CreateSProject.js";
import SProjectMoreInfo from "./SProjectMoreInfo/SProjMoreInfo.js";
import ImageUploader from "./components/ImageUploader";
import Profile from "./Profile/Profile";
import EditProfile from "./EditProfile/EditProfile.js";
import MyApplication from "./components/MyApplications.js";
import Testing from './Testing'
import useLogin from './hooks/useLogin'
import { auth } from './base'

function App() {

  const { loginStatus } = useLogin();

  return (
    <>
      {
        <Router>
          <Header loginStatus={loginStatus} />
          <Route exact path="/" render={() => <Home loginStatus={loginStatus} />} />
          <Route path="/register" render={() => <Registration loginStatus={loginStatus} />} />
          <Route path="/login" render={() => <Login loginStatus={loginStatus} />} />
          <Route path="/profile/:id" render={(props) => <Profile {...props} loginStatus={loginStatus} />} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/oprojects" component={ProjectFeed} />
          <Route path="/project/:id" component={ProjectMoreInfo} />
          <Route path="/create" component={CreateOProject} />
          <Route path="/sprojects" component={SProjectFeed} />
          <Route path="/createsproject" component={CreateSProject} />
          <Route path="/portfolio/:id" component={SProjectMoreInfo} />
          <Route path="/upload" component={ImageUploader} />
          <Route path="/myapplication/:id" component={MyApplication} />
          <Route path="/dev" component={Testing} />
        </Router>
      }
    </>
  );
}

export default App;
