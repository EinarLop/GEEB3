import React, { useState, useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedStyles.module.scss";
import axios from "axios";

import Oproject from '../Components/Oproject';

function ProjectFeed() {
  const [oprojects, setOprojects] = useState([]);

  useEffect(() => {
    axios
      .get("https://geeb.herokuapp.com/oprojects") ///"https://geeb.herokuapp.com/oprojects" https://geeb.herokuapp.com/oprojects
      .then((response) => setOprojects(response.data));
  }, []);
  const [isLogged, setIsLogged] = useState(true);

  const myProjects = () => {
    axios
      .get("https://geeb.herokuapp.com/oprojects/mine" ,{
        headers: {
          "auth-token": window.localStorage.getItem("auth-token"),
      }}) //https://geeb.herokuapp.com/oprojects" https://geeb.herokuapp.com/oprojects
      .then((response) => {
        
        setOprojects(response.data) 
        console.log(response.data);
      }
      )}


  return (
    <div className={styles.Global}>
      {/*---Tag Filter Bar component here---*/}
      <input type="button" value="Mine" className={styles.Button} onClick={myProjects}/>
      {oprojects.map((project, index) => (
        <Oproject project={project} />
      ))}
    </div>
  );
}

export default ProjectFeed;
//<Link to={"/edit/" + watch._id}>Retirar Stock</Link>
