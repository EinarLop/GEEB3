import React, { Component } from 'react';
import './createProjectStyles.scss'
import Project from './components/project'

class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
      

    
<div class='projectWrapper'>
    <h1>Project List</h1>
         <Project/>
         <Project/>
         <Project/>
        </div>


  
        
      
         );
    }
}
 
export default CreateProject;