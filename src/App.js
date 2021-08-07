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
import NotFound404 from "./NotFound404/NotFound404";
import MyApplication from "./components/MyApplications.js";
import Testing from './Testing'
import useLogin from './hooks/useLogin'
import { auth } from './base';

function App() {

  const { loginStatus } = useLogin();

  return (
    <>
      {
        <Router>
          <Header loginStatus={loginStatus} />
          <Switch>
            <Route exact path="/" render={() => <Home loginStatus={loginStatus} />} />
            <Route exact path="/register" render={() => <Registration loginStatus={loginStatus} />} />
            <Route exact path="/login" render={() => <Login />} />
            <Route path="/profile/:id" render={(props) => <Profile {...props} loginStatus={loginStatus} />} />
            <Route exact path="/editprofile" render={() => <EditProfile loginStatus={loginStatus} />} />
            <Route exact path="/oprojects" render={(props) => <ProjectFeed {...props} loginStatus={loginStatus} />} />
            <Route path="/project/:id" render={(props) => <ProjectMoreInfo {...props} loginStatus={loginStatus} />} />
            <Route exact path="/create" render={(props) => <CreateOProject {...props} loginStatus={loginStatus} />} />
            <Route exact path="/sprojects" render={(props) => <SProjectFeed {...props} loginStatus={loginStatus} />} />
            <Route exact path="/createsproject" render={(props) => <CreateSProject {...props} loginStatus={loginStatus} />} />
            <Route path="/portfolio/:id" render={(props) => <SProjectMoreInfo {...props} loginStatus={loginStatus} />} />
            <Route exact path="/upload" render={(props) => <ImageUploader {...props} loginStatus={loginStatus} />} />
            <Route exact path="/myapplication/:id" render={(props) => <MyApplication {...props} loginStatus={loginStatus} />} />
            <Route path="/dev" component={Testing} />
            <Route path='*'>
              <NotFound404 />
            </Route>
          </Switch>

        </Router>
      }
    </>
  );
}

export default App;
