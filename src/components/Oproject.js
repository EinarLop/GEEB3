import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./OprojectStyles.module.scss";
import { AiFillCheckSquare, AiFillStar } from "react-icons/ai";

/*Component for an Oproject Card*/

export default function Oproject(props) {
  const project = props.project;
  const ownerUsername = project.userid.username;

  return (
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
            <p className={styles.Description}>{project.description}</p>
            <div className={styles.Info}>
              <div className={styles[project.status]}>
                <p>
                  {" "}
                  Status: <b>{project.status}</b>
                </p>
              </div>
              <p>
                Creator:
                <Link to={`/profile/${project.userid._id}`}>
                  <b>
                    {" "}
                    @{project.userid
                      ? ownerUsername
                      : "Loading..."}{" "}
                  </b>
                </Link>
              </p>
              <p>
                Posted:<b> {project.created.slice(0, 10)} </b>
              </p>
            </div>
          </div>
          <div className={styles.ButtonDiv}>
            <Link to={"/project/" + project._id} className={styles.Button}>
              More Info
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
                <li>
                  <AiFillStar />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.ButtonDiv}></div>
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
          <div className={styles.ButtonDiv}></div>
        </div>
      </TabPanel>
    </Tabs>
  );
}
