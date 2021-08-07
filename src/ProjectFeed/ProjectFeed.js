import React, { useState, useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedStyles.module.scss";
import axios from "axios";
import { auth } from '../base'
import { BACKEND_DEV, BACKEND_PROD } from "../constants";

import Oproject from "../components/Oproject";
import { SearchBar } from "../components/SearchBar";

function ProjectFeed({ loginStatus }) {
  const [oprojects, setOprojects] = useState([]);
  const [filteredPro, setFilteredProjects] = useState([]);
  const [tagsA, setTags] = useState([]);


  useEffect(() => {
    axios
      .get(BACKEND_DEV + '/oprojects')
      .then((response) => {
        setFilteredProjects(response.data)
        setOprojects(response.data);
      });
  }, []);
  const [isLogged, setIsLogged] = useState(true);
  useEffect(() => {
    tagsA.map((t) => {
      console.log(t)
      setFilteredProjects(filteredPro.filter(project => project.tags.includes(t)))
    });
  }, [tagsA]);



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
        setFilteredProjects(responde.data);
        console.log(response.data);
      });
  };

  const filterTags = () => {
    if (tagsA.length != 0) {
      tagsA.map((t) => setFilteredProjects(filteredPro.filter(project => project.tags.includes(t))));
    }
  }

  const addTag = event => {
    const val = event.target.value;
    if (event.key === 'Enter' && val) {
      setTags([
        ...tagsA,
        val
      ]);
    }
  };

  const onDeleteTag = (index) => {
    setTags(tagsA.filter((tag, i) => i !== index));
    setFilteredProjects(oprojects);
  };


  return (
    <div className={styles.Global}>
      <p className={styles.Title}> Explore Team Projects</p>
      <SearchBar addTag={addTag} />
      <div className={styles.TContainer}>
        {tagsA.map((tag, index) => (
          <div
            className={`${styles.Tag} ${styles.TopicTag}`}
            onClick={() => onDeleteTag(index)}
          >
            {tag}
          </div>
        ))}
      </div>
      {filteredPro.map((project, index) => (
        <Oproject project={project} />
      ))
      }
    </div >
  );
}

export default ProjectFeed;
