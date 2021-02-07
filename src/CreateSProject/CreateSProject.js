import React, { useState } from "react";
import styles from "./CreateSProjectStyles.module.scss";
import { validateAll, validateLink} from '../Validation/CreateSProjectValidation'
import {validateTag} from '../Validation/GeneralValidation';
import axios from 'axios';
import {base} from '../base';

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
  const [files, setFiles] = useState([]);     // array of file objects for uploading
  const [previews, setPreviews] = useState([]);   // array for local URL Objects for previewing an image 
  const [imageurls, setImageurls] = useState([]);   // array of image URLs obtained to render as source and save to DB
  const [uploadMsg, setUploadMsg] = useState();
  const onFileSubmit = (e) => {
    // adds the selected file to the files array for preloading
    e.preventDefault();
    let f = e.target.file.files[0];
    let fpreview = URL.createObjectURL(f);
    setPreviews(previews => [...previews, fpreview]);
    console.log("Added", f);
    setFiles(files => [...files, f]);
    setUploadMsg(<p style={{color:"green"}}>Added file: {f.name}</p>)
    e.target.file.value = null;    // reset the input
  }

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
  /*    Images are not validated
  const onAddImage = (e) => {
    setMessage({...message, errorImage: validateImage(previews, project.currentImage)})
    if(message.errorImage===""){
      setPreviews((i) => [...i, project.currentImage]);
      setProject({
        ...project,
        currentImage: "",
      });
    }
  };*/
  const onAddLink = (e) => {
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
    setPreviews(images.filter((image, i) => i !== index));
  };
  const onDeleteLink = (index) => {
    setLinks(links.filter((link, i) => i !== index));
  };
  //On submit ******************************************************************************************************************************
  const handleOnSubmit = async () =>{
    console.log("Creating an Sproject...");
    let validation = validateAll(project, tags, links, previews)
    setMessage({
      errorTitle : validation.errorTitle,
      errorDescription: validation.errorDescription,
      errorTag: validation.errorTag,
      errorLink: validation.errorLink,
      success : validation.success
    });
    if (message.success==="") {
      // No errors. Create Sproject and post to DB, then post process images to Store and link to db object
      await processFiles();
      const Project = {
        title: project.title,
        description: project.description,
        // collaborators:[],
        tags,
        links,
        imageurls
      }
      console.log("Attempt to save sproject:")
      console.log(JSON.stringify(Project));
      axios
        .post("http://localhost:3010/sprojects/create", Project, {
            headers: {
            // Send the JWT along in the request header
            "auth-token": window.localStorage.getItem("auth-token"),
            },
        })
        .then((newDoc) => {
            success = "Project created succesfully!";
            console.log("Saved oproject and images succesfully");
        }).catch(err => {
          console.log("Could not save sproject")
          console.log(err);
        })
    }
  }

  const processFiles = async () => {
      // save images to Firebase Storage and retrieve Download URLs of each
      let imageurls = Array();
      const storageRef = base.storage().ref();
      for (let i=0; i<files.length; i++) {
        console.log(files[i].name);
        let fileRef = storageRef.child(files[i].name);
        await fileRef.put(files[i]);
        let url = await fileRef.getDownloadURL();
        imageurls.push(url);
      }
      console.log(imageurls);
      setImageurls(imageurls);
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
          {/*
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
          </div>*/}
          <div> {/* Image Uploader starts here */}
            <p style={{color:"white"}}>File Uploader</p>
            <form onSubmit={onFileSubmit}>
              <input type="file" name="file"/>
              <input type="submit" value="Add image"/>
            </form>
            {uploadMsg}
          </div>
            <div className={styles.TContainer}>
            {previews.map((url, index) => (
              <div
                className={styles.Preview}
                onClick={() => onDeleteImage(index)}
              >
                <img src={url}/>
              </div>
            ))}
          </div>
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
