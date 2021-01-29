import React, { useState } from "react";
import styles from "./ProjectCreateStyles.module.scss";
import Header from "../Components/Header";
import axios from "axios";

function ProjectCreate() {
  let galleta = document.cookie.slice(4);
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
  const [limits, setLimits] = useState({
    titleMinChar: 5,
    titleMaxChar: 50,

    descMinChar: 5,
    descMaxChar: 300,

    minTags: 1,
    maxTags: 6,
    tagMinChar: 1,
    tagMaxChar: 30,

    profileMinChar: 5,
    profileMaxChar: 60,
    minProfiles: 1,
    maxProfiles: 5,
  });

  const onAddTag = (event) => {
    if (project.currentTag.length >= limits.tagMinChar) {
      if (project.currentTag.length <= limits.tagMaxChar) {
        if (project.currentTag.trim() == "") {
          setErrorTag("Tag cannot be empty");
        } else if (tags.length < limits.maxTags) {
          setTags((tags) => [...tags, project.currentTag]);
          setProject({
            ...project,
            currentTag: "",
          });
          setErrorTag("");
        } else {
          setErrorTag("You cannot have more than 6 tags");
        }
      } else {
        setErrorTag("You can only use 30 chars per tag");
      }
    } else {
      setErrorTag("Tags cannot be empty");
    }
  };

  const onAddSkill = (event) => {
    if (project.currentSkill.length >= limits.tagMinChar) {
      if (project.currentSkill.length <= limits.tagMaxChar) {
        if (project.currentSkill.trim() == "") {
          setErrorSkill("Skill cannot be empty");
        } else if (skills.length < limits.maxTags) {
          setSkills((skills) => [...skills, project.currentSkill]);
          setProject({
            ...project,
            currentSkill: "",
          });
          setErrorSkill("");
        } else {
          setErrorSkill("You cannot have more than 6 skills");
        }
      } else {
        setErrorSkill("You can only use 30 chars per Skill");
      }
    } else {
      setErrorSkill("Skill can not be empty");
    }
  };

  const onAddHighlight = (event) => {
    if (project.currentHighlight.length >= limits.profileMinChar) {
      if (project.currentHighlight.trim() == "") {
        setErrorHighlight("Cannot be empty");
      } else if (project.currentHighlight.length <= limits.profileMaxChar) {
        if (highlights.length < limits.maxProfiles) {
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
          setErrorHighlight("You can not have more than 5 highlights");
        }
      } else {
        setErrorHighlight("Highlight can not have more than 60 char");
      }
    } else {
      console.log("Empty H");
      setErrorHighlight("Highlight must be at least 5 characters long");
    }
    console.log(highlights);
  };

  // refactor Profile name
  const onAddProfile = (event) => {
    if (project.currentProfile.length >= limits.profileMinChar) {
      if (project.currentProfile.length <= limits.profileMaxChar) {
        if (project.currentProfile.trim() == "") {
          setErrorProfile("Cannot be empty");
        } else if (profiles.length < limits.maxProfiles) {
          setProfiles((profiles) => [...profiles, project.currentProfile]);

          setProject({
            ...project,
            currentProfile: "",
          });
          setErrorProfile("");
        } else {
          setErrorProfile("You should add at least 1 profile");
        }
      } else {
        setErrorProfile("Profiles can not have more than 60 char");
      }
    } else {
      setErrorProfile("Profiles must be at least 5 characters long");
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
  const validateTitle = () => {
    if (project.title.length < limits.titleMinChar) {
      setErrorTitle("Title must be at least 5 characters long");
    }
    if (project.title.length > limits.titleMaxChar) {
      setErrorTitle("Title can not have more than 50 char");
    }
    if (project.title.trim() == "") {
      setErrorTitle("Title cannot be empty.");
    }
    if (
      project.title.length >= limits.titleMinChar &&
      project.title.length <= limits.titleMaxChar &&
      project.title.trim() != ""
    ) {
      setErrorTitle("");
    }
  };
  const validateDescription = () => {
    if (project.description.length < limits.descMinChar) {
      setErrorDescription("Description must be at least 5 characters long");
    }
    if (project.description.length > limits.descMaxChar) {
      setErrorDescription("Description can't be more than 300 characters long");
    }
    if (project.description.trim() == "") {
      setErrorDescription("Description cannot be empty.");
    }
    if (
      project.description.length <= limits.descMaxChar &&
      project.description.length >= limits.descMinChar &&
      project.description.trim() != ""
    ) {
      setErrorDescription("");
    }
  };
  const validateTagSkills = () => {
    if (tags.length < limits.minTags) {
      setErrorTag("You should add at least 1 tag");
    }
    if (tags.length !== 0) {
      setErrorTag("");
    }
    if (skills.length < limits.minTags) {
      setErrorSkill("You should add at least 1 skill");
    }
    if (skills.length !== 0) {
      setErrorSkill("");
    }
  };
  const validateHighlightProfile = () => {
    if (highlights.length < limits.minProfiles) {
      setErrorHighlight("You should add at least 1 highlight");
    }
    if (highlights.length !== 0) {
      setErrorHighlight("");
    }

    if (profiles.length < limits.minProfiles) {
      setErrorProfile("You should add at least 1 profile requirement");
    }
    if (profiles.length !== 0) {
      setErrorProfile("");
    }
  };
  const handleOnSubmit = () => {
    validateTitle();
    validateDescription();
    validateTagSkills();
    validateHighlightProfile();

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
        highlights: highlights,
        desirables: profiles,
        skills: skills,
      };

      console.log(galleta);
      axios
        .post("http://localhost:3010/oprojects/create", Project, {
          headers: {
            "auth-token": window.localStorage.getItem("auth-token")
          },
        })
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
                <label className={styles.Label}>Title</label>
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
              <label className={styles.Label}>Description</label>
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
                <label className={styles.Label}>Tags</label>
                <div className={styles.TagsInputWrapper}>
                  <input
                    className={styles.TagsInput}
                    placeholder="Programming, Marketing, etc..."
                    onChange={handleOnChange}
                    name="currentTag"
                    value={project.currentTag}
                    autoComplete="off"
                  />
                  <input
                    className={`${styles.Button} ${styles.Special}`}
                    type="button"
                    value="Add"
                    onClick={onAddTag}
                  />
                </div>
                <p className={styles.ErrorMsg}>{errorTag}</p>
              </div>

              {/* <div className={styles.TInputContainer}> */}
              {/* <div className={styles.InputLabelContainer}> */}

              {/* </div> */}
              {/*Tags, Skills add button como círculo con '+'*/}
              {/* </div> */}

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
                <label className={styles.Label}>Skills</label>
                <div className={styles.TagsInputWrapper}>
                  <input
                    className={styles.TagsInput}
                    placeholder="Excel, Photoshop, etc..."
                    onChange={handleOnChange}
                    name="currentSkill"
                    value={project.currentSkill}
                    autoComplete="off"
                  />
                  <input
                    className={`${styles.Button} ${styles.Special}`}
                    type="button"
                    value="Add"
                    onClick={onAddSkill}
                  />
                </div>
                <p className={styles.ErrorMsg}>{errorSkill}</p>
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
                <p className={styles.ErrorMsg}>{errorProfile}</p>
                <input
                  className={styles.Button}
                  onClick={onAddProfile}
                  type="button"
                  value="Add"
                />
              </div>

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
                <p className={styles.ErrorMsg}>{errorHighlight}</p>
                <input
                  className={styles.Button}
                  onClick={onAddHighlight}
                  type="button"
                  value="Add"
                />
              </div>

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
            className={styles.Button}
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
