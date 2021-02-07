import React, { useState, useEffect } from "react";
import styles from "./SProjectFeedStyles.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import InfoTab from "./InfoTab";
import TagsLinksTab from "./TagsLinksTab";
import ImagesTab from "./ImagesTab";
import axios from "axios";

function SProjectFeed() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/sprojects") ///"http://localhost:3010/sprojects" https://geeb.herokuapp.com/sprojects
      .then((response) => setProjects(response.data));
  }, []);
  {/*
  const myProjects = () => {
    axios
      .get("http://localhost:3010/sprojects/mine" ,{
        headers: {
          "auth-token": window.localStorage.getItem("auth-token"),
      }}) //http://localhost:3010/oprojects" https://geeb.herokuapp.com/oprojects
      .then((response) => {
        
        setOprojects(response.data) 
        console.log(response.data);
      }
      )}  
  */}
  
  return (
    <div className={styles.Global}>
      {projects.map((project, index) => (
        <Tabs className={styles.Card} selectedTabClassName={styles.TabSelected}>
          <TabList className={styles.TabsList}>
            <Tab className={styles.TabsUnselected}>Overview</Tab>
            <Tab className={styles.TabsUnselected}>Detail</Tab>
            <Tab className={styles.TabsUnselected}>Tags</Tab>
          </TabList>
          <TabPanel>
            <TagsLinksTab project={project}/>
          </TabPanel>
          <TabPanel>
            <InfoTab project={project}/>
          </TabPanel>
          <TabPanel>
            <ImagesTab project={project}/>
          </TabPanel>
        </Tabs>
      ))}
      
    </div>
  );
}

export default SProjectFeed;
