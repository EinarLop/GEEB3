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

const BACKEND_DEV = 'http://localhost:3010';
const BACKEND_PROD = 'https://geeb.herokuapp.com/';

function App() {

  const { loginStatus } = useLogin();

  return (
    <div>
      {
        <Router>
          <Header loginStatus={loginStatus} />
          <Route exact path="/" render={() => <Home loginStatus={loginStatus} />} />
          <Route path="/register" render={() => <Registration loginStatus={loginStatus} />} />
          <Route path="/login" render={() => <Login loginStatus={loginStatus} />} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/oprojects" component={ProjectFeed} />
          <Route path="/oproject/:id" component={ProjectMoreInfo} /> {/*change route to /project/:id*/}
          <Route path="/create" component={CreateOProject} />
          <Route path="/sprojects" component={SProjectFeed} />
          <Route path="/createsproject" component={CreateSProject} />
          <Route path="/sproject/:id" component={SProjectMoreInfo} /> {/*change route to /portfolio/:id*/}
          <Route path="/upload" component={ImageUploader} />
          <Route path="/myapplication/:id" component={MyApplication} />
          <Route path="/dev" component={Testing} />
        </Router>
      }
    </div>
  );
}

export default App;
