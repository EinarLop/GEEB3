import React, { useState, useEffect, useContext } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedStyles.module.scss";
import axios from "axios";

import { TutorialContext } from '../App';
import {BsArrow90DegRight} from "react-icons/bs";

import Oproject from "../Components/Oproject";

function ProjectFeed() {
  const [oprojects, setOprojects] = useState([]);
  const [tutorial, setTutorial] = useContext(TutorialContext);

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
      {tutorial && (
      <div className={styles.TutorialMood}>
        <div className={styles.About}>
          <p className={styles.Subtitle}> Tutorial Mood</p>
          <p className={styles.Text}> En este espacio encontrarás proyectos de muchas áreas a los que puedes aplicar.</p>
        </div>
        <div className={styles.MainPoints}>
          <div className={styles.Point}>
            <p className={styles.Subtitle}>1 Overview</p>
            <p className={styles.Text}>Conoce sobre el proyecto, si estás interesadx da click en el botón de more info.</p>
          </div>
          <div className={styles.Point}>
            <p className={styles.Subtitle}>2 Highlights</p>
            <p className={styles.Text}>Lo más importate que debes saber del proyecto.</p>
          </div>
          <div className={styles.Point}>
            <p className={styles.Subtitle}>3 Tags & Skills</p>
            <p className={styles.Text}>Cuáles son los temas del proycto y que cualidades o conocimientos debes tener para trabajar en él.</p>
          </div>
        </div>
        {/*<BsArrow90DegRight className={styles.Arrow}/>*/}

      </div>)}
      {/*---Tag Filter Bar component here---*
            <input
        type="button"
        value="My projects"
        className={styles.Button}
        onClick={myProjects}
      />*/}
        {oprojects.map((project, index) => (
          <Oproject project={project} />
        ))}
    </div>
  );
}

export default ProjectFeed;
//<Link to={"/edit/" + watch._id}>Retirar Stock</Link>
