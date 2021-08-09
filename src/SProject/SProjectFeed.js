import React, { useState, useEffect, useContext } from "react";
import styles from "./SProjectFeedStyles.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import InfoTab from "./InfoTab";
import TagsLinksTab from "./TagsLinksTab";
import ImagesTab from "./ImagesTab";
import axios from "axios";
import Sproject from "../Components/Sproject";

import { TutorialContext } from '../App';
import {BsArrow90DegRight} from "react-icons/bs";

function SProjectFeed() {
  const [projects, setProjects] = useState([]);
  const [tutorial, setTutorial] = useContext(TutorialContext);

  useEffect(() => {
    axios
      .get("http://localhost:3010/sprojects") ///"http://localhost:3010/sprojects" http://localhost:3010sprojects
      .then((response) => setProjects(response.data));
  }, []);

  return (
    <div className={styles.Global}>
      <p className={styles.Title}> Explore Portfolio Projects</p>
      {tutorial && (
      <div className={styles.TutorialMood}>
        <div className={styles.About}>
          <p className={styles.Subtitle}> Tutorial Mood</p>
          <p className={styles.Text}> En este espacio encontrarás proyectos que han creado diferentes autores, no olvides subir los tuyos.</p>
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
            <p className={styles.Subtitle}>3 Images</p>
            <p className={styles.Text}>En este apartado encontrarás evidencias visuales del proyecto.</p>
          </div>
        </div>
        {/*<BsArrow90DegRight className={styles.Arrow}/>*/}

      </div>)}
      {projects.map((project, index) => (
        //<Sproject project={project}/>
        <Tabs className={styles.Card} selectedTabClassName={styles.TabSelected}>
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
