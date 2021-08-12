import React, { useState } from "react";
import styles from "./CreateSProjectStyles.module.scss";
import { Redirect } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai";
import {
  sprojectValidation,
  validateLink,
} from "../validation/CreateSProjectValidation";
import { BACKEND_DEV } from '../constants'
import { validateTag } from "../validation/GeneralValidation";
import axios from "axios";
import { auth, base } from "../base";

function CreateSProject({ loginStatus }) {
  const [project, setProject] = useState({
    title: "",
    description: "",
    currentTag: "",
    currentLink: "",
    currentImage: "",
  });

  const [links, setLinks] = useState([]);
  const [tags, setTags] = useState([]);
  const [files, setFiles] = useState([]); // array of file objects for uploading
  const [previews, setPreviews] = useState([]); // array for local URL Objects for previewing an image
  const [uploadMsg, setUploadMsg] = useState(); // feedback for image uploader input
  const [status, setStatus] = useState();
  const [redirect, setRedirect] = useState(false);
  const [newId, setNewId] = useState("");

  const [messages, setMessages] = useState({
    errorTitle: "",
    errorDescription: "",
    errorTags: "",
    errorLinks: "",
  });

  const onFileSubmit = (e) => {
    // Adds the selected file to the files array for preloading
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


  const onAddTag = (e) => {
    let validTag = validateTag(tags, project.currentTag);
    setMessages({ ...messages, errorTags: validTag });
    if (validTag == "") {
      setTags((t) => [...t, project.currentTag]);
      setProject({
        ...project,
        currentTag: "",
      });
    }
  };


  const onAddLink = (e) => {
    let validLinks = validateLink(links, project.currentLink);
    setMessages({ ...messages, errorLinks: validLinks });
    if (validLinks === "") {
      setLinks((l) => [...l, project.currentLink]);
      setProject({
        ...project,
        currentLink: "",
      });
    }
  };


  const onDeleteTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index));
  };
  const onDeleteImage = (index) => {
    setPreviews(previews.filter((image, i) => i !== index));
    setUploadMsg("");
  };
  const onDeleteLink = (index) => {
    setLinks(links.filter((link, i) => i !== index));
  };


  const handleOnSubmit = async () => {
    console.log("Creating an Sproject...");

    let validation = sprojectValidation(project, tags, links);
    if (validation.ok) {
      console.log("Input Validation returned OK")
      let imageurls = await processFiles();
      if (imageurls.length == 0) imageurls = undefined;

      const Project = {
        title: project.title,
        description: project.description,
        tags,
        links,
        imageurls,
      };

      const idToken = await auth.currentUser?.getIdToken(true);
      if (!idToken) return;

      const authTokenHeader = {
        'authorization': `Bearer ${idToken}`,
      };

      console.log("Saving new sproject:")
      console.log(JSON.stringify(Project));

      axios
        .post(BACKEND_DEV + "/sprojects/create", Project, {
          headers: authTokenHeader
        })
        .then((resp) => {
          let msg = (
            <p className={`${styles.StatusMsg} ${styles.Ok}`}>
              Project created succesfully!
            </p>
          );
          setStatus(msg);
          console.log("Saved oproject and images succesfully", resp);
          setTimeout(() => setRedirect(true), 2000);
        })
        .catch((err) => {
          let msg = (
            <p className={styles.ErrorMsg}>
              Something went wrong: {err.message}
            </p>
          );
          setStatus(msg);
          console.error(err);
        });

    } else {
      console.log("Validation not OK");
      setMessages({
        errorTitle: validation.errorTitle,
        errorDescription: validation.errorDescription,
        errorTags: validation.errorTags,
        errorLinks: validation.errorLinks,
      });

      let msg = (
        <p className={styles.ErrorMsg}>
          Please check your inputs!
        </p>
      );
      setStatus(msg);

    }
  };

  const processFiles = async () => {
    // Uploads images to Firebase Storage and returns the Download URLs in an Array
    console.log("Uploading files to storage...");

    let aux = [];
    const storageRef = base.storage().ref();

    // Loop over state's files array
    for (let i = 0; i < files.length; i++) {
      console.log("Storing:", files[i].name);

      let fileRef = storageRef.child(files[i].name);
      try {
        await fileRef.put(files[i]);
        let url = await fileRef.getDownloadURL();
        aux.push(url);

      } catch (error) {
        console.error(error);
        console.error("Uploaded:", aux.length, "Failed: ", files.length - aux.length);
        return aux;
      }

    }

    console.log("Total stored files = ", aux.length);
    return aux;
  };


  return redirect ? (
    <Redirect to={`/sprojects/${newId}`} />
  ) : (
    <div>
      <div className={styles.WrapperTitle}>
        <p className={styles.Title}>New Portfolio Project</p>
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
          <p className={styles.ErrorMsg}>{messages.errorTitle}</p>
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
          <p className={styles.ErrorMsg}>{messages.errorDescription}</p>
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

            <p className={styles.ErrorMsg}>{messages.errorTags}</p>
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
              placeholder="https://yourproject.com/awesome"
              name="currentLink"
              autoComplete="off"
              onChange={handleOnChange}
            />
            <input
              className={styles.Button}
              type="button"
              value="Add"
              onClick={onAddLink}
            />
          </div>
          <p className={styles.ErrorMsg}>{messages.errorLinks}</p>
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
          <div>
            {" "}
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
      </div>
      <div className={styles.CreateButtonBox}>
        {status}
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
