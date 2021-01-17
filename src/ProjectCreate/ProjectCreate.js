import React, { useState } from "react";
import styles from "./ProjectCreateStyles.module.scss";
import Header from "../Components/Header";
import axios from "axios";

function ProjectCreate() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    status: "Open",
    currentHighlight: "",
    currentTag: "",
    currentSkill: "",
    currentProfile: "",
  });
  const [highlights, setHighlights] = useState([]);
  const [tags, setTags] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [skills, setSkills] = useState([]);

  const [errorTitle, setErrorTitle] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorHighlight, setErrorHighlight] = useState("");
  const [errorTag, setErrorTag] = useState("");
  const [errorSkill, setErrorSkill] = useState("");
  const [errorProfile, setErrorProfile] = useState("");

  const onAddTag = (event) => {
    if (project.currentTag != "") {
      if (project.currentTag.length <= 25) {
        if (tags.length < 10) {
          setTags((tags) => [...tags, project.currentTag]);

          setProject({
            ...project,
            currentTag: "",
          });
          setErrorTag("");
        } else {
          setErrorTag("You cannot have more than 10 tags");
        }
      } else {
        setErrorTag("You can only use 25 chars per tag");
      }
    } else {
      setErrorTag("Tags can not be empty");
    }
  };

  const onAddSkill = (event) => {
    if (project.currentSkill != "") {
      if (project.currentSkill.length <= 25) {
        if (skills.length < 10) {
          setSkills((skills) => [...skills, project.currentSkill]);
          setProject({
            ...project,
            currentSkill: "",
          });
          setErrorSkill("");
        } else {
          setErrorSkill("You cannot have more than 10 skills");
        }
      } else {
        setErrorSkill("You can only use 25 chars per Skill");
      }
    } else {
      setErrorSkill("Skill can not be empty");
    }
  };

  const onAddHighlight = (event) => {
    if (project.currentHighlight != "") {
      if (project.currentHighlight.length <= 100) {
        if (highlights.length < 3) {
          setHighlights((highlights) => [
            ...highlights,
            project.currentHighlight,
          ]);

          setProject({
            ...project,
            currentHighlight: "",
          });
          setErrorHighlight("");
        } else {
          setErrorHighlight("You can not have more than 3 highlights");
        }
      } else {
        setErrorHighlight("Highlight can not have more than 100 char");
      }
    } else {
      console.log("Empty H");
      setErrorHighlight("Highlight can not be empty");
    }
    console.log(highlights);
  };
  const onAddProfile = (event) => {
    if (project.currentProfile != "") {
      if (project.currentProfile.length <= 100) {
        if (profiles.length < 5) {
          setProfiles((profiles) => [...profiles, project.currentProfile]);

          setProject({
            ...project,
            currentProfile: "",
          });
          setErrorProfile("");
        } else {
          setErrorProfile("You can not have more than 5 profile requirements");
        }
      } else {
        setErrorProfile("Profiles can not have more than 100 char");
      }
    } else {
      setErrorProfile("Profiles can not be empty");
    }
  };

  const handleOnChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = () => {
    if (project.title == "") {
      setErrorTitle("Title can not be empty");

      console.log("title");
    }
    if (project.title.length > 50) {
      setErrorTitle("Title can not have more than 50 char");
    }
    if (project.title !== "" && project.title.length < 50) {
      setErrorTitle("");
    }
    if (project.description == "") {
      setErrorDescription("Description can not be empty");
      console.log("des");
    }
    if (project.description.length > 400) {
      setErrorDescription("Description can not have more than 400 char");
    }
    if (project.description.length < 400 && project.description !== "") {
      setErrorDescription("");
    }
    if (highlights.length === 0) {
      setErrorHighlight("You should add at least 1 highlight");
    }
    if (highlights.length !== 0) {
      setErrorHighlight("");
    }
    if (tags.length === 0) {
      setErrorTag("You should add at least 1 tag");
    }
    if (tags.length !== 0) {
      setErrorTag("");
    }
    if (profiles.length === 0) {
      setErrorHighlight("You should add at least 1 profile requirement");
    }
    if (skills.length === 0) {
      setErrorHighlight("You should add at least 1 skill");
    }
    if (
      errorDescription === "" &&
      errorTitle === "" &&
      errorTag === "" &&
      errorHighlight === "" &&
      errorSkill === "" &&
      errorProfile === ""
    ) {
      const Project = {
        title: project.title,
        description: project.description,
        status: project.status,
        tags: tags,
        highlights:highlights,
        desirables: profiles,
        skills: skills,
      };
      axios
        .post("http://localhost:3010/oprojects/create", Project)
        .then((res) => console.log(res.data));
    }
  };

  const onDeleteHighlight = (index) => {
    setHighlights(highlights.filter((highlight, i) => i !== index));
  };

  const onDeleteTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index));
  };
  const onDeleteSkill = (index) => {
    setSkills(skills.filter((skill, i) => i !== index));
  };
  const onDeleteProfile = (index) => {
    setProfiles(profiles.filter((profile, i) => i !== index));
  };

  return (
    <>
      {/* <Header /> */}
      <div className={styles.Global}>
        <h1 className={styles.Title}>Create Project</h1>
        <div className={styles.Wrapper}>
          <div className={styles.Column1}>
            <div className={styles.TitleStatusContainer}>
              <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Project title</label>
                <input
                  className={styles.Input}
                  placeholder="Awesome Project"
                  onChange={handleOnChange}
                  name="title"
                  autoComplete="off"
                />
                <p className={styles.ErrorMsg}>{errorTitle}</p>
              </div>

              <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Status</label>
                <select
                  className={styles.Select}
                  onChange={handleOnChange}
                  name="status"
                  value={project.status}
                >
                  <option className={styles.Option}>Open</option>
                  <option>Closed</option>
                </select>
              </div>
            </div>
            <div className={styles.InputLabelContainer}>
              <label className={styles.Label}>Project description</label>
              <textarea
                className={styles.TextArea}
                placeholder="Describe your project in X characters or less!"
                onChange={handleOnChange}
                name="description"
              />
              <p className={styles.ErrorMsg}>{errorDescription}</p>
            </div>
          </div>

          <div className={styles.Column2}>
            <div className={styles.TagsContainer}>
              <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Your Project's Tags</label>
                <input
                  className={styles.Input}
                  placeholder="Programming, Marketing, etc..."
                  onChange={handleOnChange}
                  name="currentTag"
                  value={project.currentTag}
                  autoComplete="off"
                />
              </div>
              <p className={styles.ErrorMsg}>{errorTag}</p>
              <div className={styles.TInputContainer}>
                <div className={styles.InputLabelContainer}>
                  <input
                    className={`${styles.Button} ${styles.Special}`}
                    type="button"
                    value="Add"
                    onClick={onAddTag}
                  />
                </div>
                {/*Tags, Skills add button como círculo con '+'*/}
              </div>

              <div className={styles.TContainer}>
                {tags.map((tag, index) => (
                  <div
                    className={`${styles.Tag} ${styles.TopicTag}`}
                    onClick={() => onDeleteTag(index)}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.SkillsContainer}>
              <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Skills Desired</label>
                <input
                  className={styles.Input}
                  placeholder="Excel, Photoshop, etc..."
                  onChange={handleOnChange}
                  name="currentSkill"
                  value={project.currentSkill}
                  autoComplete="off"
                />
              </div>
              <div className={styles.TInputContainer}>
                <p className={styles.ErrorMsg}>{errorSkill}</p>
                <div className={styles.InputLabelContainer}>
                  <input
                    className={`${styles.Button} ${styles.Special}`}
                    type="button"
                    value="Add"
                    onClick={onAddSkill}
                  />
                </div>
              </div>
              <div className={styles.TContainer}>
                {skills.map((skill, index) => (
                  <div
                    className={`${styles.Tag} ${styles.SkillTag}`}
                    onClick={() => onDeleteSkill(index)}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.Column3}>
            <div className={styles.HInputContainer}>
              <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Profile</label>
                <input
                  placeholder="Describe the traits of your ideal collaborator..."
                  className={styles.Input}
                  onChange={handleOnChange}
                  name="currentProfile"
                  value={project.currentProfile}
                  autoComplete="off"
                />
              </div>

              <input
                className={styles.Button}
                onClick={onAddProfile}
                type="button"
                value="Add"
              />
              <p className={styles.ErrorMsg}>{errorProfile}</p>
              <div className={styles.HContainer}>
                {profiles.map((prof, index) => (
                  <p
                    className={styles.Highlight}
                    onClick={() => onDeleteProfile(index)}
                  >
                    {index + 1 + "."} {" " + prof}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.HInputContainer}>
              <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Highlights</label>
                <input
                  placeholder="What makes your project awesome for collaborators?"
                  className={styles.Input}
                  onChange={handleOnChange}
                  name="currentHighlight"
                  value={project.currentHighlight}
                  autoComplete="off"
                />
              </div>
              <p className={styles.ErrorMsg}>{errorHighlight}</p>
              <input
                className={styles.Button}
                onClick={onAddHighlight}
                type="button"
                value="Add"
              />

              <div className={styles.HContainer}>
                {highlights.map((highlight, index) => (
                  <p
                    className={styles.Highlight}
                    onClick={() => onDeleteHighlight(index)}
                  >
                    {index + 1 + "."} {" " + highlight}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <input
            className={`${styles.Button} ${styles.Large}`}
            type="button"
            value="Create Project!"
            onClick={handleOnSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectCreate;
