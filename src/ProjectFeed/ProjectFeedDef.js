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
      .get("http://localhost:3010/oprojects")         ///"http://localhost:3010/oprojects" https://geeb.herokuapp.com/oprojects
      .then((response) => setOprojects(response.data));
  }, []);

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

  return (
    <div className={styles.Global}>
      {oprojects.map((project, index) => (
        <Tabs className={styles.Card} selectedTabClassName={styles.TabSelected}>
          <TabList className={styles.TabsList}>
            <Tab className={styles.TabsUnselected}>Overview</Tab>
            <Tab className={styles.TabsUnselected}>Detail</Tab>
            <Tab className={styles.TabsUnselected}>Tags</Tab>
          </TabList>

          <TabPanel>
            <div className={styles.Wrapper}>
              <div className={styles.Row0}>
                <h1> {project.title}</h1>
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
                <h1> {project.title}</h1>
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
                <h2>Project Tags:</h2>
                {
                  // There could be at most 6 tags? TO DO IN BACKEND
                }
                <div className={styles.TagsWrapper}>
                  {project.tags.map((t) => (
                    <p className={`${styles.Tag} ${styles["Mastered"]}`}>{t}</p>
                  ))}
                </div>
                <h2>Project Skills:</h2>
                <div className={styles.SkillsWrapper}>
                  {project.skills.map((s) => (
                    <p className={`${styles.Tag} ${styles["Learning"]}`}>{s}</p>
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
