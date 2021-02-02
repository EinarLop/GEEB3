import React, { useState } from "react";
import styles from "./ProjectCreateStyles.module.scss";
import {Redirect} from 'react-router-dom';
import {validateAll, validateHighlight, validateProfile, validateSkill} from '../ValidationsFiles/ProjectCreateValidation.js';
import {validateTag} from '../ValidationsFiles/GeneralValidation'

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
    success:""
  });
  const [highlights, setHighlights] = useState([]);
  const [tags, setTags] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [skills, setSkills] = useState([]);
  const [message, setMessage] = useState({
    errorTitle : "",
    errorDescription:"",
    errorHighlight:"",
    errorTag:"",
    errorSkill:"",
    errorProfile:"",
    redirect: false
    });

  const handleOnChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };
  //onAdd ******************************************************************************************************************************
  const onAddTag = (event) => {
    setMessage({...message, errorTag: validateTag(tags, project.currentTag,)})
    if(message.errorTag===""){
      setTags((t) => [...t, project.currentTag]);
      setProject({
        ...project,
        currentTag: "",
      });
    }
  };
  const onAddSkill = (event) => {
    setMessage({...message, errorSkill: validateSkill(skills, project.currentSkill,)})
    if(message.errorSkill===""){
      setSkills((t) => [...t, project.currentSkill]);
      setProject({
        ...project,
        currentSkill: "",
      });
    }
  };
  const onAddHighlight = (event) => {
    setMessage({...message, errorHighlight: validateHighlight(tags, project.currentHighlight,)})
    if(message.errorHighlight===""){
      setHighlights((t) => [...t, project.currentHighlight]);
      setProject({
        ...project,
        currentHighlight: "",
      });
    }
  };
  const onAddProfile = (event) => {
    setMessage({...message, errorProfile: validateProfile(tags, project.currentProfile,)})
    if(message.errorProfile===""){
      setProfiles((t) => [...t, project.currentProfile]);
      setProject({
        ...project,
        currentProfile: "",
      });
    }
  };
  //onDelete ******************************************************************************************************************************
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
  //onSubmit ******************************************************************************************************************************
  const handleOnSubmit = (event) => {
    let finalmessages = validateAll(project, tags, skills, highlights, profiles)
    setMessage({
      errorTitle : finalmessages.errorTitle,
      errorDescription: finalmessages.errorDescription,
      errorHighlight: finalmessages.errorHighlight,
      errorTag: finalmessages.errorTag,
      errorSkill: finalmessages.errorSkill,
      errorProfile: finalmessages.errorProfile,
      redirect:finalmessages.redirect,
      success : finalmessages.success
    })
  }

  return (
    message.redirect ? <Redirect to="/oprojects"/> :
    <div>
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
                <p className={styles.ErrorMsg}>{message.errorTitle}</p>
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
              <p className={styles.ErrorMsg}>{message.errorDescription}</p>
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
                <p className={styles.ErrorMsg}>{message.errorTag}</p>
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
                <p className={styles.ErrorMsg}>{message.errorSkill}</p>
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
                <p className={styles.ErrorMsg}>{message.errorProfile}</p>
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
                <p className={styles.ErrorMsg}>{message.errorHighlight}</p>
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
          <p style={{color:'#00FA9A'}}>{message.success}</p>
        <div>
          <input
            className={styles.Button}
            type="button"
            value="Create!"
            onClick={handleOnSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCreate;
