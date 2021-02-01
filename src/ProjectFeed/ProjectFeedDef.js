import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedDefStyles.module.scss";
import axios from "axios";

function ProjectFeedDef() {
  const [oprojects, setOprojects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/oprojects") ///"http://localhost:3010/oprojects" https://geeb.herokuapp.com/oprojects
      .then((response) => setOprojects(response.data));
  }, []);

  const [oprojectsMock, setOprojectsMock] = useState([
    {
      title: "Test OProject2",
      description: "Description OProject2",
      status: "Open",
      highlights: ["h12", "h22"],
      tags: ["tag12", "tag22", "tag32"],
      skills: ["skill12", "skill22"],
    },
  ]);
  //.get("http://localhost:3010/oprojects")
  //.then((response) => {
  //  console.log(response.data);
  //  setOprojects(response.data);
  //})
  //.catch((error) => {
  //  console.log(error);
  //});
  //}, []);
  /*const onEdit = (event) => {
    console.log("Click on edit button");
  };*/
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
      <input type="button" value="Mine" className={styles.Button} onClick={myProjects}/>
      {oprojects.map((project, index) => (
        <Tabs className={styles.Card} selectedTabClassName={styles.TabSelected}>
          <TabList className={styles.TabsList}>
            <Tab className={styles.TabsUnselected}>Overview</Tab>
            <Tab className={styles.TabsUnselected}>Highlights</Tab>
            <Tab className={styles.TabsUnselected}>Tags & Skills</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.Wrapper}>
              <div className={styles.Row0}>
                <p className={styles.TitleCard}> {project.title}</p>
                <p>{project.description}</p>
                <div className={styles.Info}>
                  <div className={styles[project.status]}>
                    <p>Status: {project.status}</p>
                  </div>
                  <p>Creator: @{project.creator}</p>
                  <p>Created: {project.created}</p>
                </div>
              </div>
              <div className={styles.ButtonDiv}>
                <Link to={"/oproject/" + project._id} className={styles.Button}>
                  Apply
                </Link>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className={styles.Wrapper}>
              <div className={styles.Row0}>
                {/* <p className={styles.TitleCard}> {project.title}</p> */}
                <ul className={styles.Hlist}>
                  {project.highlights.map((h) => (
                    <li>{h}</li>
                  ))}
                </ul>
                <div className={styles.Info}>
                  <div className={styles[project.status]}>
                    <p>Status: {project.status}</p>
                  </div>
                  <p>Creator: @{project.creator}</p>
                  <p>Created: {project.created}</p>
                </div>
              </div>
              <div className={styles.ButtonDiv}>
                <Link to={"/oproject/" + project._id} className={styles.Button}>
                  Apply
                </Link>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className={styles.Wrapper}>
              <div className={styles.Row0}>
                <p className={styles.TagsSubtitle}>Tags</p>
                {
                  // There could be at most 6 tags? TO DO IN BACKEND
                }
                <div className={styles.TagsWrapper}>
                  {project.tags.map((t) => (
                    <p className={`${styles.Tag} ${styles.TopicTag}`}>{t}</p>
                  ))}
                </div>
                <p className={styles.TagsSubtitle}>Skills</p>
                <div className={styles.SkillsWrapper}>
                  {project.skills.map((s) => (
                    <p className={`${styles.Tag} ${styles.SkillTag}`}>{s}</p>
                  ))}
                </div>
              </div>
              <div className={styles.ButtonDiv}>
                <Link to={"/oproject/" + project._id} className={styles.Button}>
                  Apply
                </Link>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      ))}
    </div>
  );
}

export default ProjectFeedDef;
//<Link to={"/edit/" + watch._id}>Retirar Stock</Link>
