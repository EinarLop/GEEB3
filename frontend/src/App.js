import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import CreateProject from './CreateProject/createProject.js'

import AcceptRequest from './AcceptProjectRequest/acceptProjectRequest.js'

import PublicProfile from './PublicProfile/publicProfile.js'
import Header from './Components/Header'


function App() {
  return (

      

    <div className="App">
    <Router>
      <Header/>
      <Route exact path="/" component={CreateProject}/>
      <Route path="/profile/:id" component={PublicProfile}/>
    </Router>

    </div>
  );
}

export default App;
