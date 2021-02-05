import React, { useState, useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedDefStyles.module.scss";
import axios from "axios";

import Oproject from '../Components/Oproject';

function ProjectFeedDef() {
  const [oprojects, setOprojects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/oprojects") ///"http://localhost:3010/oprojects" https://geeb.herokuapp.com/oprojects
      .then((response) => setOprojects(response.data));
  }, [])

  const [isLogged, setIsLogged] = useState(true);

  const myProjects = () => {
    axios
      .get("http://localhost:3010/oprojects/mine" ,{
        headers: {
          "auth-token": window.localStorage.getItem("auth-token"),
      }}) //http://localhost:3010/oprojects" https://geeb.herokuapp.com/oprojects
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

export default ProjectFeedDef;
//<Link to={"/edit/" + watch._id}>Retirar Stock</Link>
