import React, { useState, Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./ProjectFeedDefStyles.module.scss";

function ProjectFeedDef() {
  const onEdit = (event) => {
    console.log("Click on edit button");
  };
  const onMoreInfo = (event) => {
    console.log("Click on More Info button");
  };
  const [projects, setProjects] = useState([
    {
      title: "Development of something",
      description:
        "A world with no hunger, no disease, no war, no misery. Humanity has conquered all those things, and has even conquered death. Now scythes are the only ones who can end life—and they are commanded to do so, in order to keep the size of the population under control. Citra and Rowan are chosen to apprentice to a scythe—a role that neither wants. These teens must master the “art” of taking life, knowing that the consequence of failure could mean losing their own.",
      status: "Closed",
      creator: "@Creador 1",
      tags: [
        { tag: "Python", type: "mastered" },
        { tag: "Learning", type: "Learning" },
        { tag: "non-stop", type: "Learning" },
      ],
      highlights: ["Wanting someone who can develop", "Learn new habilities"],
      profile: [
        "Montivated",
        "Time for daily meeting",
        "Experience in working in big projects",
      ],
      members: "3",
      views: "20",
      stars: "22",
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
      highlights: ["Wanting someone who can develop", "Learn new habilities"],
      profile: [
        "Want to learn",
        "Time for daily meeting",
        "Experience working in groups",
      ],
    },

    {
      title: "Learning Python",
      description:
        "'When Thalia’s tree is mysteriously poisoned, the magical borders of Camp Half-Blood begin to fail. Now Percy and his friends have just days to find the only magic item powerful to save the camp before it is overrun by monsters. The catch: they must sail into the Sea of Monsters to find it. Along the way, Percy must stage a daring rescue operation to save his old friend Grover, and he learns a terrible secret about his own family, which makes him question whether being the son of Poseidon is an honor or a curse.",
      status: "Open",
      creator: "Creador 3",
      tags: [
        { tag: "Python", type: "mastered" },
        { tag: "Learning", type: "Learning" },
        { tag: "non-stop", type: "Learning" },
      ],
      highlights: ["Wanting someone who can develop", "Learn new habilities"],
      profile: ["Motivated", "Want to learn", "Time for daily meeting"],
    },
  ]);
  return (
    <div className={styles.Global}>

      {projects.map((project) => (
        <Tabs className={styles.Card} selectedTabClassName={styles.TabSelected}>
          <TabList className={styles.TabsList}>
            <Tab className={styles.TabsUnselected}>General</Tab>
            <Tab className={styles.TabsUnselected}>Info</Tab>
            <Tab className={styles.TabsUnselected}>Tags</Tab>
          </TabList>

          <TabPanel>
            <div className={styles.Wrapper}>
              <div className={styles.Column0}>
                <h1> {project.title}</h1>
                <p>{project.description}</p>
                <div className={styles.Info}>
                  <h3>Current members: {project.members}</h3>
                  <h3>Status: {project.status}</h3>
                  <h3>Views: {project.views}</h3>
                  <h3>Stars: {project.stars}</h3>
                </div>
              </div>
              <div className={styles.Column2}>
                <input
                  onClick={() => onEdit()}
                  className={styles.Button}
                  type="button"
                  value="Edit"
                />
              </div>
            </div>
            <div className={styles.MobileWrapper}>
              <input
                onClick={() => onEdit()}
                className={styles.MobileButton}
                type="button"
                value="Edit"
              />
            </div>
          </TabPanel>

          <TabPanel>
            <div className={styles.Wrapper}>
              <div className={styles.Column0}>
                <h1>{project.title}</h1>
                <h4>
                  {project.highlights.map((h) => (
                    <p>-{h}</p>
                  ))}
                </h4>
                <h3>{project.creator}</h3>
              </div>
              <div className={styles.Column2}>
                <input
                  className={`${styles.Button} ${styles.Large}`}
                  type="button"
                  value="More Information"
                />
              </div>
            </div>
            <div className={styles.MobileWrapper}>
              <input
                className={styles.MobileButton}
                type="button"
                value="More Information"
              />
            </div>
          </TabPanel>

          <TabPanel>
            <div className={styles.Wrapper}>
              <div className={styles.Column0}>
                <h2>The team already knows:</h2>
                {
                  // There could be at most 6 tags?
                }
                <div className={styles.Knows}>
                  {/*}
                  {projects[0].tags[0].type == "mastered" && (
                    <p>{projects[0].tags[0].tag}</p>
                  )}
                  {projects[0].tags[1].type == "mastered" && (
                    <p>{projects[0].tags[1].tag}</p>
                  )}
                  {projects[0].tags[2].type == "mastered" && (
                    <p>{projects[0].tags[2].tag}</p>
                  )}*/}
                  {project.tags.map(
                    (t) =>
                      t.type == "mastered" && (
                        <p className={styles.TagMastered}>{t.tag}</p>
                      )
                  )}
                </div>
                <h2>The team needs:</h2>
                <div className={styles.Needs}>
                  {/*projects[0].tags[0].type == "Learning" && (
                    <p>{projects[0].tags[0].tag}</p>
                  )}
                  {projects[0].tags[1].type == "Learning" && (
                    <p>{projects[0].tags[1].tag}</p>
                  )}
                  {projects[0].tags[2].type == "Learning" && (
                    <p>{projects[0].tags[2].tag}</p>
                  )*/}
                  {project.tags.map(
                    (t) =>
                      t.type == "Learning" && (
                        <p className={styles.TagMastered}>{t.tag}</p>
                      )
                  )}
                </div>
              </div>
              <div className={styles.Column1}>
                <h2>Profile we are looking for:</h2>
                <p>
                  {project.profile.map((pro, index) => (
                    <p>
                      {index + 1}.-{pro}
                    </p>
                  ))}
                </p>
              </div>
              <div className={styles.Column2}>
                <input
                  className={`${styles.Button} ${styles.Large}`}
                  onClick={() => onMoreInfo()}
                  type="button"
                  value="More Information"
                />
              </div>
            </div>
            <div className={styles.MobileWrapper}>
              <input
                className={styles.MobileButton}
                type="button"
                value="More Information"
                onClick={() => onMoreInfo()}
              />
            </div>
          </TabPanel>
        </Tabs>
      ))}
    </div>
  );
}

export default ProjectFeedDef;
