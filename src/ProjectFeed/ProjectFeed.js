import React, { useState, useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedStyles.module.scss";
import axios from "axios";
import { auth } from '../base'
import { BACKEND_DEV, BACKEND_PROD } from "../constants";

import Oproject from "../components/Oproject";

function ProjectFeed({ loginStatus }) {
  const [oprojects, setOprojects] = useState([]);

  useEffect(() => {
    axios
      .get(BACKEND_DEV + "/oprojects")
      .then((response) => setOprojects(response.data));
  }, []);


  const myProjects = async () => {
    if (!loginStatus) return;

    const idToken = await auth.currentUser?.getIdToken(true);

    if (!idToken) return;

    const authTokenHeader = {
      "authorization": `Bearer ${idToken}`,
    };

    axios
      .get(BACKEND_DEV + "/oprojects/mine", { headers: authTokenHeader })
      .then((response) => {
        setOprojects(response.data);
        console.log(response.data);
      });
  };

  return (
    <div className={styles.Global}>
      <p className={styles.Title}>Explore Team Projects</p>
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
