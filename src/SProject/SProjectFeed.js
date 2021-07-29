import React, { useState, useEffect } from "react";
import styles from "./SProjectFeedStyles.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import InfoTab from "./InfoTab";
import TagsLinksTab from "./TagsLinksTab";
import ImagesTab from "./ImagesTab";
import axios from "axios";
import Sproject from "../Components/Sproject";
import {SearchBar} from "../Components/SearchBar";


function SProjectFeed() {
  const [filteredPro, setFilteredProjects]=useState([]);
  const [tagsA,setTags]=useState([]);
  useEffect(()=>{
    tagsA.map((t)=>{
      console.log(t)
      setFilteredProjects(filteredPro.filter(project => project.tags.includes(t)))
    });
  },[tagsA]);
  useEffect(() => {
    axios
      .get("http://localhost:3010/sprojects") ///"http://localhost:3010/sprojects" http://localhost:3010sprojects
      .then(
        (response) => {
          setFilteredProjects(response.data);
        }
      );
  }, []);
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
      .get("http://localhost:3010/sprojects") ///"http://localhost:3010/oprojects" http://localhost:3010oprojects
      .then((response) => {
        setFilteredProjects(response.data)
      });
    }else{
      axios
      .get("http://localhost:3010/tags/sprojects",{
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

      <p className={styles.Title}> Explore Portfolio Projects</p>
      <SearchBar  addTag={addTag} searchTags={searchTag}/>
      <div className={styles.TContainer}>
        {tagsA.map((tag, index) => (
          <div
            key={index}
            className={`${styles.Tag} ${styles.TopicTag}`}
            onClick={() => onDeleteTag(index)}
          >
            {tag}
          </div>
        ))}
      </div>
      {filteredPro.map((project, index) => (
        //<Sproject project={project}/>
        <Tabs className={styles.Card} selectedTabClassName={styles.TabSelected} key={index}>
          <TabList className={styles.TabsList}>
            <Tab className={styles.TabsUnselected}>Overview</Tab>
            <Tab className={styles.TabsUnselected}>Tags & Links</Tab>
            <Tab className={styles.TabsUnselected}>Images</Tab>
          </TabList>
          <TabPanel>
            <InfoTab project={project} />
          </TabPanel>
          <TabPanel>
            <TagsLinksTab project={project} />
          </TabPanel>
          <TabPanel>
            <ImagesTab project={project} />
          </TabPanel>
        </Tabs>
      ))}
    </div>
  );
}

export default SProjectFeed;