import React, { Component } from 'react';
import './projectStyles.scss'
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="project">
                <h3>Project Title</h3>
                <p class="projectDescription">Project description bla bla bla</p>
            </div>
         );
    }
}
 
export default Project;