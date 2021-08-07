import React, { useState } from "react";
import styles from "./CreateOProject.module.scss";
import { Redirect } from "react-router-dom";
import {
  validateAll,
  validateHighlight,
  validateProfile,
  validateSkill,
} from "../validation/CreateOProjectValidation.js";
import { validateTag } from "../validation/GeneralValidation";
import axios from "axios";
import { AiOutlineUpload } from "react-icons/ai";

function CreateOProject() {
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
  const [redirect, setRedirect] = useState(false);
  const [newId, setNewId] = useState("");
  const [message, setMessage] = useState({
    errorTitle: "",
    errorDescription: "",
    errorHighlight: "",
    errorTag: "",
    errorSkill: "",
    errorProfile: "",
    success: "",
    redirect: false,
  });
  const [files, setFiles] = useState([]); // array of file objects for uploading
  const [previews, setPreviews] = useState([]); // array for local URL Objects for previewing an image
  const [uploadMsg, setUploadMsg] = useState(); // feedback for image uploader input

  const onFileSubmit = (e) => {
    // adds the selected file to the files array for preloading
    e.preventDefault();
    let f = e.target.file.files[0];
    let fpreview = URL.createObjectURL(f);
    setPreviews((previews) => [...previews, fpreview]);
    console.log("Added", f);
    setFiles((files) => [...files, f]);
    setUploadMsg(<p style={{ color: "#9ccc65" }}>Added file: {f.name}</p>);
    e.target.file.value = null; // reset the input
  };

  const handleOnChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };
  //onAdd ******************************************************************************************************************************
  const onAddTag = (event) => {
    setMessage({ ...message, errorTag: validateTag(tags, project.currentTag) });
    if (validateTag(tags, project.currentTag) == "") {
      setTags((t) => [...t, project.currentTag]);
      setProject({
        ...project,
        currentTag: "",
      });
    }
  };
  const onAddSkill = (event) => {
    setMessage({
      ...message,
      errorSkill: validateSkill(skills, project.currentSkill),
    });
    if (validateSkill(skills, project.currentSkill) === "") {
      setSkills((t) => [...t, project.currentSkill]);
      setProject({
        ...project,
        currentSkill: "",
      });
    }
  };

  const onAddHighlight = (event) => {
    setMessage({
      ...message,
      errorHighlight: validateHighlight(tags, project.currentHighlight),
    });
    if (validateHighlight(tags, project.currentHighlight) === "") {
      setHighlights((t) => [...t, project.currentHighlight]);
      setProject({
        ...project,
        currentHighlight: "",
      });
    }
  };
  const onAddProfile = (event) => {
    setMessage({
      ...message,
      errorProfile: validateProfile(tags, project.currentProfile),
    });
    if (validateProfile(tags, project.currentProfile) === "") {
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

  const onDeleteImage = (index) => {
    setPreviews(previews.filter((image, i) => i !== index));
    setUploadMsg("");
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
    let finalmessages = validateAll(
      project,
      tags,
      skills,
      highlights,
      profiles
    );
    setMessage({
      errorTitle: finalmessages.errorTitle,
      errorDescription: finalmessages.errorDescription,
      errorHighlight: finalmessages.errorHighlight,
      errorTag: finalmessages.errorTag,
      errorSkill: finalmessages.errorSkill,
      errorProfile: finalmessages.errorProfile,
      redirect: finalmessages.redirect,
      success: finalmessages.success,
    });

    if (message.success == "") {
      const Project = {
        title: project.title,
        description: project.description,
        status: project.status,
        tags: tags,
        highlights: highlights,
        desirables: profiles,
        skills: skills,
      };

      axios
        .post("http://localhost:3010/oprojects/create", Project, {
          headers: {
            // Send the JWT along in the request header
            "auth-token": window.localStorage.getItem("auth-token"),
          },
        })
        .then((resp) => {
          // the backend responds with the new project's _id
          setNewId(resp.data);
          setMessage({ ...message, success: "Project created succesfully!" });
          setTimeout(() => setRedirect(true), 2000);
        });
    } else {
      setMessage({
        ...message,
        success: "Something went wrong with your registration",
      });
    }
  };

  return redirect ? (
    <Redirect to={`/project/${newId}`} />
  ) : (
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
        <div className={styles.Box5}>
          <div>
            {" "}
            {/* Image Uploader starts here */}
            <p className={styles.Label}>File Uploader</p>
            <form onSubmit={onFileSubmit}>
              <label className={styles.ChooseImg}>
                Choose an image
                <AiOutlineUpload className={styles.IconUpload} />
                <input type="file" name="file" />
              </label>

              <input
                className={styles.Button}
                style={{ width: "170px" }}
                type="submit"
                value="Add and preview"
              />
            </form>
            <p className={styles.UploadMsg}>{uploadMsg}</p>
          </div>

          <div className={styles.TContainer}>
            {previews.map((url, index) => (
              <div
                className={styles.Preview}
                onClick={() => onDeleteImage(index)}
              >
                <img src={url} />
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: "#00FA9A" }}>{message.success}</p>
        <div>
          <input
            className={`${styles.Button} ${styles.Create} `}
            type="button"
            value="Create!"
            onClick={handleOnSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateOProject;
