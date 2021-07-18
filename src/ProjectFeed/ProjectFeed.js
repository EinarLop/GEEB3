import React, { useState, useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedStyles.module.scss";
import axios from "axios";

import Oproject from "../components/Oproject";

function ProjectFeed() {
  const [oprojects, setOprojects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/oprojects") ///"http://localhost:3010/oprojects" http://localhost:3010oprojects
      .then((response) => setOprojects(response.data));
  }, []);
  const [isLogged, setIsLogged] = useState(true);

  const myProjects = () => {
    axios
      .get("http://localhost:3010/oprojects/mine", {
        headers: {
          "auth-token": window.localStorage.getItem("auth-token"),
        },
      }) //http://localhost:3010/oprojects" http://localhost:3010oprojects
      .then((response) => {
        setOprojects(response.data);
        console.log(response.data);
      });
  };

  return (
    <div className={styles.Global}>
      <p className={styles.Title}> Explore Team Projects</p>
      {/*---Tag Filter Bar component here---*
            <input
        type="button"
        value="My projects"
        className={styles.Button}
        onClick={myProjects}
      />*/}

      {oprojects.map((project, index) => (
        <Oproject key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectFeed;
