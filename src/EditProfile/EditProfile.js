import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./EditProfileStyles.module.scss";
import { Link, Redirect } from "react-router-dom";
import {validateTag} from '../Validation/GeneralValidation';
import { validateProfile, validateTags } from "../Validation/EditProfileValidation";
import pic1 from "./Images/pic3.svg";

export default function EditProfile() {
  const [userId, setUserId] = useState(null);
  const [redirect, setRedirect] = useState(false);   // if user is not owner or user cannot edit, we redirect
  const [learning, setLearning] = useState([]);
  const [mastered, setMastered] = useState([]);
  const [want, setWant] = useState([]);
  const [links, setLinks] = useState([]);
  const [status, setStatus] = useState();   // for validation status msg
  const [form, setForm] = useState({
    bio: "",
    name: "",
    lastname: "",
    email: "",
    major: "test",
    college:"",
    semester: 1,
    tag_master: "",
    tag_learn: "",
    tag_want: "",
    linkInput: "",
    currentLink: "",
  });

  const [message, setMessage] = useState({
    errorName: "",
    errorEmail:"",
    errorBio: "",
    errorLinks: "",
    errorMajor: "",
    errorLearning: "",
    errorMastered: "",
    errorWants: "",
  });
  
  const [colleges, setColleges] = useState([
    // retrieve from database "colleges" collection
    "ITESM",
    "UNAM",
    "IPN",
    "ITAM",
    "IBERO",
    "ANÁHUAC",
    "UAM",
    "UDLAP",
    "LA SALLE",
  ]);

  useEffect(() => {   
    // get information of logged in user
    let geebId = localStorage.getItem("geebId");
    console.log("geebId:", geebId);
    setUserId(geebId);
    if (geebId) {
      console.log("Getting user with id:", geebId);
      axios
        .get("http://localhost:3010/users/" + geebId, {
          headers: {
            // Send the JWT along in the request header
            "auth-token": window.localStorage.getItem("auth-token"),
          },
        })
        .then((response) => {
          console.log("Retrieved!");
          if (!response.data.isOwner) {
            setRedirect(false);
          }
          console.log(response.data);

          const User = response.data.user;
          let fullname = User.fullname.split(" ");
          setForm( {
            ...form,
            name: fullname[0],
            lastname: fullname[1],
            bio: User.bio,
            email: User.email
          })
          setMastered(User.mastered);
          setLearning(User.learning);
          setWant(User.want);
          setLinks(User.links);
          console.log("Setting form... Form set.")
        }).catch(err => {
          console.log("Error in Profile:", err);
      });

    } else {
      console.log("No user logged in");
      setRedirect(true);
    }
  }, [])    // empty array so it is only called on mount

  //onDelete ******************************************************************************************************************************
  const onDeleteLink = (index) => {
    setLinks(links.filter((link, i) => i !== index));
  };
  const onDeleteMastered = (index) => {
    setMastered(mastered.filter((m, i) => i !== index));
  };
  const onDeleteWant = (index) => {
    setWant(want.filter((w, i) => i !== index));
  };
  const onDeleteLearning = (index) => {
    setLearning(learning.filter((l, i) => i !== index));
  };

  //onADD ******************************************************************************************************************************
  const onAddTagMastered = (event) => {
    setMastered((mastered) => [...mastered, form.tag_master]);
  };
  const onAddTagLearning = (event) => {
    setLearning((learning) => [...learning, form.tag_learn]);
  };
  const onAddTagWant = (event) => {
    setWant((want) => [...want, form.tag_want]);
  };
  const onAddLink = (event) => {
    setLinks((links) => [...links, form.currentLink]);
  };

  //onChange ***************************************************************************************************************************
  const handleOnChange = (e) => {
    // generic handler for our inputs
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  // onSubmit ********************************************************
  const onSubmit = (e) => {
    // Validation
    console.log("Submitting:");
    const User = {
      fullname: form.name + " " + form.lastname,
      email: form.email,
      bio: form.bio,
      college: form.college,
      major: form.major,
      semester: form.semester,
      links,
      mastered,
      learning,
      want,
    }
    console.dir(User);
    const validation = validateProfile(User);
    console.dir(validation);
    /*axios.put(`/update/${userId}`)*/

  }

  return (
    redirect ? <Redirect to="/login" /> :
    <div className={styles.Wrapper}>
      <div className={styles.NamesWrapper}>
        <div className={styles.InputandLabelContainer}>
          <label className={styles.Label}>Name</label>
          <input className={styles.Input} name="name" type="text" value={form.name} onChange={handleOnChange}/>
        </div>
        <div className={styles.InputandLabelContainer}>
          <label className={styles.Label}>Last name</label>
          <input className={styles.Input} name="lastname" type="text" value={form.lastname} onChange={handleOnChange}/>
        </div>
        <div className={styles.InputandLabelContainer}>
          <label className={styles.Label}>My email</label>
          <input className={styles.Input} name="email" type="email" value={form.email} onChange={handleOnChange}/>
          <p className={styles.ErrorMsg}>{message.errorEmail}</p>
        </div>
      </div>
      <p className={styles.ErrorMsg}>{message.errorName}</p>
      <div className={styles.AboutWrapper}>
        <p className={styles.Titles}>About me</p>
        <textarea
          className={styles.TextArea}
          placeholder=" Tell us a little about yourself!"
          onChange={handleOnChange}
          name="bio"
          autoComplete="off"
          value={form.bio}
        />
      </div>

      <div className={styles.EducationWrapper}>
        <label className={styles.Label}>College:</label>
        <select className={styles.Input}>
          {colleges.map((name, index) => {
            return <option key={index} value={index}>{name}</option>; // we can use the index as logical key for db collection
          })}
        </select>
        <label className={styles.Label}>Major:</label>
        <input
          className={styles.Input}
          name="major"
          placeholder=" e.g. Psychology"
          value={form.major}
          onChange={handleOnChange}
        />
        <label className={styles.Label}>Semester:</label>
        <input
          className={styles.Input}
          name="semester"
          type="number"
          min="1"
          max="14"
          value={form.semester}
          onChange={handleOnChange}
        />
      </div>
      <div className={styles.LinksWrapper}>
        <label className={styles.Label}>Links:</label>

        <input
          placeholder=" Links to my other sites..."
          name="currentLink"
          autoComplete="off"
          className={styles.Input}
          onChange={handleOnChange}
        />
        <input
          className={styles.Button}
          type="button"
          value="Add"
          onClick={onAddLink}
        />

        <p className={styles.ErrorMsg}>{message.errorLinks}</p>
        <div className={styles.LinkListContainer}>
          {links.map((link, index) => (
            <div key={index} className={styles.Link} onClick={() => onDeleteLink(index)}>
              {link}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.MasteredContainer}>
        <label className={styles.Label}> Mastered Skills </label>
        <input
          className={styles.InputSmall}
          onChange={handleOnChange}
          name="tag_master"
          placeholder=" e.g. Editing, HTML..."
        />
        <input
          type="button"
          value="Add"
          className={styles.ButtonTags}
          onClick={onAddTagMastered}
        />

        <div className={styles.MasteredTagContainer}>
          {mastered.map((masteredTag, index) => (
            <div 
              key={index}
              onClick={() => onDeleteMastered(index)}
              className={`${styles.Tag} ${styles.Mastered}`}
            >
              {masteredTag}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.LearningContainer}>
        <label className={styles.Label}> Skills I'm Learning </label>
        <input
          className={styles.InputSmall}
          onChange={handleOnChange}
          name="tag_learn"
          placeholder=" e.g. Editing, HTML..."
        />
        <input
          type="button"
          value="Add"
          className={styles.ButtonTags}
          onClick={onAddTagLearning}
        />
        <div className={styles.LearningTagContainer}>
          {learning.map((learningTag, index) => (
            <div
              key={index}
              onClick={() => onDeleteLearning(index)}
              className={`${styles.Tag} ${styles.Learning}`}
            >
              {learningTag}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.WantContainer}>
        <label className={styles.Label}> Skills I Want to Learn </label>
        <input
          className={styles.InputSmall}
          onChange={handleOnChange}
          name="tag_want"
          placeholder=" e.g. Editing, HTML..."
        />
        <input
          type="button"
          value="Add"
          className={styles.ButtonTags}
          onClick={onAddTagWant}
        />
        <div className={styles.WantTagContainer}>
          {want.map((wantTag, index) => (
            <div
              key={index}
              onClick={() => onDeleteWant(index)}
              className={`${styles.Tag} ${styles.Want}`}
            >
              {wantTag}
            </div>
          ))}
        </div>
        <input
          className={`${styles.Button} ${styles.Large}`}
          type="button"
          value="Update"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
}
