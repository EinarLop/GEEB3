import React, { useState, useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedStyles.module.scss";
import axios from "axios";

import Oproject from "../Components/Oproject";
import {SearchBar} from "../Components/SearchBar";

function ProjectFeed() {
  const [filteredPro, setFilteredProjects]=useState([]);
  const [tagsA,setTags]=useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3010/oprojects") ///"http://localhost:3010/oprojects" http://localhost:3010oprojects
      .then((response) => {
        setFilteredProjects(response.data);
      });
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
        setFilteredProjects(responde.data);
        console.log(response.data);
      });
  };

  const addTag = event =>{
    const val = event.target.value;
    if (event.key === 'Enter' && val){
      setTags([
        ...tagsA,
        val
      ]);
      document.getElementById('searchBar').value = ''
    }
  };
  const onDeleteTag = (index) => {
    setTags(tagsA.filter((tag, i) => i !== index));
  };
  const searchTag = (index) => {
    if (tagsA.length == 0){
      axios
      .get("http://localhost:3010/oprojects") ///"http://localhost:3010/oprojects" http://localhost:3010oprojects
      .then((response) => {
        setFilteredProjects(response.data)
      });
    }else{
      axios
      .get("http://localhost:3010/tags/oprojects",{
        params:{
          tagNames: tagsA
        }
      })
      .then((response) => {
        setFilteredProjects(response.data);
        console.log(response.data);
      });
    }
    
  };


  return (
    <div className={styles.Global}>
      <p className={styles.Title}> Explore Team Projects</p>
      <SearchBar addTag={addTag} searchTags={searchTag}/>
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
