import React, { useState } from "react";
import styles from "./CreateSProjectStyles.module.scss";

function CreateSProject() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    currentTag: "",
    currentLinks: "",
    currentColaborator: "",
  });
  const [links, setLinks] = useState([]);
  const [tags, setTags] = useState([]);
  const [colaborators, setColaborators] = useState([]);

  const [errorTitle, setErrorTitle] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorLink, setErrorLink] = useState("");
  const [errorTags, setErrorTag] = useState("");
  const [errorColaborator, setErrorColaborator] = useState("");
  const [limits, setLimits] = useState({
    titleMinChar: 5,
    titleMaxChar: 50,

    descMinChar: 5,
    descMaxChar: 300,

    minTags: 1,
    maxTags: 6,
    tagMinChar: 1,
    tagMaxChar: 30,

    linkMinChar: 5,
    linkMaxChar: 60,
    minLink: 1,
    maxLink: 5,

    colaboratorMinChar: 5,
    colaboratorMaxChar: 60,
    minColaborator: 1,
    maxColaborator: 5,
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

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Box1}>
        <label className={styles.Label}>Title</label>
        <input
          className={styles.Input}
          placeholder="Awesome Project"
          name="title"
          autoComplete="off"
          onChange={handleOnChange}
        />
        <p className={styles.ErrorMsg}>{errorTitle}</p>
      </div>

      <div className={styles.Box2}>
        <label className={styles.Label}>Description</label>
        <textarea
          className={styles.TextArea}
          placeholder="Awesome Project"
          name="description"
          autoComplete="off"
          onChange={handleOnChange}
        />
        <p className={styles.ErrorMsg}>{errorDescription}</p>
      </div>
      <div className={styles.Box3}>
        <label className={styles.Label}>Tags</label>
        <div className={styles.TagButtonContainer}>
          <input
            className={styles.TagInput}
            placeholder="Programming, Marketing, etc..."
            name="currentTag"
            autoComplete="off"
            onChange={handleOnChange}
          />
          <input
            className={styles.Button}
            type="button"
            value="Add"
            onClick={onAddTag}
          />
        </div>

        <p className={styles.ErrorMsg}>{errorTags}</p>
      </div>
      <div className={styles.Box4}>
        <label className={styles.Label}>Colaborator</label>
        <div className={styles.TagButtonContainer}>
          <input
            className={styles.TagInput}
            placeholder="Programming, Marketing, etc..."
            name="currentColaborator"
            autoComplete="off"
            onChange={handleOnChange}
          />
          <input className={styles.Button} type="button" value="Add" />
        </div>

        <p className={styles.ErrorMsg}>{errorColaborator}</p>
      </div>
      <div className={styles.Box5}>
        <div className={styles.LinkButtonContainer}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Links</label>
            <input
              className={styles.TagInput}
              placeholder="Programming, Marketing, etc..."
              name="currentLink"
              autoComplete="off"
              onChange={handleOnChange}
            />
            <p className={styles.ErrorMsg}>{errorLink}</p>
          </div>

          <div className={styles.InputLabelContainer}>
            <label className={`${styles.Label} ${styles.Transparent}`}>
              Hey
            </label>
            <input className={styles.Button} type="button" value="Add" />
          </div>
        </div>

        <p className={styles.ErrorMsg}></p>
      </div>
    </div>
  );
}

export default CreateSProject;
