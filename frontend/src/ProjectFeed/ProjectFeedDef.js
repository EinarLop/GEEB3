import React, { useState, Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedDefStyles.module.scss";

function ProjectFeedDef() {
  /*const onEdit = (event) => {
    console.log("Click on edit button");
  };*/
  const [isLogged, setIsLogged] = useState(true);
  const onMoreInfo = (event) => {
    if(isLogged){
      location.href = '/oproject/:id'
    }else{
      location.href = '/login'
    }
  };
  const [projects, setProjects] = useState([
    {
      title: "Development of GEEB",
      description:
        "A world with no hunger, no disease, no war, no misery. Humanity has conquered all those things, and has even conquered death. Now scythes are the only ones who can end life—and they are commanded to do so, in order to keep the size of the population under control. Citra and Rowan are chosen to apprentice to a scythe—a role that neither wants. These teens must master the “art” of taking life, knowing that the consequence of failure could mean losing their own.",
      status: "Open",
      creator: "GeebInc",
      tags: [
        { tag: "Python", type: "mastered" },
        { tag: "Learning", type: "Learning" },
        { tag: "non-stop", type: "Learning" },
      ],
      skills: [
        {name: "Skill1"},
        {name: "Skill2"},
        {name: "Skill3"}
      ],
      highlights: [
        "Promising potential for growth & scaling for thousands of users",
        "Work on a dynamic platform that connects creative people together",
        "Discover new technologies",
      ],
      profile: [
        "Motivated",
        "Time for daily meeting",
        "Experience in working in big projects",
      ],
      created: "2020-01-01",
      //members: "3",
      //views: "20",
      //stars: "22",
    },

    {
      title: "My videogame",
      description:
        "Twelve-year-old Percy Jackson is on the most dangerous quest of his life. With the help of a satyr and a daughter of Athena, Percy must journey across the United States to catch a thief who has stolen the original weapon of mass destruction — Zeus’ master bolt. Along the way, he must face a host of mythological enemies determined to stop him. Most of all, he must come to terms with a father he has never known, and an Oracle that has warned him of betrayal by a friend.",
      status: "Open",
      creator: "Creador 2",
      tags: [
        { tag: "Python", type: "mastered" },
        { tag: "Learning", type: "Learning" },
        { tag: "non-stop", type: "Learning" },
      ],
      skills: [
        {name: "Skill1"},
        {name: "Skill2"},
        {name: "Skill3"}
      ],
      highlights: ["Wanting someone who can develop", "Learn new habilities"],
      profile: [
        "Want to learn",
        "Time for daily meeting",
        "Experience working in groups",
      ],
      created: "2020-01-01",
    },

    {
      title: "Learning Python",
      description:
        "'When Thalia’s tree is mysteriously poisoned, the magical borders of Camp Half-Blood begin to fail. Now Percy and his friends have just days to find the only magic item powerful to save the camp before it is overrun by monsters. The catch: they must sail into the Sea of Monsters to find it. Along the way, Percy must stage a daring rescue operation to save his old friend Grover, and he learns a terrible secret about his own family, which makes him question whether being the son of Poseidon is an honor or a curse.",
      status: "Open",
      creator: "Creador 3",
      tags: [
        { tag: "AAAAAAAAAAAAAAAAAAAAAAAAA"},
        { tag: "AAAAAAAAAAAAAAAAAAAAAAAAA"},
        { tag: "AAAAAAAAAAAAAAAAAAAAAAAAA"},
        { tag: "AAAAAAAAAAAAAAAAAAAAAAAAA"},
        { tag: "AAAAAAAAAAAAAAAAAAAAAAAAA"},
        { tag: "AAAAAAAAAAAAAAAAAAAAAAAAA"},
      ],
      skills: [
        {name: "ajkfdjasflkjdlsafdjlalksj"},
        {name: "ajkfdjasflkjdlsafdjlalksj"},
        {name: "ajkfdjasflkjdlsafdjlalksj"},
        {name: "ajkfdjasflkjdlsafdjlalksj"},
        {name: "ajkfdjasflkjdlsafdjlalksj"},
        {name: "ajkfdjasflkjdlsafdjlalksj"},
      ],
      highlights: ["Wanting someone who can develop", "Learn new habilities"],
      profile: ["Motivated", "Want to learn", "Time for daily meeting"],
      created: "2020-01-01",
    },
  ]);
  return (
    <div className={styles.Global}>
      {projects.map((project) => (
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
                <ul className={styles.Hlist}>
                {
                project.highlights.map((h) => (
                    <li>{h}</li>
                  ))
                }
                </ul>
                <div className={styles.Info}>
                  <h3>Status: {project.status /* agregar color*/}</h3>
                  <h3>Creator: @{project.creator}</h3>
                  <h3>Created: {project.created}</h3>
                </div>
              </div>
              <div className={styles.ButtonDiv}>
                <input
                  //onClick={() => onEdit()}
                  className={styles.Button}
                  onClick={() => onMoreInfo()}
                  type="button"
                  value="Apply"
                />
              </div>
            </div>
            <div className={styles.MobileWrapper}>
              <input
                //onClick={() => onEdit()}
                className={styles.MobileButton}
                onClick={() => onMoreInfo()}
                type="button"
                value="Apply"
              />
            </div>
          </TabPanel>

          <TabPanel>
          <div className={styles.Wrapper}>
              <div className={styles.Row0}>
                <h1> {project.title}</h1>
                <ul className={styles.Hlist}>
                {
                project.highlights.map((h) => (
                    <li>{h}</li>
                  ))
                }
                </ul>
                <div className={styles.Info}>
                  <h3>Status: {project.status /* agregar color*/}</h3>
                  <h3>Creator: @{project.creator}</h3>
                  <h3>Created: {project.created}</h3>
                </div>
              </div>
              <div className={styles.ButtonDiv}>
                <input
                  //onClick={() => onEdit()}
                  className={styles.Button}
                  onClick={() => onMoreInfo()}
                  type="button"
                  value="Apply"
                />
              </div>
            </div>
            <div className={styles.MobileWrapper}>
              <input
                //onClick={() => onEdit()}
                className={styles.Button}
                onClick={() => onMoreInfo()}
                type="button"
                value="Apply"
              />
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
                  {project.tags.map(
                    (t) => (
                        <p className={`${styles.Tag} ${styles["Mastered"]}`}>{t.tag}</p>
                      )
                  )}
                </div>
                <h2>Project Skills:</h2>
                <div className={styles.SkillsWrapper}>
                  {project.skills.map(
                    (s) => (
                        <p className={`${styles.Tag} ${styles["Learning"]}`}>{s.name}</p>
                      )
                  )}
                </div>
              </div>

              <div className={styles.ButtonDiv}>
                <input
                  className={`${styles.Button} ${styles.Large}`}
                  onClick={() => onMoreInfo()}
                  type="button"
                  value="Apply"
                />
              </div>
            </div>
            <div className={styles.MobileWrapper}>
              <input
                className={styles.MobileButton}
                onClick={() => onMoreInfo()}
                type="button"
                value="Apply"
              />
            </div>
          </TabPanel>
        </Tabs>
      ))}
    </div>
  );
}

export default ProjectFeedDef;
