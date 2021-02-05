import React, { useState } from "react";
import styles from "./CreateSProjectStyles.module.scss";
import { validateAll, validateImage, validateLink} from '../ValidationsFiles/CreateSProjectValidation'
import {validateTag} from '../ValidationsFiles/GeneralValidation'


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
  const [message, setMessage] = useState({
      errorTitle : "",
      errorDescription: "",
      errorTag: "",
      errorLink: "",
      errorImage: "",
      success : ""
    });

  const handleOnChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };
  //onADD ******************************************************************************************************************************
  const onAddTag = (event) => {
    setMessage({...message, errorTag: validateTag(tags, project.currentTag)})
    if(message.errorTag===""){
      setTags((t) => [...t, project.currentTag]);
      setProject({
        ...project,
        currentTag: "",
      });
    }
  };
  const onAddImage = (event) => {
    setMessage({...message, errorImage: validateImage(imageurls, project.currentImage)})
    if(message.errorImage===""){
      setImages((i) => [...i, project.currentImage]);
      setProject({
        ...project,
        currentImage: "",
      });
    }
  };
  const onAddLink = (event) => {
    setMessage({...message, errorLink: validateLink(links, project.currentLink)})
    if(message.errorLink===""){
      setLinks((l) => [...l, project.currentLink]);
      setProject({
        ...project,
        currentLink: "",
      });
    }
  };
  //On delete ******************************************************************************************************************************
  const onDeleteTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index));
  };
  const onDeleteImage = (index) => {
    setImages(images.filter((image, i) => i !== index));
  };
  const onDeleteLink = (index) => {
    setLinks(links.filter((link, i) => i !== index));
  };
  //On submit ******************************************************************************************************************************
  const handleOnSubmit = () =>{
    let finalmessages = validateAll(project, tags, links, imageurls)
    setMessage({
      errorTitle : finalmessages.errorTitle,
      errorDescription: finalmessages.errorDescription,
      errorTag: finalmessages.errorTag,
      errorLink: finalmessages.errorLink,
      errorImage: finalmessages.errorImage,
      success : finalmessages.success
    })
  }

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
          <p className={styles.ErrorMsg}>{message.errorTitle}</p>
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
          <p className={styles.ErrorMsg}>{message.errorDescription}</p>
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
          <p className={styles.ErrorMsg}>{message.errorLink}</p>
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
          <p className={styles.ErrorMsg}>{message.errorImage}</p>
        </div>
      </div>
      <div className={styles.CreateButtonBox}>
      <p className={styles.ErrorMsg}>{message.success}</p>
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
