import React, { useState } from "react";
import styles from "./CreateSProjectStyles.module.scss";
import axios from "axios";

function CreateSProject() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    currentTag: "",
    currentLink: "",
    currentImage: "",
  });
  const [links, setLinks] = useState([]);
  const [tags, setTags] = useState([]);
  const [imageurls, setImages] = useState([]);

  const [errorTitle, setErrorTitle] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorLink, setErrorLink] = useState("");
  const [errorTags, setErrorTag] = useState("");
  const [errorImage, setErrorImage] = useState("");
  const [noError, setNoError]= useState("");
  const [limits, setLimits] = useState({
    titleMinChar: 5,
    titleMaxChar: 50,

    descMinChar: 5,
    descMaxChar: 300,

    minTags: 1,
    maxTags: 6,
    tagMinChar: 1,
    tagMaxChar: 30,

    linkMinChar: 15,
    linkMaxChar: 30,
    minLink: 1,
    maxLink: 5,

    imageMinChar: 5,
    imageMaxChar: 30,
    minImage: 1,
    maxImage: 5,
  });
// on add tag, link colaborator
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
          console.log(tags)
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
  const onAddLink = (event) => {
    if (project.currentLink.length >= limits.linkMinChar) {
      if (project.currentLink.length <= limits.linkMaxChar) {
        if (project.currentLink.trim() == "") {
          setErrorLink("Link cannot be empty");
        } else if (links.length < limits.maxLink) {
          setLinks((link) => [...link, project.currentLink]);
          setProject({
            ...project,
            currentLink: "",
          });
          setErrorLink("");
        } else {
          setErrorLink("You cannot have more than 6 links");
        }
      } else {
        setErrorLink("You can only use 30 chars per links");
      }
    } else {
      setErrorLink("Links but be at least 15 characters");
    }
  };
  const onAddImage = (event) => {
    if (project.currentImage.length >= limits.imageMinChar) {
      if (project.currentImage.length <= limits.imageMaxChar) {
        if (imageurls.length < limits.maxImage) {
          setImages((img) => [...img, project.currentImage]);
          setProject({
            ...project,
            currentImage: "",
          });
          setErrorImage("");
        } else {
          setErrorImage("You cannot have more than 6 Images");
        }
      } else {
        setErrorImage("You can only use 30 chars per Images");
      }
    } else {
      setErrorImage("Images cannot be empty");
    }
  };

  const handleOnChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };

  //validate Title, description, tags, link, collaborator
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
  const validateTags = () => {
    if (tags.length < limits.minTags) {
      setErrorTag("You should add at least 1 tags");
    }
    if (tags.length > limits.maxTags) {
      setErrorTag("You can not add more than 5 tags");
    }
    if (tags.length !== 0) {
      setErrorTag("");
    }
  };
  const validateLinks = () => {
    if (links.length < limits.minLink) {
      setErrorLink("You should add at least 1 link");
    }
    if (links.length > limits.maxLink) {
      setErrorLink("You can not add more than 5 links");
    }
    if (links.length !== 0) {
      setErrorLink("");
    }
  };
  const validateImages = () => {
    if (imageurls.length < limits.minImage) {
      setErrorImage("You should add at least 1 Image");
    }
    if (imageurls.length > limits.maxImage) {
      setErrorImage("You can not add more than 5 Image");
    }
    if (imageurls.length !== 0) {
      setErrorImage("");
    }
  };


  //Handle on 
  const handleOnSubmit = () => {
    validateTitle();
    validateDescription();
    validateTags();
    validateLinks();
    validateImages();

    if (
      errorDescription === "" &&
      errorTitle === "" &&
      errorTags === "" &&
      errorLink === "" &&
      errorImage === "" 
    ) {
      setNoError("Your project was submit!")
      const Project = {
        title: project.title,
        description: project.description,
        tags: tags,
        links: links,
        imageurls: imageurls,
      };

      //console.log(galleta);
      {/*
       axios
        .post("http://localhost:3010/sprojects/create", Project, {
          headers: {
            "auth-token": window.localStorage.getItem("auth-token"),
          },
        })
        .then((res) => console.log(res.data));*/ }
      
    }
  };

  //On delete


  const onDeleteTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index));
  };
  const onDeleteImage = (index) => {
    setImages(images.filter((image, i) => i !== index));
  };
  const onDeleteLink = (index) => {
    setLinks(links.filter((link, i) => i !== index));
  };

  return (
    <div>
      <div className={styles.WrapperTitle}>
          <p className={styles.Title}>Create SProject</p>
      </div>
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
        <div className={styles.Box4}>
          <label className={styles.Label}>Links</label>
          <div className={styles.TagButtonContainer}>
            <input
              className={styles.TagInput}
              placeholder="Programming, Marketing, etc..."
              name="currentLink"
              autoComplete="off"
              onChange={handleOnChange}
            />
            <input 
              className={styles.Button} 
              type="button" 
              value="Add" 
              onClick={onAddLink}/>
          </div>
          <p className={styles.ErrorMsg}>{errorLink}</p>
          <div className={styles.TContainer}>
            {links.map((link, index) => (
              <div
                className={`${styles.Tag} ${styles.TopicTag}`}
                onClick={() => onDeleteLink(index)}
              >
                {link}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.Box5}>
          <div className={styles.LinkButtonContainer}>
            <div className={styles.InputLabelContainer}>
              <label className={styles.Label}>Images</label>
              <input
                className={styles.TagInput}
                name="currentImage"
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.InputLabelContainer}>
              <input 
                className={styles.Button} 
                type="button" 
                value="Add image" 
                onClick={onAddImage}
              />
            </div>
            <p className={styles.ErrorMsg}>{errorImage}</p>
            <div className={styles.TContainer}>
            {imageurls.map((image, index) => (
              <div
                className={`${styles.Tag} ${styles.TopicTag}`}
                onClick={() => onDeleteImage(index)}
              >
                {image}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      <div className={styles.CreateButtonBox}>
        <p className={styles.ErrorMsg}>{noError}</p>
        <input
          className={styles.CreateButton}
          type="button"
          value="Create!"
          onClick={handleOnSubmit}
        />
      </div>
    </div>
  );
}

export default CreateSProject;
