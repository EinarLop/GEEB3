import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsLink45Deg, BsFillFolderSymlinkFill } from "react-icons/bs";
import "react-tabs/style/react-tabs.css";
import styles from "./SprojectStyles.module.scss";

export default function Sproject(props) {
  const project = props.project;
  const [redirect, setRedirect] = useState(false);
  const onClickInfo = () => {
    setRedirect(true);
  };
  return redirect ? (
    <Redirect to={`/portfolio/${project._id}`} />
  ) : (
    <Tabs className={styles.Card} selectedTabClassName={styles.TabSelected}>
      <TabList className={styles.TabsList}>
        <Tab className={styles.TabsUnselected}>Overview</Tab>
        <Tab className={styles.TabsUnselected}>Detail</Tab>
        <Tab className={styles.TabsUnselected}>Tags</Tab>
      </TabList>
      <TabPanel>
        <div className={styles.Wrapper}>
          <div className={styles.TagsContainer}>
            <p className={styles.TagsTitle}>Tags:</p>
            <div className={styles.TagsSpace}>
              {project.tags.map((tag) => (
                <p>{tag}</p>
              ))}
            </div>
          </div>

          <div className={styles.LinksContainer}>
            <p className={styles.LinksTitle}>Links</p>
            <div className={styles.LinksSpace}>
              {project.links.map((link) => (
                <li>{link}</li>
                //<p>ooko</p>
              ))}
            </div>
          </div>

          <div className={styles.ButtonContainer}>
            <input
              value="More info"
              className={styles.Button}
              type="Button"
              onClick={onClickInfo}
            ></input>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        {/* Info Tab */}
        <div className={styles.Wrapper}>
          <div className={styles.InfoContainer}>
            <p className={styles.Title}>{project.title}</p>
            <p className={styles.Description}>{project.description}</p>
          </div>
          <div className={styles.ButtonContainer}>
            <input
              value="More info"
              className={styles.Button}
              type="Button "
              onClick={onClickInfo}
            ></input>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        {/* Images Tab */}
        <div className={styles.Wrapper}>
          <div className={styles.InfoContainer}>
            <p className={styles.Title}>{project.title}</p>
            <p className={styles.ImagesWrapper}>
              {project.imageurls.map((img) => (
                <div className={styles.Images}>
                  <img src={img} />
                </div>
              ))}
            </p>
          </div>
          <div className={styles.ButtonContainer}>
            <input
              value="More info"
              className={styles.Button}
              type="Button"
              onClick={onClickInfo}
            ></input>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}
