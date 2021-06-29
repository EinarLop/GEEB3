import React, { useState, useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedStyles.module.scss";
import axios from "axios";

import Oproject from "../Components/Oproject";
import {SearchBar} from "../Components/SearchBar";

function ProjectFeed() {
  const [oprojects, setOprojects] = useState([]);
  const [filteredPro, setFilteredProjects]=useState([]);
  const [tagsA,setTags]=useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3010/oprojects") ///"http://localhost:3010/oprojects" http://localhost:3010oprojects
      .then((response) => {
        setFilteredProjects(response.data)
        setOprojects(response.data);
      });
  }, []);
  const [isLogged, setIsLogged] = useState(true);
  useEffect(()=>{
    tagsA.map((t)=>{
      console.log(t)
      setFilteredProjects(filteredPro.filter(project => project.tags.includes(t)))
    });
  },[tagsA]);
  const myProjects = () => {
    axios
      .get("http://localhost:3010/oprojects/mine", {
        headers: {
          "auth-token": window.localStorage.getItem("auth-token"),
        },
      }) //http://localhost:3010/oprojects" http://localhost:3010oprojects
      .then((response) => {
        setFilteredProjects(responde.data);
        console.log(response.data);
      });
  };
  const filterTags = ()=>{
    if(tagsA.length!=0){
      tagsA.map((t)=>setFilteredProjects(filteredPro.filter(project => project.tags.includes(t))));
    }
  }
  const addTag = event =>{
    const val = event.target.value;
    if (event.key === 'Enter' && val){
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
      <SearchBar addTag={addTag}/>
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
      ))}
    </div>
  );
}

export default ProjectFeed;
//<Link to={"/edit/" + watch._id}>Retirar Stock</Link>
